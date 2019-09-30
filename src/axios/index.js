/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-06-07 21:26:41
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-10 09:32:48
 * @ 文件解释: 请求数据的接口函数
 */

import axios from 'axios';
import {get, post} from './tools';
import * as config from './config';
import qs from 'qs';

// BBC新闻
export const getBbcNews = () =>
  get ({
    url: config.NEWS_BBC,
  });

// npm.json
export const npmDependencies = () =>
  axios
    .get ('./npm.json')
    .then (res => res.data)
    .catch (err => console.log (err));

/** 微博 */
export const weibo = () =>
  axios
    .get ('./weibo.json')
    .then (res => res.data)
    .catch (err => console.log (err));

/** 管理员权限获取 */
// export const admin = () =>
//   get ({
//     url: config.MOCK_AUTH_ADMIN,
//   });

// 请求头带上token
const getToken = () =>
  (axios.defaults.headers.common[
    'authorization'
  ] = window.localStorage.getItem ('token'));
axios.defaults.withCredentials = true;

/**
 * 访问权限
 */
// export const guest = () =>
//   get ({
//     url: config.MOCK_AUTH_VISITOR,
//   });

/**
 * @description 获取权限
 * @method {GET}
 * @param {username}
 */
export const getLoginAuth = (username) => {
  return get({
    url: config.GETLOGINAUTH+`?username=${username}`
  })
}


/** 
 * @description 登录 
 * @method {POST}
 */
export const handleLogin = (username, password) => {
  // 清除token,方便开发环境
  if (window.localStorage.getItem ('token')) {
    window.localStorage.removeItem ('token');
  }
  return post ({
    url: config.LOGIN_URL,
    data: qs.stringify ({
      username: username,
      password: password,
    })
  });
};

/**
 * @description 退出
 */
export const LOGOUT = () => {
  getToken ();
  return get ({
    url: config.LOGOUT_URL,
  });
};

/** 
 * 后台首页 
 */
export const BackgroundHeader = () => {
  getToken ();
  return get ({
    url: config.BACKGROUND_HEADER_URL,
  });
};


/**
 * @description 查询本用户权限/最新视频/新闻资讯综合接口
 */
export const GETADMININDEX = () => {
  getToken ();
  return get ({
    url: config._findAdminIndexInfo,
  });
};


/**
 * @description 日志管理
 * @method {GET}
 * @param {page}  页码
 * @param {limit} 每页要显示的条数
 */
export const LOGMANAGER = (page, limit = undefined) => {
  getToken ();
  if (limit !== undefined) {
    return get ({
      url: config._getAllLogManager + `?page=${page}&limit=${limit}`,
    });
  } else {
    return get ({
      url: config._getAllLogManager + `?page=${page}`,
    });
  }
};

/**
 * @description 新增管理员和运维用户(后台)
 * @param {username} 登录的用户名
 * @param {password} 密码
 * @param {mobile}	 手机号码
 * @param {email}		 邮箱
 * @param {name}		 真实姓名
 */
