export const base_url = 'http://jrcapp.9rongcang.com:8080';
export const prefecture_gooods_list_url = '/jrcapp/goods/prefecture_gooods_list'; //商品列表
export const good_detail_url = '/jrcapp/goods/good_detail'; //商品详情
export const cart_num_url = '/jrcapp/cart/cart_num'; //购物车 数量
export const add_footprint_url = '/jrcapp/my/add_footprint'; //我的足迹
export const goods_coll_url = '/jrcapp/goods/goods_coll'; //收藏
export const goods_spec_url = '/jrcapp/goods/goods_spec'; //商品规格
export const cart_add_url = '/jrcapp/cart/cart_add'; //加入购物车
export const goods_evaluate_url = '/jrcapp/goods/goods_evaluate'; //查看商品全部评论
export const goods_service_url = '/jrcapp/goods/goods_service'; //服务列表
export const get_coupon_app_url = '/jrcapp/coupon/get_coupon_app'; //去领劵
export const get_coupon_url = '/jrcapp/coupon/get_coupon'; //点击优惠券领取
export const add_num_url = '/jrcapp/goods/add_num'; //商品详情规格添加数量
export const goods_option_detail_url = '/jrcapp/goods/goods_option_detail'; //点击规格回到商品详情
//购物车
export const cartlist_url = '/jrcapp/cart/cart_list'; //服务无处列表一
export const cart_delete_url = '/jrcapp/cart/cart_del'; //清空商品和删除单个商品(把巨众的拿过来)
export const add_to_cart_url = '/jrcapp/cart/add_to_cart'; //购物车添加数量(把巨众的拿过来用就行了)
export const minus_to_cart_url = '/jrcapp/cart/minus_to_cart'; //购物车减数量(把巨众的拿过来用就行了)
export const check_one_cart_url = '/jrcapp/cart/check_one_cart'; //单选和取消勾选 (把巨众的拿过来)
export const check_cart_url = '/jrcapp/cart/select_cart'; //购物车全选与全不选 默认全选（把巨众的拿过来用就行了）
export const cart_submit_url = '/jrcapp/cart/cart_submit'; //点击购物车提交到确认订单页面
export const goods_submit_url = '/jrcapp/cart/buy_submit'; //立即购买到确认订单页面
export const select_good_attr_url = '/jrcapp/cart/select_good_attr'; //去选择优惠券
export const select_coupon_url = '/jrcapp/cart/select_coupon'; //优惠券
export const cart_select_coupon_url = '/jrcapp/cart/cart_select_coupon'; //购物车优惠券就算
//支付
export const bank_my_order_submit_url = '/jrcapp/unionpay/my_order_submit'; //订单列表中的订单提交   银联支付
export const bulidParam_url = '/jrcapp/unionpay/bulidParam'; //立即购买银联支付(把其它支付方式的参数拿过
export const bank_backUrl_url = '/jrcapp/unionpay/select_order_status'; //建行回调
export const cart_bulidParam_url = '/jrcapp/unionpay/cart_bulidParam'; //购物车提交
export const goods_order_submits_url = '/jrcapp/wx/goods_order_submit'; //立即购买 微信支付
export const goods_order_submit_url = '/jrcapp/alipay/goods_order_submit'; //立即购买 支付宝支付
export const wx_order_submit_url = '/jrcapp/wx/wx_order_submit'; //购物车的商品 订单提交  微信支付
export const alipay_submit_order_url = '/jrcapp/alipay/alipay_submit_order'; //购物车提交到确认订单页面  支付宝支付
//积分
export const score_good_detail_url = '/jrcapp/score/score_good_detail'; //积分详情
export const confirm_redeem_url = '/jrcapp/score/redeem_now'; //立即兑换
export const confirm_exchange_url = '/jrcapp/score/confirm_exchange'; //确认兑换
//订单
export const order_list_url = '/jrcapp/order/order_list'; //订单列表 (参考柏源)
export const confirm_receipt_url = '/jrcapp/order/confirm_delivery'; //订单列表中 点击确认收货（把柏源的拿过来就行了）
export const order_details_url = '/jrcapp/order/order_details'; //订单列表中 查看详情（参考柏源）
export const get_evaluate_list_url = '/jrcapp/order/get_evaluate_list'; //点击去评价进入商品评价列表（将柏源 的拿过来）
export const get_evaluate_url = '/jrcapp/order/get_evaluate'; //添加评价保存(将柏源的拿过来，多了个物流评价)
export const check_evaluate_url = '/jrcapp/order/check_evaluate'; //查看当前商品的评论（将柏源的拿过来就行了）
export const my_order_submit_url = '/jrcapp/alipay/my_order_submit'; //订单列表中的订单提交   支付宝支付（把柏源的拿过来）
export const wx_my_order_submit_url = '/jrcapp/wx/wx_my_order_submit'; //订单列表中的订单提交 微信支付 (把柏源的拿过来)
export const order_del_url = '/jrcapp/order/order_del'; //订单取消

