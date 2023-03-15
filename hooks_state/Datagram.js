/**
 * Author: Meng
 * Date: 2023-
 * Desc: 可优化的地方
 */

export default class Datagram {

  value = null;
  _listener = null;

  constructor(data) {
    this.value = data;
  }

  next = (data) => {
    const update = this._chilkData(data); // 这里可以自定义交验数据是否相当的规则
    if(update) {
      this.value = data;
      this._listener && this._listener(data);
    }
  }

  _chilkData = (data) => {
    return true;
  }

  bind = (func) => {
    this._listener = func;
  }

  unbind =()=> {
    this._listener = null
  }
}