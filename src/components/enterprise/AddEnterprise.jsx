/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-06 19:42:58
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 20:03:18
 * @ 文件解释: 添加企业管理
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDENTERPRISE } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddEnterprise = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '村镇id',
      field: 'townsId',
      type: 'select',
      placeholder: '请选择村镇id'
    },
    {
      label: '企业描述',
      field: 'difDesc',
      type: 'richText',
      placeholder: '请填写企业描述',
    }
  ]

  // 设置跳转地址
  const skipUrl = '/app/diffamilycontroller/enterprisecontrollerdata';
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
          <span key="_uploadSliderSpan">新增企业信息</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDENTERPRISE}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
AddEnterprise.propTypes = propTypes

export default AddEnterprise
