/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */

import React, { useEffect, useState } from "react"

const DataWidget = (props) => {
  const data = props.data.value;

  const [value, setValue] = useState(data);

  useEffect(() => {

    const datagram = props.data;

    // 这里可以对数据包装一下，主要是对错误兼容
    datagram.bind((msg) => {
      setValue(msg);
    });

    return datagram.unbind;
  }, [props.data]);

  return props.child(value);
}

export default DataWidget;