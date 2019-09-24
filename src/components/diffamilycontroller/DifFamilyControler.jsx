/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-06 15:49:00
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 15:49:00
 * @ 文件解释: 困难家庭管理
 */

import React from 'react';
import { DIFFAMILY,DIFFAMILYBYID,DELDIFFAMILY,UPDATEDIFFAMILY} from '../../axios/index';
import { G_transformTime } from '../../utils/utils';
import ControlTableContainer from '../../containers/controlTableContainer';
import '../../style/components/towns.less';

/**
 * @description 困难家庭管理
 */
const DifFamilyControler = props => {
  
  // 设置基础表格columns
  const columns = [
    {
      title: '镇村名称',
      dataIndex: 'townName',
      key: 'townName'
    },
    {
      title: '户主',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '家庭人数',
      dataIndex: 'num',
      key: 'num'
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: data => G_transformTime(data)
    },
    // {
    //   title: '详细内容',
    //   dataIndex: 'introduction',
    //   key: 'introduction',
    //   width: 200,
    //   render: text => (
    //     <div
    //       className = "townsDesc"
    //       style={{
    //         whiteSpace: 'pre-wrap',
    //         wordWrap: 'break-word',
    //         overflow: 'hidden',
    //         height: '120px',
    //         width: '200px'
    //       }}
    //       dangerouslySetInnerHTML={{ __html: text.replace(/\\n/g, '<br/>','<img />') }}
    //     />
    //   )
    // },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
    },
  ]

  return (
    <ControlTableContainer 
      columns = {columns}
      interfaceUrl={[ DIFFAMILY,DELDIFFAMILY]}
      componentName = {props.routerTitle}
      crumbsConfig={{
        first: '困难家庭相关',
        second: props.routerTitle,
      }}     
    />
  )

}

export default DifFamilyControler