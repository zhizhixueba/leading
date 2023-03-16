/**
 * Author: Meng
 * Date: 2023-03
 * Desc:
 */

interface EventProps {
  event: string; // API名称
  params?: object | string | number; // 参数
  mode?: string; // 类型  long长监听
}

/** 向 RN 发送消息
 * @param {*} msg: '操作事项名' 或  {event: '操作事项名', params: '参数'}
 * @param {*} params '参数'
 */
export declare function postMessage(
  msg: string | EventProps,
  params?: object | string | number,
  mode?: string
): Promise<any>;
