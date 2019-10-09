/**
 * @ 文件解释: 修改风土人情
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpdataComponentContainer from '../../containers/updataComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { AMOROUSBYID, UPDATEAMOROUS } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}

const UpdataAmorous = props => {

  // 表格配置
  const FormConfig = [
    {
      label: '所属村镇',
      field: 'townsId',
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
  const skipUrl = '/app/amorous/amorousdata';
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
          <span key="_uploadSliderSpan">修改风土人情</span>,
        ]}
      >
        {/* 公共修改容器组件 */}
        <UpdataComponentContainer
          FormConfig={FormConfig}
          interfaceUrl={[AMOROUSBYID, UPDATEAMOROUS]}
          skipUrl={skipUrl}
          componentName={props.routerTitle}
          routerPath={history}
        />
      </Card>
    </Fragment>
  )
}

// 类型检查
UpdataAmorous.propTypes = propTypes

export default UpdataAmorous