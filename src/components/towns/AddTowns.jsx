/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-01 09:52:15
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 15:13:51
 * @ 文件解释: 新增村镇ui组件
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDTOWNS } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddTowns = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '村镇名称',
      field: 'name',
      type: 'text',
      placeholder: '请输入村镇名称'
    },
    {
      label: '村镇简介',
      field: 'introduction',
      type: 'richText',
      placeholder: '请输入村镇简介',
    }
  ]

  // 设置跳转地址
  const skipUrl = '/app/townscontroller/towns';
  // url路径管理
  const history = props.history;
  return (
    <Fragment>
      <BreadcrumbCustom second={props.routerTitle} />
      <Card
        title={[
          <SVGICON
            type="icon-lunbotu"
            className="singleStyle"
            key="singleStyle"
          />,
          <span key="_uploadSliderSpan">新增镇村</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDTOWNS}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
AddTowns.propTypes = propTypes

export default AddTowns