/**
 * @ 文件解释: 添加资讯/政务/党务
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDINFOMATION } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddScenery = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '所属村镇',
      field: 'townsId',
      type: 'select',
      placeholder: '请选择所属村镇'
    },
    {
      label: '标题',
      field: 'name',
      type: 'text',
      placeholder: '请输入标题'
    },
    {
      label: '作者',
      field: 'author',
      type: 'text',
      placeholder: '请输入作者'
    },
    {
      label: '类型',
      field: 'type',
      type: 'select2',
      placeholder: '请选择类型'
    },
    {
      label: '具体内容',
      field: 'content',
      type: 'richText',
      placeholder: '请填写具体内容',
    }
  ]

  // 设置跳转地址
  const skipUrl = '/app/diffamilycontroller/informationcontrollerdata';
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
          <span key="_uploadSliderSpan">新增资讯/政务/党务</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDINFOMATION}
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
