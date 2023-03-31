/**
 * Author: Meng
 * Date: 2023-03
 * Desc: 
 */

/**
 * 消息体
 */
interface EventProps {
  event: string; // API名称
  params?: object|string|number; // 参数
  mode?: string; // 类型  long长监听
}

/** 
 * 向原生发送消息
 * @param msg: -{event: '操作事项名', params: '参数', mode: '类型-long｜short' }
 */
export declare function postEventToNative(msg: EventProps): Promise<any>;

/**
 * 消息订阅类
 */
export declare class Bus {
  /**
   * 事件注册
   * @param param -{key: '事件名次', callback: '事件回调函数', tag: '事件标识',type: '事件类型1单次2普通'}
   */
  static add(key: string, callback: (data: any) => void, tag: string|number, type: null): void;

  /**
   * 订阅单次事件
   * @param param -{key, callback, tag}
   */
  static once(key: string, callback: (data: any) => void, tag: string|number): void;

  /**
   * 发送消息
   * @param param -{key, data, delay}
   */
  static send(key:  string, data: any, delay = 0): void;

  /**
   * 移除消息
   * @param param -{key, tag, callback}
   */
  static remove({ key, tag, callback } = {}): void;

  /**
   * 清除所有
   */
  static clear(): void;
}