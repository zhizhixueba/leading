/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */

export default class Store {

  onCreate = (props) => {}

  onShow = () => { }

  getBeforeUpdate=(prevProps, prevState) => {}

  onUpdate = (prevProps, prevState, snapshot) => { }

  onCatch = (error, errorInfo) => { }

  shouldUpdate = (nextProps, nextState, nextContext) => {}

  onDestroy = () => { }

  // 我们可以加一下自定义的函数做一些特定功能

}