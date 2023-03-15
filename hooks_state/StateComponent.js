/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */

import React from "react";

export default class StateComponent extends React.PureComponent {

  constructor(props) {
    super(props);
    this._store = props.store;

    if (props.store != null) {
      props.store.onCreate(props);
    }
  }

  componentDidCatch(error, errorInfo) {
    if (this._store) {
      this._store.onCatch(error, errorInfo)
    }
  }

  componentDidMount() {
    if (this._store) {
      this._store.onShow();
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this._store) {
      this._store.getBeforeUpdate(prevProps, prevState)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this._store) {
      this._store.onUpdate(prevProps, prevState, snapshot);
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this._store) {
      this._store.shouldUpdate(nextProps, nextState, nextContext)
    }
  }

  componentWillUnmount() {
    if (this._store) {
      this._store.onDestory();
    }
  }

  render() {
    const children = this.props.children;

    if (typeof children == 'function') {
      // 函数式组件
      return children();
    } else {
      // 类组件
      return children;
    }
  }
}