/**
 * Author: Meng
 * Date: 2023-03
 * Desc: 
 * 
 * 如需扩展功能自行添加
 */

import { postEventToNative } from './bus'

/** 向 RN 发送消息
 * @param {*} msg: '操作事项名' 或者  {event: '操作事项名', params: '参数'}
 * @param {*} params '参数'
 */
export function postMessage(msg, params = {}, mode = '') {
  let event = typeof msg == 'string' ? { event: msg, params, mode } : msg;
  return postEventToNative(event);
}