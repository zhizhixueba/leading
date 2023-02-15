/**
 * Author: Meng
 * Date: 2023-02-10
 * Desc: 瀑布流布局
 */
Page({
  data: {
    leftHeight: 0,
    rightHeight: 1,
    itemList: [], // { tag: 'left', type: 1, name: 0 }, // tag：left-左边；right-右边   type: 0黄色方格；1粉色方格
  },

  onLoad(options) {},

  onReady() {
    this._loadDatas();
  },

  onUnload() {},

  onPullDownRefresh() {
    this.setData({
      itemList: [],
    });
    wx.stopPullDownRefresh();
  },

  onReachBottom() {
    this._loadDatas();
  },

  _loadDatas() {
    const that = this;

    let leftHeight = that.data.leftHeight;
    let rightHeight = that.data.rightHeight;
    let itemList = [].concat(that.data.itemList);

    for (let i = 0; i < 20; i++) {
      const type = Math.random() * 10 > 5 ? 1 : 0;
      let tag = '';

      // 添加元素/计算高度
      if (leftHeight > rightHeight) {
        tag = 'right';
        rightHeight += 280;
        if (type == 1) {
          leftHeight -= 30; // 计算高度
        }
      } else {
        tag = 'left';
        leftHeight += 280;
        if (type == 1) {
          rightHeight -= 30; // 计算高度
        }
      }
      itemList.push({ tag, type, name: i});
    }

    that.setData({ itemList, rightHeight, leftHeight });
  },
});
