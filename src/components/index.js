/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-01 01:00:32
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-03 11:33:17
 * @ 文件解释: 路由组件出口配置
 */

/**
 * @description 组件名称
 * @file Dashboard  -> 首页容器组件
 * @file Amorous  -> 风土人情
 * @file AddAmorous -> 新增风土人情
 * @file Towns -> 村镇信息
 * @file AddTowns -> 新增村镇信息
 * @file AddDifFamily -> 新增困难家庭
 * @file AddDifStudent -> 新增困难学生
 * @file AddEnterprise -> 新增企业信息
 * 
 * ==== 模块测试
 * @file Register -> 完整的注册模块
 */

import Echarts from './charts/Echarts';
import Recharts from './charts/Recharts';
import Dashboard from '../containers/DashboardContainer';
import AuthBasic from './auth/Basic';
import RouterEnter from './auth/RouterEnter';
import QueryParams from './extension/QueryParams';
import LogInfo from './log/LogControl';
import Amorous from './amorous/amorous';
import AddAmorous from './amorous/AddAmorous';
import Towns from './towns/Towns';
import AddTowns from './towns/AddTowns';
import AddDifFamily from './diffamilycontroller/AddDifFamily';
import AddDifStudent from './difStudent/AddDifStudent';
import AddEnterprise from './enterprise/AddEnterprise';

export default {
	Echarts,
	Recharts,
	Dashboard,
	AuthBasic,
	RouterEnter,
	QueryParams,
	LogInfo,
	Amorous,
	AddAmorous,
	Towns,
	AddTowns,
	AddDifFamily,
	AddDifStudent,
	AddEnterprise
}