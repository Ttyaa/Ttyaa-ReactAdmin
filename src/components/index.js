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
 * @file DifStudent -> 困难学生管理
 * @file DifFamilyControler -> 困难家庭管理
 * @file AddWheelplanting -> 新增轮播图
 * @file Wheelplanting -> 轮播图管理
 * 
 * ==== 模块测试
 * @file Register -> 完整的注册模块
 */
import {lazy} from 'react';
const AuthBasic = lazy(() => import('./auth/Basic'));
const RouterEnter = lazy(() => import('./auth/RouterEnter'));
const QueryParams = lazy(() => import('./extension/QueryParams'));
const Amorous = lazy(() => import('./amorous/amorous'));
const AddAmorous = lazy(() => import('./amorous/AddAmorous'));
const Towns = lazy(() => import('./towns/Towns'));
const AddTowns = lazy(() => import('./towns/AddTowns'));
const AddDifFamily = lazy(() => import('./diffamilycontroller/AddDifFamily'));
const AddDifStudent = lazy(() => import('./difStudent/AddDifStudent'));
const AddEnterprise = lazy(() => import('./enterprise/AddEnterprise'));
const AddWheelplanting = lazy(() => import('./wheelplanting/AddWheelplanting'));
const DifFamilyControler = lazy(() => import('./diffamilycontroller/DifFamilyControler'));
const DifStudent = lazy(() => import('./difStudent/DifStudent'));
const Wheelplanting = lazy(() => import('./wheelplanting/wheelplanting'));
const Enterprise = lazy(() => import('./enterprise/Enterprise'));
const AddPerson = lazy(() => import('./person/AddPerson'));
const AddFood = lazy(() => import('./food/AddFood'));
const AddScenery = lazy(() => import('./scenery/AddScenery'));
const Information = lazy(() => import('./information/Information'));
const AddInformation = lazy(() => import('./information/AddInformation'));
const Person = lazy(() => import('./person/Person'));
const Food = lazy(() => import('./food/Food'));
const Scenery = lazy(() => import('./scenery/Scenery'));
const Dashboard = lazy(() => import('../containers/DashboardContainer'));
const UpdataAmorous = lazy(() => import('./amorous/UpdataAmorous'));
 
export default {
	Dashboard,
	AuthBasic,
	RouterEnter,
	QueryParams,
	Amorous,
	AddAmorous,
	Towns,
	AddTowns,
	AddDifFamily,
	AddDifStudent,
	AddEnterprise,
	AddWheelplanting,
	DifFamilyControler,
	DifStudent,
	Wheelplanting,
	Enterprise,
	AddPerson,
	AddFood,
	AddScenery,
	AddInformation,
	Information,
	Person,
	Food,
	Scenery,
	UpdataAmorous
}