/**
 * @ 文件解释: 名人管理
 */

import React from 'react';
import { FAMOUS, DELFAMOUS} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';
import '../../style/components/towns.less';

/**
 * @description 困难大学生管理
 */
const Person = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '镇村名称',
      dataIndex: 'townName',
      key: 'townName'
    },
    {
      title: '名人姓名',
      dataIndex: 'name',
      key: 'name'
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
      interfaceUrl={[FAMOUS,DELFAMOUS]}
      componentName = {props.routerTitle}
      crumbsConfig={{
        first: '名人相关',
        second: props.routerTitle,
      }}     
    />
  )

}

export default Person