/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-01 09:56:19
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 19:55:25
 * @ 文件解释: 村镇信息管理
 */

import React from 'react';
import { TOWNS , DELTOWNS, TOWNSBYID} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';
import '../../style/components/towns.less';

/**
 * @description 村镇信息管理
 */
const Towns = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '镇村名称',
      dataIndex: 'townName',
      key: 'townName'
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
      interfaceUrl={[TOWNS, DELTOWNS, TOWNSBYID]}
      componentName = {props.routerTitle}
      crumbsConfig={{
        first: '镇村相关',
        second: props.routerTitle,
      }}     
    />
  )

}

export default Towns

