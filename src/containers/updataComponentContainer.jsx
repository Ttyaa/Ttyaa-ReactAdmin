/**
 * @ 文件解释: 公共修改文件容器组件
 */

/**
 * @description 使用方法
 * @one 获取表格基础设置
 * @two 获取路由跳转history
 * @three 获取Action
 * @four  获取修改完后的跳转地址
 */

import React from 'react';
import { connect } from 'react-redux';
import BaseFormComponent from '../components/Common/BaseupdataComponent/updataComponent';
import { updateTableAction } from '../action/controlTableDataAction';
import { localStoreAction } from '../action/settingAction';
import { getAllCityIdSelector } from '../selector/controlTableDataSelector';
import { getAllCityAction } from '../action/getAllCityAction';

const UpoloadComponentContainer = props => <BaseFormComponent {...props} />

const mapStateToProps = state => {

  return {
    _getAllCityId : getAllCityIdSelector(state)
  }
}

export default connect(
  mapStateToProps, {
    updateTableAction,
    getAllCityAction,
    localStoreAction
  }
)(UpoloadComponentContainer);

