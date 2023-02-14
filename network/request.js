/**
 * Author: Meng
 * Date: 2021-09-15
 * Desc: 网络封装
 */

import { network, upload } from './fetch'
import { Config, getEnvHost, formatHeader, formatParams } from './config'

// 请求
export function request({ path, method = "GET", data = {}, headers = {}, host = Config.host, env = Config.env, loading = true, loadingStr = "加载中...", toast = true } = {}) {

  // loading && _showLoading(loading, loadingStr); // 加载框

  const url = getEnvHost(host, env) + path; // 拼接请求地址
  data = formatParams(data); // 处理参数
  headers = formatHeader(headers); // 处理请求头

  const options = { url, method, data, headers }; // 参数重组
  return new Promise((resolve) => {
    console.log(options);
    let result = { code: -1, message: '', data: null, header: {} }
    // 发起请求
    network(options).then((res) => {
      if (res.code == 0) {
        _parseData(res, result);
      } else {
        _parseErr(res, result);
      }
      resolve(result);
    }).catch((err) => {
      result.code = -101;
      result.message = err.message || '服务升级中，请稍后';
      resolve(result);
    }).finally(() => {
      console.log(result);
      loading && _showLoading(false, loadingStr);
      if (toast && result.code != 0 && result.message) {
        _showToast(result.message);
      }
    });
  });
}

// 上传多文件
export function uploads(files = []) {
  if (files && files.length > 0) {
    _loading(true, '上传中...');
    return new Promise((resolve) => {
      Promise.all(files.map((e) => upload(e)))
        .then((array) => {
          let data = { all: false, count: array.length, imgs: [] };
          if (array) {
            array.forEach((e) => {
              if (e.code == 0) {
                data.imgs.push(e);
              }
            });
            data.all = data.imgs.length == data.count;
          }
          resolve({ code: 0, data });
        })
        .catch((err) => {
          console.log(err);
          resolve({ code: -1003, data: null });
        });
    });
  }
}

// 上传文件
export function upload(file) {
  const url = getEnvHost('oss');
  return upload({ url, file, type: 'file' });
}

// {code, result, msg}
function _parseData(res, result) {
  result.code = res.code;
  result.data = res.data;
  result.message = res.message;
  if (res.code == 501) {
    // 登录
  }
}

function _parseErr(res, result) {
  const code = res.code || res.status;
  const message = res.message;
  result.code = code;
  if (code == 404) {
    result.message = '接口路径404有误！'
  } else if (code == 405) {
    result.message = '请求方法有误！'
  } else {
    result.message = message;
  }

}

// 显示加载框
function _showLoading(loading, loadingStr) {
  console.log(loading, loadingStr);
}

// 显示toast
function _showToast(msg) {
  alert(msg)
}
