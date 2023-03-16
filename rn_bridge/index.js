/**
 * Author: Meng
 * Date: 2023-03
 * Desc: h5 与 ReactNative通信工具
 * 
 */

import { postMessage } from './tools';

export { default as RNTool } from './tools1'
export { default as RNToolV2 } from './tools2'

const bnq_rn_lib = {
  postMessage
};

export default bnq_rn_lib;