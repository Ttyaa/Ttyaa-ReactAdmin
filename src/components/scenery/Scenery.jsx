/**
 * @ 文件解释: 景区管理组件
 */

import React from 'react';
import { SCENERY , DELSCENERY ,SCENERYBYID ,UPDATESCENERY} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';

/**
 * @description 景区管理
 */
const Amorous = props => {
  
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
      title: '类型',
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
      interfaceUrl={[ SCENERY , DELSCENERY , SCENERYBYID , UPDATESCENERY ]}
      crumbsConfig={{
        first: '景区管理',
        second: props.routerTitle,
      }}      
    />
  )

}

export default Amorous
