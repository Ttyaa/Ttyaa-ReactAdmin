/**
 * @ 文件解释: 添加景区
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDSCENERY } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddScenery = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '村镇id',
      field: 'townsId',
      type: 'select',
      placeholder: '请选择村镇id'
    },
    {
      label: '景区名',
      field: 'name',
      type: 'text',
      placeholder: '请输入景区名'
    },
    {
      label: '景区类型',
      field: 'type',
      type: 'select1',
      placeholder: '请选择景区类型'
    },
    {
      label: '景区特色',
      field: 'features',
      type: 'text',
      placeholder: '请输入景区特色'
    },
    {
      label: '景区描述',
      field: 'sceneryDesc',
      type: 'richText',
      placeholder: '请填写景区描述',
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
          <span key="_uploadSliderSpan">新增景区</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDSCENERY}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
AddScenery.propTypes = propTypes

export default AddScenery
