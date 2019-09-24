/**
 * @ 文件解释: 添加名人
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDFAMOUS } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddPerson = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '村镇id',
      field: 'townsId',
      type: 'select',
      placeholder: '请选择村镇id'
    },
    {
      label: '名人姓名',
      field: 'name',
      type: 'text',
      placeholder: '请输入名人名称'
    },
    {
      label: '名人年龄',
      field: 'age',
      type: 'text',
      placeholder: '请输入名人年龄'
    },
    {
      label: '名人信息简介',
      field: 'famousDesc',
      type: 'richText',
      placeholder: '请填写名人信息简介',
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
          <span key="_uploadSliderSpan">新增名人</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDFAMOUS}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
AddPerson.propTypes = propTypes

export default AddPerson
