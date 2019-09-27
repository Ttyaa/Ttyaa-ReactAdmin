/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-30 16:44:27
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 21:21:23
 * @ 文件解释: 特色美食组件
 */

import React from 'react';
import { FOOD , _DELFOOD} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';

/**
 * @description 特色美食组件
 */
const Food = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '村镇',
      dataIndex: 'townName',
      key: 'townName'
    },
    {
      title: '名称',
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
      interfaceUrl={[FOOD, _DELFOOD]}
      crumbsConfig={{
        first: '美食管理',
        second: props.routerTitle,
      }}      
    />
  )

}

export default Food
