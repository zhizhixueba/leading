/**
 * Author: Meng
 * Date: 2023-
 * Desc: 网络请求实体类
 */

// 普通请求
export function network({ url, data, headers, method }) {
  let body = null;
  if (method == 'GET') {
    url = _parseData(url, data)
  } else {
    body = JSON.stringify(data);
  }
  return fetch(url, { method, headers, body }).then(res => res.json());
}

// 上传文件
export function uploadFiles({ url, body, headers, method }) {
  return fetch(url, { method, headers, body }).then(res => res.json());
}

// 下载
export function download(path, option = {}) {
  return fetch(path, option).then((data) => data.blob() || data.json());
}

function _parseData(url, params = {}) {
  console.log(params)
  let list = []
  for (const key in params) {
    list.push(`${key}=${params[key]}`)
  }
  return `${url}?${list.join('&')}`
}

