/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 网络请求实体
 */

export async function network(options={}) {
  const option = { method: options.method, headers: options.headers };
  if (option.method == "POST") {
    delete option.data;
    option.body = JSON.stringify(options.data);
  }
  const res = await fetch(options.url, option);
  return await res.json();
}

// 上传
export function upload(options={}) {

  return new Promise((resolve) => {

    const formData = new FormData();
    formData.append('name', 'abc123'); // formData 只接文件、Blob 或字符串，不能直接传数组，可以循环嵌入
    formData.append('attach', options.file);

    fetch(options.url, { method: 'POST', body: data, headers: options.header })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        let data = JSON.parse(res.data);
        resolve({
          code: -1,
          message: data.message,
          status: data.success,
          data: data.result,
        });
      })
      .catch((err) => {
        console.log(err);
        resolve({
          code: -1,
          message: err,
          status: false,
          data: null,
        });
      })
      .finally(() => {

      })
  });
}

export function uploads(files) {
  const formData = new FormData();
  // const photos = document.querySelector('input[type="file"][multiple]'); // <input type="file" multiple />
  const files = [];

  formData.append('title', 'My Vegas Vacation');
  for (let i = 0; i < files.length; i++) {
    formData.append(`photos_${i}`, photos.files[i]);
  }

  fetch('https://example.com/posts', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// 下载
export function download(path, params) {
  console.log(path);
  const param = JSON.stringify(params)
  const post = param.length > 5
  const option = {
    method: post ? 'POST' : 'GET',
    headers: { 'token': '' }
  }
  if (post) {
    const body = new FormData()
    for (const key in params) {
      const value = params[key];
      body.append(key, value)
    }
    option.body = body;
  }
  return new Promise((resolve) => {

    /**
     * body 也可以是以下任意类型的实例。

    ArrayBuffer
    ArrayBufferView (Uint8Array 等)
    Blob/File
    string
    URLSearchParams
    FormData

Body 类定义了以下方法（这些方法都被 Request 和 Response所实现）以获取 body 内容。这些方法都会返回一个被解析后的 Promise 对象和数据。

    Request.arrayBuffer() / Response.arrayBuffer()
    Request.blob() / Response.blob()
    Request.formData() / Response.formData()
    Request.json() / Response.json()
    Request.text() / Response.text()

     */
    fetch(`${baseURL}${path}`, option)
      .then((data) => data.blob() || data.json())
      .then((res) => {
        console.log('下载成功', res);
        let fileName = window.URL.createObjectURL(res);
        console.log(fileName);
        resolve({
          status: true,
          data: fileName
        });
      })
      .catch((err) => {
        console.log(err);
        resolve({
          status: false,
          message: ''
        });
      })
      .finally(() => {

      })
  });
}