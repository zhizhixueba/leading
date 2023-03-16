/**
 * Author: Meng
 * Date: 2023-03
 * Desc: 
 */

/** 向原生发送消息
 * @param msg: {event: '操作事项名', params: '参数', mode: '类型' long长监听}
 */

interface EventProps {
  event: string; // API名称
  params?: object|string|number; // 参数
  mode?: string; // 类型  long长监听
}

// 发送消息到rn
export declare function postEventToNative(msg: EventProps): Promise<any>;

// 消息订阅类
export declare class Bus {
  // 事件注册
  static add(key: string, callback: (data: any) => void, tag: string|number, type: null): void;

  // 订阅单次事件
  static once(key: string, callback: (data: any) => void, tag: string|number): void;

  // 发送消息
  static send(key:  string, data: any, delay = 0): void;

  // 移除消息
  static remove({ key, tag, callback } = {}): void;
  // 清除
  static clear(): void;
}