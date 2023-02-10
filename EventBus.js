/**
 * Author: Meng
 * Date: 2023-01
 * Desc: 
 * 订阅，发送，移除
比如下面这几个常见的需求：
  1.如何避免重复订阅
  2.单次订阅怎么样做更好
  3.延时消息如何发送
  4.发送消息在前，订阅在后怎么实现
 */

export default class EventBus {
  static _event_list = []; // {key: '事件名次', callback: '事件回调函数', tag: '事件标识',type: '事件类型'}1单次2普通
  static _msg_list = []; // {key, data}

  static add(key, callback, tag, type) {
    this._event_list = this._event_list.filter(e => e.key != key || e.tag != tag)
    this._event_list.push({ key, callback, tag, type })

    let remove = false
    this._msg_list.forEach(e => {
      if(e.key == key) {
        remove = callback && callback(e.data)
      }
    })
    this._msg_list = this._msg_list.filter(e => e.key != key || !remove)
  }

  static once(key, callback, tag) {
    this.add(key, callback, tag, 1)
  }

  static stick(key, data) {
    this.send(key, data);

    this._msg_list = this._msg_list.filter(e => e.key != key)
    this._msg_list.push({key, data})
  }

  static send(key, data, delay) {
    if(delay > 0) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        this._sendMsg(key, data)
      }, delay)
    }else {
      this._sendMsg(key, data)
    }
  }
  static _sendMsg(key, data) {
    this._event_list.forEach(e => {
      if (e.key == key) {
        e.callback && e.callback(data)
      }
    })
    this._event_list = this._event_list.filter(e => e.key != key || e.type != 1)
  }

  static remove({ key, tag, callback } = {}) {
    if (key) {
      this._event_list = this._event_list.filter(e => e.key != key || e.tag != tag)
    } else {
      this._event_list = this._event_list.filter(e => e.callback != callback)
    }
  }
}
