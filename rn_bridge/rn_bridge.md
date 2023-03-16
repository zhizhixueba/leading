# H5 与 ReactNative 交互

### 使用文档

> 使用前建议先维护一个 Key 管理的对象。如:

```js
const ApiKey = {
  userInfo: 'userInfo',
  shopAndCity: 'shopAndCity',
}

// 1.H5端：
import rn_lib from 'bnq_tools'

// rn_lib.postMessage() 返回的是 Promise
const res = await rn_lib.postMessage('你的想调用的API名', '参数', '事件类型 long表示长连接');
// or 上下两种写法都可以
const res = await rn_lib.postMessage({event: '你的想掉用的API名', params: '参数', mode: '事件类型 long表示长连接'});

//  2.React Native 端 bridge 中添加对应event的具体实现
// this.web_view.postMessage(JSON.stringify({event: 'your event type', data: 'return data'}));
```
