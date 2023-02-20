/**
 * Author: Meng
 * Date: 2023-
 * Desc: 网络请求封装
 */
import { network } from './fetch'
import { app_config, getRequestHost, mergeHeaders, mergeParams } from './config'

// 发送请求
export function request({ path='', data={}, method='GET', headers={}, host='def', env=app_config.env, loading, loadingText='架子中...', toast, reload, count=0 } = {}) {

  // 隐藏加载框
  _showLoading(loading, loadingText);

  // 拼装参数
  const url = `${getRequestHost(host, env)}${path}`;
  const params = mergeParams(data, url);
  const headers2 = mergeHeaders(headers);

  let options = { url, data: params, headers: headers2, method };
  console.log(count,options)

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
        const curCount = count+1;
        const timer = setTimeout(() => {
          clearTimeout(timer);
          request({path, data, method, headers, host, env, toast, loading, reload, count: curCount});
        }, 1000);
      } else{
        // 显示报错 Toast
        toast && _showToast(result.message);
        resolve(result);
      }
    });
  });
}

// 解析请求返回的数据
function _parseData(res, result) {
  result.code = res.code;
  result.message = res.message;
  if (res.code == 0) {
    Object.assign(result, res);
  }
}

// 解析请求报错信息
function _parseErr(err, result) {
  console.log('parseErr', JSON.stringify(err));
  console.log(result);

}

// 显示加载框
function _showLoading(show, text) {
  console.log(show, text)
}

// 显示报错 Toast
function _showToast(text) {
  console.log(text)
}
