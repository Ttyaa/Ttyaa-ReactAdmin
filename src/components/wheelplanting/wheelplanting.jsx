/**
 * @ 文件解释: 轮播图组件
 */

import React from 'react';
import { WHEEL , DELWHEEL ,PDATEWHEEL} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';

/**
 * @description 轮播图组件
 */
const Wheelplanting = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title'
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
      interfaceUrl={[WHEEL,PDATEWHEEL,DELWHEEL]}
      crumbsConfig={{
        first: '轮播图',
        second: props.routerTitle,
      }}      
    />
  )

}

export default Wheelplanting
