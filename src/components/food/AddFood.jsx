/**
 * @ 文件解释: 添加名美食
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDFOOD } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddFood = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '所属村镇',
      field: 'townsId',
      type: 'select',
      placeholder: '请选择村镇id'
    },
    {
      label: '美食名称',
      field: 'name',
      type: 'text',
      placeholder: '请输入美食名称'
    },
    {
      label: '美食简介',
      field: 'foodDesc',
      type: 'richText',
      placeholder: '请填写美食简介',
    }
  ]

  // 设置跳转地址
  const skipUrl = '/app/famouscontroller/famouscontrollerdata';
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
          <span key="_uploadSliderSpan">新增美食</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDFOOD}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
AddFood.propTypes = propTypes

export default AddFood
