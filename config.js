/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 网络请求配置
 */

export const Config = {
  host: 'base',
  env: 'prod',
  // env: 'test',
}

// 参数处理
export function formatParams(data) {
  return data
}

// 请求头处理
export function formatHeader(header) {
  return {
    'Content-Type': 'application/json',
    ...header
  }
}

// 根据环境获取根路径
export function getEnvHost(host = 'base', env = 'prod') {
  return AppHost[env][host];
}

const AppHost = {
  prod: {
    ws: 'ws://localhost:89',
    base: 'http://localhost/app',
    auth: 'http://localhost/auth',
    oss: 'http://localhost/oss',
  },
  test: {
    ws: 'ws://192.168.23.170:89',
    base: 'http://192.168.23.170:8093/app',
    auth: 'http://192.168.23.170:8093/auth',
    oss: 'http://192.168.23.170:8093/oss',
    
  }
}