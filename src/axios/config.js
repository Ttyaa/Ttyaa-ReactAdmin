/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-07 21:26:41
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-11 20:35:53
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-07-18 14:36:52
 */

//const baseip = 'http://120.79.89.24:8081';  //线上
 const baseip = 'http://192.168.101.125:8081'; // 公众号ip(也是重构地址)
/**
 * 登录接口
 */
export const LOGIN_URL = baseip + '/login';

/**
 * 未登录获取用户信息
 */
export const GETLOGINAUTH = baseip + '/queryUserInfo'

/**
 * 退出接口
 */
export const LOGOUT_URL = baseip + '/logout';

/** 
 * EASY-MOCK模拟数据 - (后台首页接口)
 */
export const BACKGROUND_HEADER_URL = 'https://www.easy-mock.com/mock/5cb84477bd051714873814af/PC/Register/web/getFirstPage'

/**
 * 删除权限
 */
export const _deleteAuth = baseip + '/web/admin/item/delItem';

/**
 * 根据角色查询权限
 */
export const _findAuth = baseip + '/web/admin/item/queryItem';

/**
 * 冻结用户
 */
export const _lockUser = baseip + '/web/usermanager/lock';

/**
 * 解除冻结用户
 */
export const _unlockUser = baseip + '/web/usermanager/unlock';

/**
 * 查询所有权限的接口
 */
export const _findAllAuth = baseip + '/web/admin/item/queryItemAll'

/**
 * 添加新角色
 */
export const _addCreateRole = baseip + '/web/role/createRole';

/**
 * 修改角色权限
 */
export const _updateAuth = baseip + '/web/role/updateRole';

/**
 * 查询所有角色接口
 */
export const _findAllRole = baseip + '/web/role/query';

/**
 * 根据用户Id查询对应的权限
 */
export const _queryRoleByUserId = baseip + '/web/role/queryRoleByUserId'

/**
 * 删除角色接口
 */
export const _deleteRole = baseip + '/web/role/delRole';

/**
 * 新增管理员和运维用户
 */
export const _addOperateUser = baseip + '/web/usermanager/add'

/**
 * 查询所有用户(查询前台或者后台,用0,1区分)
 */
export const _findAllUser = baseip + '/web/usermanager/queryAll';

/**
 * 删除用户(共用)
 */
export const _deleteUser = baseip + '/web/usermanager/del';

/**
 * 修改用户接口
 */
export const _updateUser = baseip + '/web/usermanager/update';

/**
 * 重置用户密码(通用)
 */
export const _resetUser = baseip + '/web/usermanager/resetPwd';

/**
 * 根据ID修改用户角色接口
 */
export const _changeRole = baseip + '/web/usermanager/changerole';

/**
 * 登录成功后请求查询首页信息
 */
export const _findAdminIndexInfo = baseip + '/web/usermanager/getAdminIndex';

/**
 * 日志管理
 */
export const _getAllLogManager = baseip + '/web/logmanager/query';

/**
 * 当新增权限没有权限时展示时,调用这个接口
 */
export const _queryHasNotItem = baseip + '/web/admin/item/queryHasNotItem'

/**
 * 角色添加权限接口
 */
export const _roleItemAdd = baseip + '/web/roleItem/add'

// bbc top news
export const NEWS_BBC = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=429904aa01f54a39a278a406acf50070';

/** 新项目接口地址  */

/**
 * @description 首页系统信息相关接口
 */

export const _SYSTEMINFO = baseip + '/web/system'; // 获取首页系统相关信息
export const _UPDATESYSTEMINFO = baseip + '/web/system/update'; // 设置首页系统想关信息

/**
 * @description 风土人情相关接口
 */
export const _GETAMOROUS = baseip + '/web/amorous'; // 查询风土人情
export const _GETAMOROUSBYID = baseip + '/web/amorous/queryById'; // 通过id查询风土人情
export const _ADDAMOROUS = baseip + '/web/amorous/addText'; // 新增风土人情
export const _DELAMOROUS = baseip + '/web/amorous/del'; // 删除风土人情
export const _UPDATEAMOROUS = baseip + '/web/amorous/update'; // 修改风土人情

/**
 * @description 困难家庭相关接口
 */
export const _DIFFAMILY = baseip + '/web/diffamily'; // 查询困难家庭 
export const _DIFFAMILYBYID = baseip + '/web/diffamily/queryById'; // 通过id查询困难家庭 
export const _ADDDIFFAMILY = baseip + '/web/diffamily/addText'; // 新增困难家庭 
export const _DELDIFFAMILY = baseip + '/web/diffamily/del'; // 删除困难家庭 
export const _UPDATEDIFFAMILY = baseip + '/web/diffamily/update'; // 修改困难家庭 

