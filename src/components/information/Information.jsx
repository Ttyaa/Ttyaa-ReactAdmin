/**
 * @ Author: Gszs
 * @ 文件解释: 资讯/政务/党务组件
 */

import React from 'react';
import { INFOMATION , DELINFOMATION} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';

/**
 * @description 资讯/政务/党务组件
 */
const Food = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '文章类型',
      dataIndex: 'type',
      key: 'type'
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
      interfaceUrl={[INFOMATION, DELINFOMATION]}
      crumbsConfig={{
        first: '资讯/政务/党务管理',
        second: props.routerTitle,
      }}      
    />
  )

}

export default Food
