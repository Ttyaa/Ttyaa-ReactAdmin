/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-05-11 14:06:12
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-06-21 15:04:58
 * @ 文件解释: 存放常用工具函数
 */

/**
  * @description 对象对比，抽离差异化的对象(采用diff算法)
  * @param {oldData} 修改前的对象
  * @param {newData} 修改后的对象
  */
export const G_diff = (oldData, newData) => {
  const isObject = x => Object (x) === x;

  const isArray = Array.isArray;

  const mut = (o, [k, v]) => ((o[k] = v), o);

  const diff1 = (left = {}, right = {}, rel = 'left') =>
    Object.entries (left)
      .map (
        ([k, v]) =>
          isObject (v) && isObject (right[k])
            ? [k, diff1 (v, right[k], rel)]
            : right[k] !== v
                ? [
                    k,
                    {
                      [rel]: v,
                    },
                  ]
                : [k, {}]
      )
      .filter (([k, v]) => Object.keys (v).length !== 0)
      .reduce (mut, isArray (left) && isArray (right) ? [] : {});

  const merge = (left = {}, right = {}) =>
    Object.entries (right)
      .map (
        ([k, v]) =>
          isObject (v) && isObject (left[k]) ? [k, merge (left[k], v)] : [k, v]
      )
      .reduce (mut, left);

  const diff = (x = {}, y = {}) =>
    merge (diff1 (x, y, 'oldData'), diff1 (y, x, 'newData'));

  return diff (oldData, newData);
};

/**
 * @description 时间戳转年-月-日-时-分-秒
 * @param {time} time 
 */
export const G_transformTime = (time = +new Date ()) => {
  const date = new Date (time + 8 * 3600 * 1000);
  return date.toJSON ().substr (0, 19).replace ('T', ' ').replace (/-/g, '/');
};

/**
 * @description 处理年级转化: 例如将"一年级"=>"1"
 * @param {data} data 
 */
export const G_transformGrade = data => {
  if (data === null) {
    return '未设置';
  } else {
    switch (data) {
      case '一年级':
        return 1;
      case '二年级':
        return 2;
      case '三年级':
        return 3;
      case '四年级':
        return 4;
      case '五年级':
        return 5;
      case '六年级':
        return 6;
      case '七年级':
        return 7;
      case '八年级':
        return 8;
      case '九年级':
        return 9;
      default:
        return data;
    }
  }
};

/**
 * @description 获取权限对应的id
 */
const ownedId = [
	{
		"itemName": "新增",
		"permission": "user:add",
		"itemDesc": "新增管理员和运维用户接口",
		"key": 100000,
		"itemUrl": "/web/usermanager/add"
		},
		{
		"itemName": "查询",
		"permission": "user:query",
		"itemDesc": "根据ID查询用户接口",
		"key": 100001,
		"itemUrl": "/web/usermanager/query"
		},
		{
		"itemName": "查询",
		"permission": "user:queryAll",
		"itemDesc": "查询所有用户",
		"key": 100002,
		"itemUrl": "/web/usermanager"
		},
		{
		"itemName": "更新",
		"permission": "user:update",
		"itemDesc": "用户更新",
		"key": 100003,
		"itemUrl": "/web/usermanager/update"
		},
		{
		"itemName": "删除",
		"permission": "user:delete",
		"itemDesc": "用户删除",
		"key": 100004,
		"itemUrl": "/web/usermanager/delete"
		},
		{
		"itemName": "冻结用户",
		"permission": "user:lock",
		"itemDesc": "冻结用户",
		"key": 100005,
		"itemUrl": "/web/usermanager/lock"
		},
		{
		"itemName": "解冻用户",
		"permission": "user:unlock",
		"itemDesc": "解冻用户",
		"key": 100006,
		"itemUrl": "/web/usermanager/unlock"
		},
		{
		"itemName": "修改用户角色",
		"permission": "user:changerole",
		"itemDesc": "修改用户角色",
		"key": 100007,
		"itemUrl": "/web/usermanager/changerole"
		},
		{
		"itemName": "重置用户密码",
		"permission": "user:resetPwd",
		"itemDesc": "重置用户密码",
		"key": 100008,
		"itemUrl": "/web/usermanager/resetPwd"
		},
		{
		"itemName": "新增",
		"permission": "permission:add",
		"itemDesc": "新增权限",
		"key": 100009,
		"itemUrl": "/web/admin/item/addItem"
		},
		{
		"itemName": "修改",
		"permission": "permission:update",
		"itemDesc": "修改权限",
		"key": 100010,
		"itemUrl": "/web/admin/item/updateItem"
		},
		{
		"itemName": "删除",
		"permission": "permission:del",
		"itemDesc": "删除权限",
		"key": 100011,
		"itemUrl": "/web/admin/item/delItem"
		},
		{
		"itemName": "查询",
		"permission": "permission:query",
		"itemDesc": "查询权限",
		"key": 100012,
		"itemUrl": "/web/admin/item/queryItem"
		},
		{
		"itemName": "查询",
		"permission": "role:query",
		"itemDesc": "查询角色",
		"key": 100013,
		"itemUrl": "/web/role/query"
		},
		{
		"itemName": "新增",
		"permission": "role:add",
		"itemDesc": "新增角色",
		"key": 100014,
		"itemUrl": "/web/role/createRole"
		},
		{
		"itemName": "修改",
		"permission": "role:update",
		"itemDesc": "修改角色",
		"key": 100015,
		"itemUrl": "/web/role/updateRole"
		},
		{
		"itemName": "删除",
		"permission": "role:del",
		"itemDesc": "删除角色",
		"key": 100016,
		"itemUrl": "/web/role/delRole"
		},
		{
		"itemName": "添加权限",
		"permission": "roleItem:add",
		"itemDesc": "为角色添加权限",
		"key": 100017,
		"itemUrl": "/web/roleItem/add"
		},
		{
		"itemName": "删除",
		"permission": "roleItem:del",
		"itemDesc": "删除角色权限",
		"key": 100018,
		"itemUrl": "/web/roleItem/del"
		},
		{
		"itemName": "新增",
		"permission": "machine:add",
		"itemDesc": "机器码新增",
		"key": 100020,
		"itemUrl": "/web/machine/createNum"
		},
		{
		"itemName": "停用",
		"permission": "machine:stop",
		"itemDesc": "停止机器码",
		"key": 100022,
		"itemUrl": "/web/machine/stopMacNum"
		},
		{
		"itemName": "删除",
		"permission": "machine:del",
		"itemDesc": "删除机器码",
		"key": 100023,
		"itemUrl": "/web/machine/delMacNum"
		},
		{
		"itemName": "续费",
		"permission": "machine:extension",
		"itemDesc": "序列号续费",
		"key": 100024,
		"itemUrl": "/web/machine/extension"
		}
]
export const G_getAuthId = data => {
	if(data.length === 0){
		return '获取权限id有误'
	}else{
		var getAuthIdArr = []; // 存放转换后的权限所对应的Id
		data.map(item1 => {
			ownedId.map(item2 => {
				if(item1 === item2.itemDesc){
					return getAuthIdArr.push(item2.key)
				}
			})
		})
	}
	return getAuthIdArr;
};