/**
 * @description 困难学生相关接口
 */
export const _DIFSTUDENT = baseip + '/web/difstudent'; // 查询困难学生
export const _DIFSTUDENTBYID = baseip + '/web/difstudent/queryById'; // 通过id查询困难学生
export const _ADDDIFSTUDENT = baseip + '/web/difstudent/addDifFamilyText'; // 新增困难学生
export const _DELDIFSTUDENT = baseip + '/web/difstudent/del'; // 删除困难学生
export const _UPDATEDIFSTUDENT = baseip + '/web/difstudent/update'; // 修改困难学生

/**
 * @description 企业管理
 */
export const _ENTERPRISE = baseip + '/web/enterprise'; // 查询企业
export const _ENTERPRISEBYID = baseip + '/web/enterprise/queryById'; // 通过id查询企业
export const _ADDENTERPRISE = baseip + '/web/enterprise/addText'; // 新增企业
export const _DELENTERPRISE = baseip + '/web/enterprise/del'; // 删除企业
export const _UPDATEENTERPRISE = baseip + '/web/enterprise/update'; // 修改企业

/**
 * @description 名人相关
 */
export const _FAMOUS = baseip + '/web/famous'; // 查询名人信息
export const _FAMOUSBYID = baseip + '/web/famous/queryById'; // 通过id查询名人信息
export const _ADDFAMOUS = baseip + '/web/famous/addText'; // 新增名人信息
export const _DELFAMOUS = baseip + '/web/famous/del'; // 删除名人信息
export const _UPDATEFAMOUS = baseip + '/web/famous/update'; // 修改名人信息

/**
 * @description 美食相关
 */
export const _FOOD = baseip + '/web/food'; // 查询美食
export const _FOODBYID = baseip + '/web/food/queryById'; // 通过id查询美食
export const _ADDFOOD = baseip + '/web/food/addText'; // 新增美食
export const _DELFOOD = baseip + '/web/food/del'; // 删除美食
export const _UPDATEFOOD = baseip + '/web/food/update'; // 修改美食


/**
 * @description 资讯/政务党务管理
 */
export const _INFOMATION = baseip + '/web/information'; // 查询咨询
export const _INFOMATIONBYID = baseip + '/web/information/queryById'; // 通过id查询咨询
export const _ADDINFOMATION = baseip + '/web/information/addText'; // 新增咨询
export const _DELINFOMATION = baseip + '/web/information/del'; // 删除咨询
export const _UPDATEINFOMATION = baseip + '/web/information/update'; // 修改咨询

/**
 * @description 推送消息接口
 */
export const _MESSAGE = baseip + '/web/message'; // 查询推送消息
export const _MESSAGEBYID = baseip + '/web/message/queryById'; // 通过id查询推送消息
export const _ADDMESSAGE = baseip + '/web/message/addText'; // 新增推送消息
export const _DELMESSAGE = baseip + '/web/message/del'; // 删除推送消息
export const _UPDATEMESSAGE = baseip + '/web/message/update'; // 修改推送消息

/**
 * @description 景区管理相关接口
 */
export const _SCENERY = baseip + '/web/scenery'; // 查询景区
export const _SCENERYBYID = baseip + '/web/scenery/queryById'; // 通过id查询景区
export const _ADDSCENERY = baseip + '/web/scenery/addText'; // 新增景区
export const _DELSCENERY = baseip + '/web/scenery/del'; // 删除景区
export const _UPDATESCENERY = baseip + '/web/scenery/update'; // 修改景区

/**
 * @description 镇村相关
 */
export const _TOWNS = baseip + '/web/towns'; // 查询镇村
export const _TOWNSBYID = baseip + '/web/towns/queryById'; // 通过id查询镇村
export const _ADDTOWNS = baseip + '/web/towns/addText'; // 新增镇村
export const _DELTOWNS = baseip + '/web/towns/del'; // 删除镇村
export const _UPDATETOWNS = baseip + '/web/towns/update'; // 修改镇村

/**
 * @description 轮播图相关
 */
export const _WHEEL = baseip + '/web/wheel'; // 查询轮播图
export const _ADDWHEEL = baseip + '/web/wheel/add'; // 新增轮播图
export const _DELWHEEL = baseip + '/web/wheel/del'; // 删除轮播图
export const _UPDATEWHEEL = baseip + '/web/wheel/update'; // 修改轮播图

/**
 * @description 日志管理
 */
export const _LOGINFO = baseip + '/web/loginfo'; // 日志查询

/**
 * @description 查询全部村镇
 */
export const _GETTOWNSLIST = baseip + '/web/towns/getTownsList'; //查询全部村镇

/**
 * @description 注册
 */
export const _REGISTER = baseip + '/register'; // 注册