/**
 * @ 文件解释: 新增轮播图
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDWHEEL } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddWheelplanting = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '标题',
      field: 'title',
      type: 'text',
      placeholder: '请输入标题'
    },
    {
      label: '图片文件',
      field: 'file',
      type: 'file',
      placeholder: '添加图片'
    }
  ]

  // 设置跳转地址
  const skipUrl = '/app/wheelplantingcontroller/wheelplanting';
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
          <span key="_uploadSliderSpan">新增轮播图</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDWHEEL}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
AddWheelplanting.propTypes = propTypes

export default AddWheelplanting;