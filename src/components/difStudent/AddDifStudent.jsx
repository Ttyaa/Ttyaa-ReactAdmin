/**
 * @ Author: Gszs
 * @ Create Time: 2019-08-06 18:10:19
 * @ Modified by: Gszs
 * @ Modified time: 2019-08-06 19:42:01
 * @ 文件解释: 添加困难学生
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpoloadComponentContainer from '../../containers/uploadComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { ADDDIFSTUDENT } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const AddDifStudent = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '村镇id',
      field: 'townsId',
      type: 'select',
      placeholder: '请选择村镇id'
    },
    {
      label: '学生姓名',
      field: 'name',
      type: 'text',
      placeholder: '请输入学生姓名'
    },
    {
      label: '学生地址',
      field: 'address',
      type: 'text',
      placeholder: '请输入学生地址'
    },
    {
      label: '困难学生描述',
      field: 'difDesc',
      type: 'richText',
      placeholder: '请填写困难学生描述',
    }
  ]

  // 设置跳转地址
  const skipUrl = '/app/difstudentcontroller/difstudentcontrollerdata';
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
          <span key="_uploadSliderSpan">新增困难学生</span>,
        ]}
      >
        {/* 公共上传容器组件 */}
        <UpoloadComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={ADDDIFSTUDENT}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
AddDifStudent.propTypes = propTypes

export default AddDifStudent
