/**
 * @ 文件解释: 困难大学生管理
 */

import React from 'react';
import { DIFSTUDENTBYID,DIFSTUDENT, DELDIFSTUDENT, UPDATEDIFSTUDENT } from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';
import '../../style/components/towns.less';

/**
 * @description 困难大学生管理
 */
const DifStudent = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '镇村名称',
      dataIndex: 'townName',
      key: 'townName'
    },
    {
      title: '学生姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '家庭住址',
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
      URL = '/app/difstudentcontroller/difstudentcontrollerdata/updata'
      columns = {columns}
      interfaceUrl={[DIFSTUDENT,DELDIFSTUDENT]}
      componentName = {props.routerTitle}
      crumbsConfig={{
        first: '困难大学生相关',
        second: props.routerTitle,
      }}     
    />
  )

}

export default DifStudent