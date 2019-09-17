/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-31 20:21:14
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 15:27:49
 * @ 文件解释: 新增风土人情
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDAMOROUS } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddAmorous = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '村镇id',
      field: 'townId',
      type: 'select',
      placeholder: '请选择村镇id'
    },
    {
      label: '标题',
      field: 'name',
      type: 'text',
      placeholder: '请输入标题'
    },
    {
      label: '风土人情简介',
      field: 'introduction',
      type: 'richText',
      placeholder: '请输入风土人情简介',
    }
  ]

  // 设置跳转地址
  const skipUrl = '/app/amorous/addamorousdata';
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
          <span key="_uploadSliderSpan">新增风土人情</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDAMOROUS}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
AddAmorous.propTypes = propTypes

export default AddAmorous