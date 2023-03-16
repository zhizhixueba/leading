/**
 * Author: Meng
 * Date: 2023-03
 * Desc: 
 * 
 * 如需扩展功能自行添加
 */

import { postEventToNative, Bus } from './bus'

/** 向 RN 发送消息
 * @param {*} msg: '操作事项名' 或者  {event: '操作事项名', params: '参数', mode '类型'}
 * @param {*} params '参数'
 * @param {*} mode '类型' long:长监听 设置长监听停止使用时需要手动移除
 */
export function postMessage(msg, params = {}, mode = '') {
  let event = typeof msg == 'string' ? { event: msg, params, mode } : msg;
  return postEventToNative(event);
}

/** 移除长监听 */
export function removeEvent(key) {
  Bus.remove({key})
}