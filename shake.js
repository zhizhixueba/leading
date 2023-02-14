/**
 * Author: Meng
 * Date: 2022-02-03
 * Desc: 摇一摇切换环境
 */
import { setAppEnv } from '../../modules/net/config';

const degree = 1; // 摇一摇幅度
const min_count = 10; // 最小频率
const interval = 3000; // 时间间隔
let _show = false; // 去重复弹窗
let start_time = 0;
let count = 0;
function env() {
  wx.offAccelerometerChange();
  wx.stopAccelerometer();
  wx.startAccelerometer({
    interval: 'normal',
  });
  wx.onAccelerometerChange((res) => {
    const max = Math.max(res.x, res.y, res.z);
    if (max > degree && !_show) {
      if (count < 1) {
        start_time = Date.now();
      }
      if (Date.now() - start_time < interval) {
        count += 1;
      } else {
        count = 0;
      }
      if (count > min_count && !_show) {
        _show = true;
        wx.showActionSheet({
          itemList: ['生产', '测试', '开发'],
          success: (info) => {
            setAppEnv(info.tapIndex);
          },
          complete: () => {
            count = 0;
            _show = false;
          },
        });
      }
      // console.log(max, count, start_time);
    }
  });
}
const Shake = {
  env,
};
export default Shake;
