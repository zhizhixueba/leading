/**
 * Author: Meng
 * Date: 2023-03
 * Desc: 已经开放使用的API
 */

interface ShareParams {
  mode: string;
  url?: string;
  path?: string;
  image?: string;
  title?: string;
  openId?: string;
  desc?: string;
  scene?: string;
  ticket?: string;
  env?: string;
}

/**
 * 已经开放使用的API。
 * ❗️注:如使用未开放的API请调用{tools中的postMessage()}
 */
declare class NativeApi {
  /**
   * 发送消息
   * @param params -{emit: '事件类型名', params: {参数}}
   */
  static sendEventEmitter(params: { emit: string; params?: any }): Promise<any>;

  /**
   * 登录帐号
   */
  static gotoLogin(): Promise<any>;

  /**
   * 退出登录
   * @param params -{path: '退出账号跳转到某页面', params: '参数'}
   */
  static logoutAccount(params: { path: string; params?: any }): Promise<any>;

  /**
   * 获取个人信息
   * @param params -{mode: '模式 info|login'}
   */
  static getUserInfo(params?: { mode: string }): Promise<any>;

  /**
   * 获取token
   */
  static getToken(): Promise<any>;

  /**
   * 获取App及系统信息
   * @param params 无
   */
  static getVersion(): Promise<any>;

  /**
   * 获取设备信息
   * @param params 无
   */
  static getDeviceInfo(): Promise<any>;

  /**
   * 获取设备屏幕相关信息
   * @param params 无
   */
  static getScreenInfo(): Promise<any>;

  /**
   * 当前城市及店铺信息
   * @param params 无
   */
  static getShopAndCity(): Promise<any>;

  /**
   * 设置城市及店铺信息
   * @param params -{city: '', cityCode:'', shop:'', shopCode:''}
   */
  static setShopAndCity(params: {
    city: string;
    cityCode: string;
    shop: string;
    shopCode: string;
  }): Promise<any>;

  /**
   * 显示分享面板
   * @param params -{mode: '微信分享类型', link: '链接', url: '分享地址', path:'小程序路径', image: '分享Icon图片', title:'分享标题‘, openId:'小程序原始id', desc:'分享描述', scene:'场景', ticket:'', env:'版本环境' }
   * @param mode -微信分享类型: mini:小程序，web:h5，video:视频，image:图片，file:文件，text:文本内容，
   * @param scene -场景: 0聊天，1朋友圈，2收藏，3指定人
   * @param env -小程序环境: 正式0，测试1，体验2'
   */
  // static showShare(params: { mode: string; link?: string;
  //   url?: string; path?: string; image?: string; title?: string; openId?: string;
  //   desc?: string; scene?: string; ticket?: string; env?: string; }): Promise<any>;
  static showShare(params: {
    title: string;
    items: Array<ShareParams>;
  }): Promise<any>;

  /**
   * 配置标题栏
   * @param params -{titleStyle: '标题样式', barTheme: '状态栏字体(dark/light)', translucent: '是否悬浮状态栏',hidden: '隐藏',backgroundColor: '标题栏背景' }
   * @param barTheme -值 dark/light
   */
  static setHeaderConfig(params: {
    titleStyle?: string;
    barTheme?: string;
    translucent?: boolean;
    hidden?: boolean;
    backgroundColor?: string;
  }): Promise<any>;

  /**
   * 更新标题
   * @param params 标题文字
   */
  static updateTitle(title: string): Promise<any>;

  /**
   * 顶部右边菜单栏
   * @param params -{item: [{icon: '', tag: ''}]}
   */
  static setHeaderMenu(params: {
    item: Array<{ icon: string; tag: string }>;
  }): Promise<any>;

  /**
   * 打开聊天室
   * @param params -{}
   */
  static openChatRoom(params?: any): Promise<any>;

  /**
   * 打开在线客服
   * @param params -{}
   */
  static openOnline(params?: any): Promise<any>;

  /**
   * 发送短信
   * @param params -{phone: '手机号', text: '短信文本'}
   */
  static sendSms(params: { phone?: string }): Promise<any>;

  /**
   * 拨打电话
   * @param params -{phone: '手机号', title: '弹窗标题'}
   */
  static callPhone(params: { phone: string; text?: string }): Promise<any>;

  /**
   * 选择时间
   * @param params -{ }
   * @returns
   */
  static onChooseDate(params?: any): Promise<any>;

  /**
   * 预览图片
   * @param params -{current: '当前显示第几张', list: []}
   */
  static previewImage(params: {
    current?: number;
    list: Array<string>;
  }): Promise<any>;

  /**
   * 打开媒体库
   * @param params -{mode: '相册，相机，文件', count: '张数',}
   */
  static chooseMedia(params: { mode?: string; count?: number }): Promise<any>;

  /**
   * 打开相机
   * @param params -{mode: '模式', front: '前后镜头', items: [{label: '标签', value: '值'}]}
   */
  static openCamera(params: {
    mode?: string;
    front?: string;
    items?: Array<{ label: string; value: string | number }>;
  }): Promise<any>;

  /**
   * 扫二维码
   */
  static qrcodeScan(): Promise<any>;

  /**
   * 直播
   * @param params
   */
  static liveVideo(params?: any): Promise<any>;

  /**
   * 选择地址
   * @param params -{longitude:'', latitude:'', city: '城市'}
   */
  static chooseAddress(params: {
    longitude: number;
    latitude: number;
    city?: string;
  }): Promise<any>;

  /**
   * 获取当前定位
   * @param params -{geocode: '是否获取地理编码true|false'}
   */
  static getLocation(params: { geocode?: boolean }): Promise<any>;

  /**
   * 打开地图导航
   * @param params -{longitude:'', latitude:'', name:'地址名'}
   */
  static mapNavigation(params: {
    longitude: number;
    latitude: number;
    name: string;
  }): Promise<any>;

  /**
   * 打开小程序
   * @param params -{path:'小程序路径', image: '预览图', openId:'小程序原始id', env:'小程序环境:正式0，测试1，体验2' }
   */
  static openWechat(params: {
    path: string;
    image: string;
    openId: string;
    scene?: number;
    env?: string;
    title?: string;
  }): Promise<any>;

  /**
   * 微信分享
   * @param params -{mode: '微信分享类型', url: '分享地址', path:'小程序路径', image: '分享Icon图片', title:'分享标题‘, openId:'小程序原始id', desc:'分享描述', scene:'场景', ticket:'', env:'版本环境' }
   * @param mode -微信分享类型: wechat:小程序，web:h5，video:视频，image:图片，file:文件，text:文本内容，
   * @param scene -场景: 0聊天，1朋友圈，2收藏，3指定人
   * @param env -小程序环境: 正式0，测试1，体验2'
   */
  static wechatShare(params: {
    mode: string;
    url?: string;
    path?: string;
    image: string;
    openId?: string;
    scene?: number;
    env?: string;
    title?: string;
    desc?: string;
    ticket?: string;
  }): Promise<any>;

  /**
   * 打开app
   * @param params -{app: 'app名', url: 'app包名', path: '路径', params: '参数'}
   */
  static openApp(params: {
    app?: string;
    url?: string;
    path?: string;
    params?: any;
  }): Promise<any>;

  /**
   * 唤起支付
   * @param params -{version: '支付版本', options: '参数'}
   */
  static openPayment(params: { version?: string; options: any }): Promise<any>;

  /**
   * 唤起收银台
   * @param params -{memo: '', options}
   */
  static openCashier(params: { memo: string; options: any }): Promise<any>;
}

export default NativeApi;
