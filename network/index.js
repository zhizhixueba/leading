/**
 * Author: Meng
 * Date: 2023-
 * Desc: 网络请求封装
 */
import { network, uploadFiles } from './fetch'
import { getRequestHost, mergeHeaders, mergeParams } from './config'

let timer_id = -1; // 
let min_interval = 600; // 

// 发送请求
export function request({ path = '', data = {}, method = 'GET', headers = {}, host = null, env = null, loading, loadingText = '加载中...', toast, reload, count = 0 } = {}) {

  // 隐藏加载框
  _showLoading(loading, loadingText);

  // 拼装参数
  const url = getRequestHost(host, env) + path;
  const params = mergeParams(data, url);
  const headers2 = mergeHeaders(headers);

  let options = { url, data: params, headers: headers2, method };

  return new Promise((resolve) => {

    const result = { code: -1, message: '', data: null, headers: null };

    network(options).then(res => {
      _parseData(res, result);
    }).catch(err => {
      _parseErr(err, result);
    }).finally(() => {
      // 隐藏加载框
      _showLoading(false, null);
      // 请求报错
      if (result.code != 0 && reload && count < 5) {
        const curCount = count + 1;
        const timer = setTimeout(() => {
          clearTimeout(timer);
          request({ path, data, method, headers, host, env, toast, loading, reload, count: curCount });
        }, 1000);
      } else {
        // 显示报错 Toast
        toast && _showToast(result.message);
        resolve(result);
      }
    });
  });
}

// 上传文件
export function upload({path, file={}, method='POST', host=null, env=null, headers={}}={}) {
  if(!file || file.length < 1) {
    return Promise.resolve({code: -3, data: null})
  }
  // 拼装参数
  const url = getRequestHost(host, env) + path;

  const body = new FormData();
  body.append('file', file);

  let options = { url, body, headers, method };

  return new Promise((resolve) => {
    const result = { code: -1, message: '', data: null};

    uploadFiles(options).then(res => {
      console.log(res);
      Object.assign(result, res);
    }).catch(err => {
      _parseErr(err, result);
    }).finally(() => {
      resolve(result);
    });
  });
}

// 解析请求返回的数据
function _parseData(res, result) {
  console.log('=======》parseData：', res);
  result.code = res.code;
  result.message = res.message;
  if (res.code == 0) {
    Object.assign(result, res);
  }
}

// 解析请求报错信息
function _parseErr(err, result) {
  console.log('=======》parseErr：', JSON.stringify(err));
  console.log(result);

}

// 显示加载框
function _showLoading(show, text) {
  console.log(show, text)
  if(timer_id) {
    clearTimeout(timer_id);
  }

  if (show) {
    // 显示
  } else {
    timer_id = setTimeout(() => {
      clearTimeout(timer_id);
      // 关闭
    }, min_interval);
  }
}


// 显示报错 Toast
function _showToast(text) {
  console.log(text)
}
