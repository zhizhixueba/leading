/**
 * Author: Meng
 * Date: 2023-
 * Desc: 网络请求配置
 */

// 常量配置
export const app_config = {
  env: 'prod', // prod: 生产, test: 测试, dev: 开发
}

// 获取环境域名
export function getRequestHost(host = 'def', env = app_config.env) {
  return env_hosts[env][host];
}

// 统一处理参数
export function mergeParams(params = {}, url='') {
  if(url.includes('store')) {
    params.app = 'h5_store'
  }
  return params;
}

// 统一处理请求头
export function mergeHeaders(headers = {}) {
  headers.token = 'ASDIAH2H345K2HH32JH4KJ2K2J34_Test';
  headers['Content-Type'] = 'application/json';
  return headers;
}

// 环境服务域名配置
const env_hosts = {
  prod: {
    def: 'http://def.com',
    auth: 'http://auth.com',
    order: 'http://order.com',
  },
  test: {
    def: 'http://def-test.com',
    auth: 'http://auth-test.com',
    order: 'http://order-test.com',
  }
}
