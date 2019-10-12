/**
 * @ 文件解释: 公共修改文件容器组件
 */

import React from 'react';
import { connect } from 'react-redux';
import BaseFormComponent from '../components/Common/BaseupdataComponent/updataComponent';
import { updateTableAction } from '../action/controlTableDataAction';
import { localStoreAction } from '../action/settingAction';
import { getAllCityIdSelector } from '../selector/controlTableDataSelector';
import { getAllCityAction } from '../action/getAllCityAction';

const updataComponentContainer = props => <BaseFormComponent {...props} />

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
)(updataComponentContainer);

