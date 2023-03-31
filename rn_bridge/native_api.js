/**
 * Author: Meng
 * Date: 2023-03
 * Desc: 
 * 如需扩展功能自行添加
 */
import { postEventToNative } from './bus';

/**
 * 已经开放使用的API。
 * ❗️注: 如使用未开放的API请调用{tools中的postMessage()}
 */
class NativeApi {

  /**
   * 发送消息
   * @param params {emit: '事件类型名', params: {参数}}
   */
  static sendEventEmitter(params = {}) {
    return postEventToNative({ event: 'emitter', params });
  }

  /**
   * 登录帐号
   */
  static gotoLogin() {
    return postEventToNative({ event: 'login', params: null });
  }

  /**
   * 退出登录
   * @param params -{path: '退出账号跳转到某页面'}
   */
  static logoutAccount(params = {}) {
    return postEventToNative({ event: 'logout', params });
  }

  /**
   * 获取个人信息
   * @param params -{mode: '模式 info|login'}
   */
  static getUserInfo(params = {}) {
    return postEventToNative({ event: 'userInfo', params });
  }

  /**
   * 获取token
   */
  static getToken() {
    return postEventToNative({ event: 'token', params: null });
  }

  /**
   * 获取App及系统信息
   * @param params 无
   */
  static getVersion() {
    return postEventToNative({ event: 'version', params: null });
  }

  /**
   * 获取设备信息
   * @param params 无
   */
  static getDeviceInfo() {
    return postEventToNative({ event: 'device', params: null });
  }

  /**
   * 获取设备屏幕相关信息
   * @param params 无
   */
  static getScreenInfo() {
    return postEventToNative({ event: 'screen', params: null });
  }

  /**
   * 当前城市及店铺信息
   * @param params 无
   */
  static getShopAndCity() {
    return postEventToNative({ event: 'shopAndCity', params: null });
  }

  /**
   * 设置城市及店铺信息
   * @param params {city: '', cityCode:'', shop:'', shopCode:''}
   */
  static setShopAndCity(params = {}) {
    return postEventToNative({ event: 'setShopAndCity', params });
  }

  /**
   * 显示分享面板
   * @param params -{mode: '微信分享类型', link: '链接', url: '分享地址', path:'小程序路径', image: '分享Icon图片', title:'分享标题‘, openId:'小程序原始id', desc:'分享描述', scene:'场景', ticket:'', env:'版本环境' }
   * @param mode -微信分享类型: mini:小程序，web:h5，video:视频，image:图片，file:文件，text:文本内容，
   * @param scene -场景: 0聊天，1朋友圈，2收藏，3指定人
   * @param env -小程序环境: 正式0，测试1，体验2'
   */
  static showShare(params = {}) {
    return postEventToNative({ event: 'share', params });
  }

  /**
   * 配置标题栏
   * @param params -{titleStyle: '标题样式', barTheme: '状态栏字体(dark/light)', translucent: '是否悬浮状态栏',hidden: '隐藏',backgroundColor: '标题栏背景' }
   */
  static setHeaderConfig(params = {}) {
    return postEventToNative({ event: 'header', params });
  }

  /**
   * 更新标题
   * @param params -标题文字
   */
  static updateTitle(title = '') {
    return postEventToNative({ event: 'title', params: title });
  }

  /**
   * 顶部右边菜单栏
   * @param params -{item: [{icon: '', title: ''}]}
   */
  static setHeaderMenu(params = {}) {
    return postEventToNative({ event: 'headerMenu', params });
  }

  /**
   * 打开聊天室
   * @param params {}
   */
  static openChatRoom(params = {}) {
    return postEventToNative({ event: 'chatRoom', params });
  }

  /**
   * 打开在线客服
   * @param params {}
   */
  static openOnline(params = {}) {
    return postEventToNative({ event: 'online', params });
  }

  /**
   * 发送短信
   * @param params -{phone: '手机号', text: '短信文本'}
   */
  static sendSms(params = {}) {
    return postEventToNative({ event: 'sendSms', params });
  }

  /**
   * 拨打电话
   * @param params {phone: '手机号', title: '弹窗标题'}
   */
  static callPhone(params = {}) {
    return postEventToNative({ event: 'callPhone', params });
  }

  /**
   * 预览图片
   * @param params {current: '当前显示第几张', list: []}
   */
  static previewImage(params = {}) {
    return postEventToNative({ event: 'previewImage', params });
  }

  /**
   * 选择时间
   * @param params -{ }
   * @returns 
   */
  static onChooseDate(params = {}) {
    return postEventToNative({ event: 'chooseDate', params });
  }
  /**
   * 打开媒体库
   * @param params {mode: '相册，相机，文件', count: '张数',}
   */
  static chooseMedia(params = {}) {
    return postEventToNative({ event: 'chooseMedia', params });
  }

  /**
   * 打开相机
   * @param params {mode: '模式', front: '前后镜头', items: [{label: '标签', value: '值'}]}
   */
  static openCamera(params = {}) {
    return postEventToNative({ event: 'camera', params });
  }

  /**
   * 扫二维码
   * @param params 
   */
  static qrcodeScan() {
    return postEventToNative({ event: 'qrcodeScan', params: null });
  }

  /**
   * 直播
   * @param params 
   */
  static liveVideo(params = {}) {
    return postEventToNative({ event: 'liveVideo', params });
  }

  /**
   * 选择地址
   * @param params {longitude:'', latitude:'', city: '城市'}
   */
  static chooseAddress(params = {}) {
    return postEventToNative({ event: 'chooseAddress', params });
  }

  /**
   * 获取当前定位
   * @param params {geocode: '是否获取地理编码true|false'}
   */
  static getLocation(params = {}) {
    return postEventToNative({ event: 'getLocation', params });
  }

  /**
   * 打开地图导航
   * @param params {longitude:'', latitude:'', name:'地址名'}
   */
  static mapNavigation(params = {}) {
    return postEventToNative({ event: 'navigation', params });
  }

  /**
   * 打开小程序
   * @param params {path:'小程序路径', openId:'小程序原始id', env:'小程序环境:正式0，测试1，体验2' }
   */
  static openWechat(params = {}) {
    return postEventToNative({ event: 'openWechat', params });
  }

  /**
   * 微信分享
   * @param params -{mode: '微信分享类型', url: '分享地址', path:'小程序路径', image: '分享Icon图片', title:'分享标题‘, openId:'小程序原始id', desc:'分享描述', scene:'场景', ticket:'', env:'版本环境' }
   * @param mode -微信分享类型: wechat:小程序，web:h5，video:视频，image:图片，file:文件，text:文本内容，
   * @param scene -场景: 0聊天，1朋友圈，2收藏，3指定人
   * @param env -小程序环境: 正式0，测试1，体验2'
   */
  static wechatShare(params = {}) {
    return postEventToNative({ event: 'wechatShare', params });
  }

  /**
   * 打开app
   * @param params {app: 'app名', url: 'app包名', path: '路径', params: '参数'}
   */
  static openApp(params = {}) {
    return postEventToNative({ event: 'openApp', params });
  }

  /**
   * 唤起支付
   * @param params {version: '支付版本', options: '参数'}
   */
  static openPayment(params = {}) {
    return postEventToNative({ event: 'payment', params });
  }

  /**
   * 唤起收银台
   * @param params {memo: '', options}
   */
  static openCashier(params = {}) {
    return postEventToNative({ event: 'cashier', params });
  }
}

export default NativeApi;