/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 16:44:27
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 21:21:23
 * @ 文件解释: 风土人情组件
 */

import React from 'react';
import { GETAMOROUS , DELAMOROUS} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';

/**
 * @description 风土人情组件
 */
const Amorous = props => {
  
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
      interfaceUrl={[GETAMOROUS, DELAMOROUS]}
      crumbsConfig={{
        first: '风土人情',
        second: props.routerTitle,
      }}      
    />
  )

}

export default Amorous