export const refund_cause_list_url = '/jrcapp/order/refund_cause_list'; //订单原因接口
export const refund_apply_url = '/jrcapp/order/refund_apply'; //申请退款
export const logistics_evaluate_save_url = '/jrcapp/order/logistics_evaluate_save'; //添加物流评价
//筛选
export const country_url = '/jrcapp/goods/country'; //国家分类
export const goods_one_classify_url = '/jrcapp/goods/goods_one_classify'; //商品的一级分类（商品筛选时会用到）
//首页
export const index_url = "/jrcapp/index/index"; //首页
export const is_shop_url = '/jrcapp/index/is_shop'; //判断账号在该区域是否是门店
export const city_list_url = '/jrcapp/index/city_list'; //首页区域
export const banners_url = '/jrcapp/index/banners'; //banner列表
export const pre_banners_url = '/jrcapp/index/pre_banners';
export const index_navigation_url = '/jrcapp/index/navigation'; //五个分类
export const index_navigations_url = '/jrcapp/index/navigation'; //中间专区
export const select_brand_more_url = '/jrcapp/index/select_brand_more'; //点击精选品牌查看更多
export const guess_you_like_url = '/jrcapp/index/guess_you_like'; //猜你喜欢
export const new_comers_url = '/jrcapp/index/new_comers'; //查看是否有优惠卷，判断是否领取，有的话首页弹出新人优惠卷
//消息
export const unread_num_url = '/jrcapp/message/unread_num'; //未读消息的数量
export const news_list_url = '/jrcapp/message/unread_num_list'; //未各个类型的未读数量
export const message_list_url = '/jrcapp/message/message_list'; //某个类型消息的列表
//积分
export const exchange_logs_url = '/jrcapp/score/exchange_record'; //积分商品兑换记录
export const exchange_record_detail_url = '/jrcapp/score/exchange_record_detail'; //积分兑换记录详情
//定制页面背景图
export const customized_background_url = '/jrcapp/index/customized_background'; //定制页面背景图
export const customized_submit_url = '/jrcapp/index/customized_submit'; //提交定制
//分类
export const classify_list_url = "/jrcapp/goods/classify_list"; //分类
export const classify_goods_url = "/jrcapp/goods/classify_goods"; //分类商品
export const prefecture_url = '/jrcapp/index/prefecture'; //3：无门槛图片 4：热销推荐 5：新品推荐6：积分7：特价
export const skill_goods_url = '/jrcapp/goods/skill_goods'; //首页秒杀
export const select_brand_url = '/jrcapp/index/select_brand'; //首页是个品牌
export const skill_goods_more_url = '/jrcapp/goods/skill_goods_more'; //更多秒杀
export const store_audit_url = '/jrcapp/index/store_audit'; //门店提交
//登录
export const background_image_url = '/jrcapp/login/background_image'; //背景图
export const is_open_url = '/jrcapp/login/is_open'; //是否开启
export const send_reg_code_url = '/jrcapp/login/send_reg_code'; //发送验证吗
export const login_code_url = '/jrcapp/login/login'; //短信登录
export const next_password_url = '/jrcapp/login/next_password'; //第一次登录设置密码
export const pass_account_url = '/jrcapp/login/pass_login'; //手机号，密码登录接口
export const reset_pwd_url = '/jrcapp/login/reset_pwd'; //忘记密码保存
export const forget_password_url = '/jrcapp/login/forget_password'; //忘记密码发送验证码
export const wx_login_url = '/jrcapp/login/wx_login'; //微信登录
export const new_phone_save_url = '/jrcapp/login/new_phone_save'; //绑定手机号
export const xieyi_url = '/jrcapp/my/user_agreement'; //用户协议
export const privacy_policy_url = '/jrcapp/my/privacy_policy'; //隐私政策
//地址
export const address_list_url = '/jrcapp/address/address_list'; //地址列表
export const is_default_url = '/jrcapp/address/is_default'; //地址涉默认
export const address_del_url = '/jrcapp/address/address_del'; //地址s删除
export const address_update_url = '/jrcapp/address/address_update'; //地址修改
export const add_address_url = '/jrcapp/address/add_address'; //地址添加
//我的
export const my_index_url = "/jrcapp/my/my"; //我的首页
export const my_save_url = "/jrcapp/my/my_save"; //资料保存
export const order_num_url = "/jrcapp/my/order_num"; //订单数量
export const my_coll_url = "/jrcapp/my/my_coll"; //我的收藏列表
export const coll_del_url = "/jrcapp/my/coll_del"; //删除收藏
export const footprint_url = "/jrcapp/my/footprint"; //我的足迹
export const footprint_del_url = "/jrcapp/my/footprint_del"; //足迹删除
export const show_phone_url = "/jrcapp/login/show_phone"; //更换手机号显示当前号码
export const next_step_url = "/jrcapp/login/next_step"; //更换手机号点击下一步
export const common_problem_url = "/jrcapp/my/common_problem"; //常见问题
export const user_feedback_save_url = "/jrcapp/my/user_feedback_save"; //意见反馈
export const my_integral_url = "/jrcapp/my/my_integral"; //我的积分
export const my_coupon_url = "/jrcapp/my/my_coupon"; //我的优惠券
export const score_good_list_url = "/jrcapp/score/score_good_list"; //积分列表
export const check_douglas_detail_url = '/jrcapp/my/check_douglas_detail'; //查看门店详情
export const information_change_getMobileCode_url = '/jrcapp/login/information_change_getMobileCode'; //信息变更发送验证码
export const setuserPassword_url = '/jrcapp/login/update_password'; //密码修改
export const bindingOpenId_url = '/jrcapp/login/wx_binding'; //绑定微信
export const untyingOpenId_url = '/jrcapp/login/wx_unbind'; //微信解绑


export const cart_good_coupon_url = '/jrcapp/cart/cart_good_coupon'; //购物车列表选择商品优惠
//分享
export const goods_share_url = '/jrcapp/share/goods_share'; //商品分享接口
export const app_share_url = '/jrcapp/share/app_share'; //app分享接口