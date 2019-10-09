export default {
	menus: [ // 菜单相关路由 
		{	
			key: '/app/dashboard/index',
			title: '首页',
			icon: 'mobile',
			component: 'Dashboard'
		},
		// {
		// 	key: '/app/settingControl',
		// 	title: '系统管理',
		// 	icon: 'mobile',
		// 	auth: 'superAdmin',
		// 	subs: [
		// 		{
		// 			key: '/app/settingControl/userControl',
		// 			title: '用户管理',
		// 			icon: 'audit',
		// 			component: ''
		// 		},
		// 		{
		// 			key: '/app/settingControl/roleControl',
		// 			title: '角色管理',
		// 			icon: 'audit',
		// 			component: ''
		// 		},
		// 		{
		// 			key: '/app/settingControl/authControl',
		// 			title: '权限管理',
		// 			icon: 'audit',
		// 			component: ''
		// 		},
		// 		{
		// 			key: '/app/settingControl/menuControl',
		// 			title: '菜单管理',
		// 			icon: 'audit',
		// 			component: ''
		// 		}
		// 	]
		// },
		{
			key: '/app/amorous',
			title: '风土人情',
			icon: 'audit',
			subs: [
				{
					key: '/app/amorous/addamorousdata',
					title: '新增风土人情',
					component: 'AddAmorous'
				},
				{
					key: '/app/amorous/amorousdata',
					title: '风土人情管理',
					component: 'Amorous'
				}
			]
		},
		{
			key: '/app/diffamilycontroller',
			title: '困难家庭',
			icon: 'audit',
			subs: [
				{
					key: '/app/diffamilycontroller/adddiffamilycontroller',
					title: '新增困难家庭',
					component: 'AddDifFamily'
				},
				{
					key: '/app/diffamilycontroller/diffamilycontrollerdata',
					title: '困难家庭管理',
					component: 'DifFamilyControler'
				}
			]
		},
		{
			key: '/app/difstudentcontroller',
			title: '困难学生',
			icon: 'audit',
			subs: [
				{
					key: '/app/difstudentcontroller/adddifstudentcontroller',
					title: '新增困难学生',
					component: 'AddDifStudent'
				},
				{
					key: '/app/difstudentcontroller/difstudentcontrollerdata',
					title: '困难学生管理',
					component: 'DifStudent'
				}
			]
		},
		{
			key: '/app/enterprisecontroller',
			title: '企业管理',
			icon: 'audit',
			subs: [
				{
					key: '/app/diffamilycontroller/addenterprisecontroller',
					title: '新增企业',
					component: 'AddEnterprise'
				},
				{
					key: '/app/diffamilycontroller/enterprisecontrollerdata',
					title: '企业管理',
					component: 'Enterprise'
				}
			]
		},
		{
			key: '/app/famouscontroller',
			title: '名人相关',
			icon: 'audit',
			subs: [
				{
					key: '/app/famouscontroller/addfamouscontroller',
					title: '新增名人',
					component: 'AddPerson'
				},
				{
					key: '/app/famouscontroller/famouscontrollerdata',
					title: '名人管理',
					component: 'Person'
				}
			]
		},
		{
			key: '/app/foodcontroller',
			title: '美食相关',
			icon: 'audit',
			subs: [
				{
					key: '/app/foodcontroller/addfoodcontroller',
					title: '新增美食',
					component: 'AddFood'
				},
				{
					key: '/app/foodcontroller/foodcontrollerdata',
					title: '美食管理',
					component: 'Food'
				}
			]
		},
		{
			key: '/app/informationcontroller',
			title: '资讯/政务/党务管理',
			icon: 'audit',
			subs: [
				{
					key: '/app/diffamilycontroller/addinformationcontroller',
					title: '新增资讯/政务/党务',
					component: 'AddInformation'
				},
				{
					key: '/app/diffamilycontroller/informationcontrollerdata',
					title: '资讯/政务/党务管理',
					component: 'Information'
				}
			]
		},
		{
			key: '/app/scenerycontroller',
			title: '景区管理',
			icon: 'audit',
			subs: [
				{
					key: '/app/scenerycontroller/addscenerycontroller',
					title: '新增景区',
					component: 'AddScenery'
				},
				{
					key: '/app/scenerycontroller/scenerycontrollerdata',
					title: '景区管理',
					component: 'Scenery'
				}
			]
		},
		{
			key: '/app/townscontroller',
			title: '镇村相关',
			icon: 'audit',
			subs: [
				{
					key: '/app/townscontroller/addtowns',
					title: '新增镇村',
					component: 'AddTowns'
				},
				{
					key: '/app/townscontroller/towns',
					title: '镇村信息管理',
					component: 'Towns'
				}
			]
		},
		{
			key: '/app/wheelplantingcontroller',
			title: '轮播图相关',
			icon: 'audit',
			subs: [
				{
					key: '/app/wheelplantingcontroller/addwheelplanting',
					title: '新增轮播图',
					component: 'AddWheelplanting'
				},
				{
					key: '/app/wheelplantingcontroller/wheelplanting',
					title: '轮播图管理',
					component: 'Wheelplanting'
				}
			]
		},
		// {
		// 	key: '/app/controllog',
		// 	title: '日志管理',
		// 	icon: 'snippets',
		// 	subs: [{
		// 		key: '/app/controllog/findlog',
		// 		title: '查询所有日志信息',
		// 		component: 'LogInfo'
		// 	}]
		// }
		// ,
		// {	
		// 	key: '/app/zz',
		// 	title: '支付日志',
		// 	icon: 'mobile',
		// 	subs:[{	
		// 		key: '/app/zz/zzz',
		// 		title: '首页',
		// 		icon: 'mobile',
		// 		component: 'ZZZ'
		// 	}]
		// }
		// {
		//     key: '/app/auth', title: '权限管理', icon: 'safety',
		//     subs: [
		//         { key: '/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
		//         { key: '/app/auth/routerEnter', title: '路由拦截', component: 'RouterEnter', auth: 'auth/testPage' },
		//     ],
		// }
	],
	others: [ // 用于测试React模块路由配置
		// {	
		// 	key: '/register',
		// 	title: '注册',
		// 	component: 'Register'
		// },
		{	
			key: '/app/amorous/amorousdata/updata',
			title: '修改风土人情',
			component: 'AddAmorous'
		},
	] 
}