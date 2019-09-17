/**
 * @ 文件解释: 控制渲染所有村镇容器组件
 */

import React from 'react';
import EditableTable from '../components/Common/BaseControlComponent/ControlComponent';
import {connect } from 'react-redux';
import { getTableDataSelector, getTableTotalSelector } from '../selector/controlTableDataSelector';
import { getAllCityAction } from '../action/getAllCityAction';


const ControlTableContainer = props => {

  return <EditableTable {...props} />
}

const mapStateToProps = state => {
  return {
    _tableData: getTableDataSelector(state),
    _total: getTableTotalSelector(state),
    loading: state.getTableReducer.loading,
    _reload: state.delTableReducer._reload
  }
}

export default connect(mapStateToProps, {
  getAllCityAction
})(ControlTableContainer)