export const ADDOPERATEUSER = formData => {
  getToken ();
  return post ({
    url: config._addOperateUser,
    data: qs.stringify (formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 查询前/后台用户信息接口
 * @param {key}
 * @param 0:后台
 * @param 1:前台
 */
export const FINDFRONTUSER = (key, page) => {
  getToken ();
  return get ({
    url: config._findAllUser + `?operatorType=${key}&page=${page}`,
  });
};

/**
 * @description 删除用户
 */
export const DELETEUSER = key => {
  getToken ();
  return get ({
    url: config._deleteUser + `?key=${key}`,
  });
};

/**
 * @description 重置用户密码
 * @method {GET}
 */
export const RESETUSERPWD = key => {
  getToken ();
  return get ({
    url: config._resetUser + `?key=${key}`,
  });
};

/**
 * @description 根据ID修改用户角色接口
 * @method {POST}
 * @param {key}    用户id - 必传
 * @param {roleId} 角色id - 必传   
 */
export const CHANGEROLEBYID = formData => {
  getToken ();
  return post ({
    url: config._changeRole,
    data: qs.stringify (formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 修改用户接口
 * @method {POST}
 * @param {key}
 * @param {mobile}
 * @param {email}
 * @param {name}
 */
export const UPDATEUSER = formData => {
  getToken ();
  return post ({
    url: config._updateUser,
    data: qs.stringify (formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 冻结用户
 *	@method {GET}
 */
export const LOCKUSER = key => {
  getToken ();
  return get ({
    url: config._lockUser + `?key=${key}`,
  });
};

/**
 * @description 解除冻结用户
 * @method {GET}
 */
export const UNLOCKUSER = key => {
  getToken ();
  return get ({
    url: config._unlockUser + `?key=${key}`,
  });
};

/**
 * @description 查询所有权限的接口
 * @method {GET}
 */
export const FINDALLAUTH = (operate = undefined) => {
  getToken ();
  if (operate === undefined) {
    return get ({
      url: config._findAllAuth,
    });
  } else {
    return get ({
      url: config._findAllAuth + `?operatorType=${operate}`,
    });
  }
};

/**
 * @description 添加新角色
 * @method {POST}
 * @param {roleName} 角色名
 * @param {roleDesc} 角色描述
 */
export const ADDCREATEROLE = formData => {
  getToken ();
  return post ({
    url: config._addCreateRole,
    data: qs.stringify (formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 角色添加权限接口
 * @param {roleId} roleId - 必传
 * @param {itemId} itemId - 必传
 */
export const ROLEITEMADD = formData => {
  getToken ();
  return post ({
    url: config._roleItemAdd,
    data: qs.stringify (formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 根据用户Id查询用户对应的角色接口
 * @param {key} 必传
 */
export const QUERYROLEBYUSERID = key => {
  getToken ();
  return get ({
    url: config._queryRoleByUserId + `?userId=${key}`,
  });
};

/**
 * @description 根据角色查询对应的权限
 * @param {roleId}
 * @param {operatorType}
 */
export const QUERYITEM = (roleId, operatorType) => {
  getToken ();
  return get ({
    url: config._findAuth + `?roleId=${roleId}&operatorType=${operatorType}`,
  });
};

/**
 * @description 新增
 * @method {POST}
 * @param {key} 必传
 * @param {roleName} 必传
 * @param {roleDesc} 必传
 * @param {operatorType} 必传
 * @param {item} 必传
 */
export const CREATEROLE = formData => {
  getToken ();
  return post ({
    url: config._addCreateRole,
    data: qs.stringify (formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 修改角色权限接口
 * @param {_updateAuth} key 
 */
export const UPDATEAUTH = (formData, operatorType) => {
  getToken ();
  formData.operatorType = operatorType;
  return post ({
    url: config._updateAuth,
    data: qs.stringify (formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/**
 * @description 删除角色接口
 * @method {GET}
 * @param {key}
 */
export const DELETEROLE = key => {
  getToken ();
  return get ({
    url: config._deleteRole + `?key=${key}`,
  });
};

/**
 * @description 查询所有角色接口
 * @method {GET}
 * @param {page}
 * @param {limit}
 * @param {key}
 */
export const FINDALLROLE = (page, operatorType = undefined) => {
  getToken ();
  if (operatorType === undefined && page instanceof Array) {
    return get ({
      url: config._findAllRole + `?page=${page[0]}&operatorType=${page[1]}`,
    });
  } else if(operatorType === undefined){
    return get ({
      url: config._findAllRole + `?page=${page}`,
    });
  }else{
    return get ({
      url: config._findAllRole + `?page=${page}&operatorType=${operatorType}`,
    });
  }
};

/**
 * @description 当新增权限没有权限展示时,调用这个接口
 * @param {roleId}
 * @param {operatorType}
 */
export const QUERYHASNOTITEM = (roleId, operatorType) => {
  getToken ();
  return get ({
    url: config._queryHasNotItem +
      `?roleId=${roleId}&operatorType=${operatorType}`,
  });
};

/**=== 新项目请求函数 ====*/

/**
 * @description 首页获取初始值
 */
export const SYSTEMINFO = () => {
  getToken();
  return get({
    url: config._SYSTEMINFO
  })
}

/**
 * @description 首页系统信息修改
 * @param {id} 必传 , 默认1
 */
export const UPDATESYSTEMINFO = (formData, id = 1) => {
  getToken();
  formData.append('id', id)
  return post({
    url: config._UPDATESYSTEMINFO,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

/**
 * @description 查询风土人情
 */
export const GETAMOROUS = (page) => {
  getToken();
  return get({
    url: config._GETAMOROUS + `?page=${page}`
  })
}

/**
 * @description 新增风土人情
 */
export const ADDAMOROUS = formData => {
  getToken();
  return post({
    url: config._ADDAMOROUS,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除风土人情
 */
export const DELAMOROUS = id => {
  getToken();
  return get({
    url: config._DELAMOROUS + `?id=${id}`
  })
}

/**
 * @description 通过id风土人情
 * @param {id} id
 */
export const AMOROUSBYID = id => {
  getToken();
  return get({
    url: config._GETAMOROUSBYID + `?id=${id}`
  })
}

/**
 * @description 修改风土人情
 */
export const UPDATEAMOROUS = formData => {
  getToken();
  return post({
    url: config._UPDATEAMOROUS,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询困难家庭
 */
export const DIFFAMILY = page => {
  getToken();
  return get({
    url: config._DIFFAMILY + `?page=${page}`
  })
}

/**
 * @description 通过id查询困难家庭
 * @param {id} id
 */
export const DIFFAMILYBYID = id => {
  getToken();
  return get({
    url: config._DIFFAMILYBYID + `?id=${id}`
  })
}


/**
 * @description 新增困难家庭
 */
export const ADDDIFFAMILY = formData => {
  getToken();
  return post({
    url: config._ADDDIFFAMILY,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除困难家庭
 */
export const DELDIFFAMILY = id => {
  getToken();
  return get({
    url: config._DELDIFFAMILY + `?id=${id}`
  })
}

/**
 * @description 修改困难家庭
 */
export const UPDATEDIFFAMILY = formData => {
  getToken();
  return post({
    url: config._UPDATEDIFFAMILY,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询困难学生
 */
export const DIFSTUDENT = page => {
  getToken();
  return get({
    url: config._DIFSTUDENT + `?page=${page}`
  })
}

/**
 * @description 通过id查询困难学生
 * @param {id} id
 */
export const DIFSTUDENTBYID = id => {
  getToken();
  return get({
    url: config._DIFSTUDENTBYID + `?id=${id}`
  })
}

/**
 * @description 新增困难学生
 */
export const ADDDIFSTUDENT = formData => {
  getToken();
  return post({
    url: config._ADDDIFSTUDENT,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除困难学生
 */
export const DELDIFSTUDENT = id => {
  getToken();
  return get({
    url: config._DELDIFSTUDENT + `?id=${id}`
  })
}

/**
 * @description 修改困难学生
 */
export const UPDATEDIFSTUDENT = formData => {
  getToken();
  return post({
    url: config._UPDATEDIFSTUDENT,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询企业信息
 */
export const ENTERPRISE = page => {
  getToken();
  return get({
    url: config._ENTERPRISE + `?page=${page}`
  })
}

/**
 * @description 通过id查企业信息
 * @param {id} id
 */
export const ENTERPRISEBYID = id => {
  getToken();
  return get({
    url: config._ENTERPRISEBYID + `?id=${id}`
  })
}

/**
 * @description 新增企业信息
 */
export const ADDENTERPRISE = formData => {
  getToken();
  return post({
    url: config._ADDENTERPRISE,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除企业信息
 */
export const DELENTERPRISE = id => {
  getToken();
  return get({
    url: config._DELENTERPRISE + `?id=${id}`
  })
}

/**
 * @description 修改企业信息
 */
export const UPDATEENTERPRISE = formData => {
  getToken();
  return post({
    url: config._UPDATEENTERPRISE,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询名人相关
 */
export const FAMOUS = page => {
  getToken();
  return get({
    url: config._FAMOUS + `?page=${page}`
  })
}

/**
 * @description 通过id查企业信息
 * @param {id} id
 */
export const FAMOUSEBYID = id => {
  getToken();
  return get({
    url: config._FAMOUSBYID + `?id=${id}`
  })
}


/**
 * @description 新增名人相关
 */
export const ADDFAMOUS = formData => {
  getToken();
  return post({
    url: config._ADDFAMOUS,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除名人相关
 */
export const DELFAMOUS = id => {
  getToken();
  return get({
    url: config._DELFAMOUS + `?id=${id}`
  })
}

/**
 * @description 修改名人相关
 */
export const UPDATEFAMOUS = formData => {
  getToken();
  return post({
    url: config._UPDATEFAMOUS,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询名美食
 */
export const FOOD = page => {
  getToken();
  return get({
    url: config._FOOD + `?page=${page}`
  })
}

/**
 * @description 通过id查询美食
 * @param {id} id
 */
export const FOODBYID = id => {
  getToken();
  return get({
    url: config._FOODBYID + `?id=${id}`
  })
}

/**
 * @description 新增美食
 */
export const ADDFOOD = formData => {
  getToken();
  return post({
    url: config._ADDFOOD,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除美食
 */
export const _DELFOOD = id => {
  getToken();
  return get({
    url: config._DELFOOD + `?id=${id}`
  })
}

/**
 * @description 修改美食
 */
export const UPDATEFOOD = formData => {
  getToken();
  return post({
    url: config._UPDATEFOOD,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询咨询
 */
export const INFOMATION = page => {
  getToken();
  return get({
    url: config._INFOMATION + `?page=${page}`
  })
}

/**
 * @description 通过id查询咨询
 * @param {id} id
 */
export const INFOMATIONBYID = id => {
  getToken();
  return get({
    url: config._INFOMATIONBYID + `?id=${id}`
  })
}

/**
 * @description 新增咨询
 */
export const ADDINFOMATION = formData => {
  getToken();
  return post({
    url: config._ADDINFOMATION,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除咨询
 */
export const DELINFOMATION = id => {
  getToken();
  return get({
    url: config._DELINFOMATION + `?id=${id}`
  })
}

/**
 * @description 修改咨询
 */
export const UPDATEINFOMATION = formData => {
  getToken();
  return post({
    url: config._UPDATEINFOMATION,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询推送消息
 */
export const MESSAGE = page => {
  getToken();
  return get({
    url: config._MESSAGE + `?page=${page}`
  })
}

/**
 * @description 通过id查询推送消息
 * @param {id} id
 */
export const MESSAGEBYID = id => {
  getToken();
  return get({
    url: config._MESSAGEBYID + `?id=${id}`
  })
}

/**
 * @description 新增推送消息
 */
export const ADDMESSAGE = formData => {
  getToken();
  return post({
    url: config._ADDMESSAGE,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除推送消息
 */
export const DELMESSAGE = id => {
  getToken();
  return get({
    url: config._DELMESSAGE + `?id=${id}`
  })
}

/**
 * @description 修改推送消息
 */
export const UPDATEMESSAGE = formData => {
  getToken();
  return post({
    url: config._UPDATEMESSAGE,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询景区
 */
export const SCENERY = page => {
  getToken();
  return get({
    url: config._SCENERY + `?page=${page}`
  })
}

/**
 * @description 通过id查询景区
 * @param {id} id
 */
export const SCENERYBYID = id => {
  getToken();
  return get({
    url: config._SCENERYBYID + `?id=${id}`
  })
}

/**
 * @description 新增景区
 */
export const ADDSCENERY = formData => {
  getToken();
  return post({
    url: config._ADDSCENERY,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除景区
 */
export const DELSCENERY = id => {
  getToken();
  return get({
    url: config._DELSCENERY + `?id=${id}`
  })
}

/**
 * @description 修改景区
 */
export const UPDATESCENERY = formData => {
  getToken();
  return post({
    url: config._UPDATESCENERY,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询镇村
 * @param {page} 页码
 * @param {id} id
 */
export const TOWNS = page => {
  getToken();
  return get({
    url: config._TOWNS + `?page=${page}`
  })
}

/**
 * @description 查询镇村通过id
 * @param {id} 查询id
 */
export const TOWNSBYID = id => {
  getToken();
  return get({
    url: config._TOWNSBYID + `?id=${id}`
  })
}

/**
 * @description 新增镇村
 */
export const ADDTOWNS = formData => {
  getToken();
  return post({
    url: config._ADDTOWNS,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除镇村
 */
export const DELTOWNS = id => {
  getToken();
  return get({
    url: config._DELTOWNS + `?id=${id}`
  })
}

/**
 * @description 修改镇村
 */
export const UPDATETOWNS = formData => {
  getToken();
  return post({
    url: config._UPDATETOWNS,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询轮播图
 */
export const WHEEL = page => {
  getToken();
  return get({
    url: config._WHEEL + `?page=${page}`
  })
}

/**
 * @description 新增轮播图
 */
export const ADDWHEEL = formData => {
  getToken();
  return post({
    url: config._ADDWHEEL,
    data: qs.stringify(formData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * @description 删除轮播图
 */
export const DELWHEEL = id => {
  getToken();
  return get({
    url: config._DELWHEEL + `?id=${id}`
  })
}

/**
 * @description 修改轮播图
 */
export const PDATEWHEEL = formData => {
  getToken();
  return post({
    url: config._UPDATEWHEEL,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}

/**
 * @description 查询日志
 */
export const LOGINFO = page => {
  getToken();
  return get({
    url: config._LOGINFO + `?page=${page}`
  })
}

/**
 * @description 获取全部村镇id
 */
export const GETTOWNSLIST = () => {
  getToken();
  return get({
    url: config._GETTOWNSLIST
  })
}

/**
 * @description 注册
 */
export const REGISTER = formData => {
  getToken();
  return post({
    url: config._REGISTER,
    data: qs.stringify(formData),
    headers: {
      'Content-Type' : 'application/x-wwww-form-urlencoded'
    }
  })
}
