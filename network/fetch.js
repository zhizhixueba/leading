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

// 下载
export function download(path) {
  console.log(path);
  return new Promise((resolve) => {

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
