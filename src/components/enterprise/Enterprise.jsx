/**
 * @ 文件解释: 企业管理
 */

import React from 'react';
import { DELENTERPRISE,UPDATEENTERPRISE,ENTERPRISEBYID,ENTERPRISE} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';
import '../../style/components/towns.less';

/**
 * @description 企业管理
 */
const Enterprise = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '所属村镇',
      dataIndex: 'townName',
      key: 'townName'
    },
    {
      title: '企业名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '企业联系人',
      dataIndex: 'contact',
      key: 'contact'
    },
    {
      title: '企业联系方式',
      dataIndex: 'mobile',
      key: 'mobile'
    },
    {
      title: '企业地址',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: data => G_transformTime(data)
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
    },
  ]

  return (
    <ControlTableContainer 
      columns = {columns}
      interfaceUrl={[ENTERPRISE,DELENTERPRISE]}
      componentName = {props.routerTitle}
      crumbsConfig={{
        first: '企业相关',
        second: props.routerTitle,
      }}     
    />
  )

}

export default Enterprise