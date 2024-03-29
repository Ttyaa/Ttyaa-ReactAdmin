/**
 * @ 文件解释: 修改表格数据的公共容器组件
 */

import React from 'react';
import {updateTableAction} from '../action/controlTableDataAction.jsx';
import {connect} from 'react-redux';
import WrappedUpdateFormData from '../components/Common/ModalForm';
import {getTableByIdAction} from '../action/controlTableDataAction';
import { getTableDataByIdSelector } from '../selector/controlTableDataSelector';

const ModalFormContainer = props => {
  return <WrappedUpdateFormData {...props} />
}

const mapStateToProps = state => {
  return {
    _oldTableData: getTableDataByIdSelector(state)
  }
}

export default connect(mapStateToProps, {
  getTableByIdAction,
  updateTableAction
})(ModalFormContainer)

