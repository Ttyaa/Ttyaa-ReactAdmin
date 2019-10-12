/**
 * @ 文件解释: 修改风土人情
 */

import React, { Fragment ,useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { SVGICON } from '../svg/svgIcon';
import UpdataComponentContainer from '../../containers/updataComponentContainer';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { AMOROUSBYID, UPDATEAMOROUS } from '../../axios/index';

const propTypes = {
  FormConfig: PropTypes.array
}
const AddAmorous = props => {

  const [oldData, setOldData] = useState([]);
  const [DataID,setDataID] = useState();

  useEffect(() => {
    const str = props.location.search;
    function getUrlToken(name, str) {
      const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
      const r = str.substr(1).match(reg);
      if (r != null) return  decodeURIComponent(r[2]); return null;
    }
    const id = getUrlToken('id', str);
    setDataID(id);
    // console.log("id",id);
    AMOROUSBYID(id).then(e=>{
      // console.log("e",e);
      setOldData(e.data);
    })
    }, [])
    console.log("e1111",oldData);  

  // 表格配置
  const FormConfig = [
    {
      label: '所属村镇（不可修改）',
      field: 'townsId',
      oldData:oldData.townName,
      type: 'text1',
      placeholder: '请选择所属村镇'
    },
    {
      label: '标题',
      field: 'name',
      oldData:oldData.title,
      type: 'text',
      placeholder: '请输入标题'
    },
    {
      label: '风土人情简介',
      field: 'introduction',
      oldData:oldData.introduction, 
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
          DataID={DataID}
          FormConfig={FormConfig}
          interfaceUrl={UPDATEAMOROUS}
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