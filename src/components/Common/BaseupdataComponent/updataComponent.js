/**
 * @ 文件解释: 表单更新公共组件
 */

import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import {
  Form,
  Input,
  Upload,
  Button,
  Icon,
  message,
  Select,
  Radio
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import '../../../style/singlevideo.less';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateFromHTML } from 'draft-js-import-html';

const BaseFormComponent = props => {
  const [loading] = useState(false);
  console.log("props", props);
  const sceneryType = ['自然风光', '度假胜地', '乡村旅游', '主题公园'];
  const informationType = [{ type: '新闻资讯', id: 1 }, { type: '消息公告', id: 2 }, { type: '喜讯通知', id: 3 }, { type: '政务信息', id: 5 }, { type: '党务信息', id: 6 }]
  // 用来获取原始组件的push方法
  const history = props.routerPath;

  // 初始化富文本内容
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorContent, setEditorContent] = useState(undefined);

  // 设置上传时显示默认图片 - 特殊处理首页需要默认显2张二维码
  if (props.componentName === 'defaultDisplayPicture') {
    var [fileList, setfileList] = useState([
      {
        uid: '1',
        url: '' // 默认显示图片
      },
      {
        uid: '2',
        url: '' // 默认显示图片
      }
    ]);
  }
  else {
    var [fileList, setfileList] = useState([])
  }
  const { TextArea } = Input;

  // 改变默认图片的初始值 - 只对需要默认显示图片的上传
  if (props.componentName === 'defaultDisplayPicture') {
    useEffect(() => {
      setfileList([
        {
          uid: '1',
          url: props.enterQr
        },
        {
          uid: '2',
          url: props.enterWxQr
        }
      ])
    }, [props.enterQr, props.enterWxQr])
  }

  // 表单配置
  const formList = props.FormConfig;
  const Option = Select.Option;

  // 配置上传
  const uploadConfig = {
    // 移除文件
    onRemove: file => {
      const index = fileList.indexOf(file); //取被删除者下标
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setfileList(newFileList);
    },

    //上传前的操作
    beforeUpload: file => {
      const imgType = ['image/jpeg', 'image/jpg', 'image/png'];

      // 处理图片
      if (file.type.split('/')[0] === 'image') {
        const isLt10M = file.size / 1024 / 1024 < 10; // 限制图片不得大于10M
        const checkImgType = imgType.filter(
          fileType => file.type === fileType
        );
        if (!checkImgType) {
          message.error('图片上传类型只允许JPG , PNG, JPEG,请检查你的格式');
        }
        if (!isLt10M) {
          message.error('图片大小不允许超过10M');
        }
      }

      // 处理视频
      if (file.type.split('/')[0] === 'video') {
        const isLt300M = file.size / 1024 / 1024 < 300; // 限制视频不得大于300M
        if (!isLt300M) {
          message.error('视频大小不允许超过300M');
        }
      }
      setfileList([...fileList, file]);
      return false;
    },
    listType: 'picture-card',
    fileList,
  };

  // 处理富文本事件
  const onEditorStateChange = editorState => {
    console.log("EditorStateChange", editorState);
    setEditorState(editorState);
  };
  const onEditorChange = editorContent => {
    console.log("editorContent", editorContent);
    setEditorContent(editorContent)
  };

  // 异步上传富文本中的图片,获取返回的链接
  const imageUploadCallBack = file => {
    let imageUploadPromise = new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://192.168.101.125:8081/web/file/add'); // 定义的图片地址
        const data = new FormData();
        data.append('file', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          const [res] = response.data; // 获取返回的链接
          resolve({ data: { link: res.saveUrl }, picId: res.picId });
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );

    imageUploadPromise.then(res => {
      // 将富文本中的图片保存在localStore
      if (window.localStorage.getItem('picId')) {
        const _picId = window.localStorage.getItem('picId');
        let picIdArr = Array(1).fill(_picId);
        picIdArr.push(res.picId);
        props.localStoreAction(1, 'picId', picIdArr);
      } else {
        props.localStoreAction(1, 'picId', res.picId);
      }
    })
    return imageUploadPromise;
  }

  // 显示上传的视频
  const handleChange = ({ fileList }) => { setfileList(fileList) }

  // 上传提交
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      // 富文本内容不为空
      if (draftToHtml(editorContent) || !err) {
        let formData = {};
        if (fileList.length === 0) {
          Object.keys(values).map((cv, index) => {
            console.log('index', cv);
            if (cv === 'difDesc' || cv === 'introduction' || cv === 'sceneryDesc' || cv === 'content' || cv === 'foodDesc' || cv === 'enterpriseDes' || cv === 'famousDesc') {
              formData[cv] = draftToHtml(editorContent);
            } else {
              formData[cv] = values[cv];
            }
          })
          formData['picId'] = window.localStorage.getItem('picId');
        } else {
          let formData = new FormData();
          fileList.forEach((file, index) => {
            // 特殊处理默认显示图片,enterpriseQr , enterpriseWxqr
            const enterArr = ['enterpriseQr', 'enterpriseWxqr'];
            if (props.componentName === 'defaultDisplayPicture') {
              formData.append(enterArr[index], file)
            } else {
              formData.append('file', file);
            }
          });
        }
        // 处理页面不需要跳转直接刷新当前页面的情况

        if (props.componentName === 'defaultDisplayPicture') {
          // props._reload();
        } else {
          alert("22222222");
          console.log("props.DataID", props.DataID, "======formData", formData);
          props.updateTableAction(props.interfaceUrl, props.DataID, formData);
          // history.push(props.skipUrl) // 跳转到管理界面
        }
      } else {
        message.error(`表单格式有误`);
      }
    });
  };

  // 处理表格组件
  const initForm = () => {
    const { getFieldDecorator } = props.form, FormItem = Form.Item, formItemList = [];

    // 正则处理特殊字符
    const RegExpStr = /[^<>&*%$^|\\]+$/gi;

    if (formList && formList.length > 0) {
      formList.forEach(item => {

        let label = item.label,
          field = item.field,
          initialValue = item.oldData || '',
          placeholder = item.placeholder || '',
          radioContent = item.radioContent || [];

        if (item.type === 'text') {
          const input_text = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field, {
                rules: [
                  {
                    required: true,
                    message: placeholder,
                  },
                  {
                    pattern: new RegExp(RegExpStr, 'ig'),
                    message: '不允许输入特殊字符',
                  },
                ],
                initialValue: initialValue,
              })(<Input type={item.text} />)}
            </FormItem>
          );
          formItemList.push(input_text);
        } else if (item.type === 'text1') {
          const input_text = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field, {
                rules: [
                  {
                    required: true,
                    message: placeholder,
                  },
                  {
                    pattern: new RegExp(RegExpStr, 'ig'),
                    message: '不允许输入特殊字符',
                  },
                ],
                initialValue: initialValue,
              })(<Input disabled="true " type={item.text} value={null} />)}
            </FormItem>
          );
          formItemList.push(input_text);
        } else if (item.type === 'textarea') {
          const input_textarea = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field, {
                rules: [
                  {
                    required: true,
                    message: placeholder,
                  },
                  {
                    pattern: new RegExp(RegExpStr, 'ig'),
                    message: '不允许输入特殊字符',
                  },
                ],
              })(
                <TextArea
                  autosize={{
                    minRows: 4,
                    maxRows: 8,
                  }}
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                />
              )}
            </FormItem>
          );
          formItemList.push(input_textarea);
        } else if (item.type === 'select') {
          // Select类别
          const input_select = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field)(
                <Select placeholder={placeholder}>
                  {props._getAllCityId.map((item, index) => {
                    return (
                      <Option value={item.id} key={index}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </FormItem>
          );
          formItemList.push(input_select);
        } else if (item.type === 'select1') {
          // Select类别
          const input_select = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field)(
                <Select placeholder={placeholder}>
                  {sceneryType.map((item, index) => {
                    // console.log(item);
                    return (
                      <Option value={index + 1} key={index}>
                        {item}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </FormItem>
          );
          formItemList.push(input_select);
        }
        else if (item.type === 'select2') {
          // Select类别
          const input_select = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field)(
                <Select placeholder={placeholder}>
                  {informationType.map((item, index) => {
                    // console.log(item);
                    return (
                      <Option value={item.id} key={index}>
                        {item.type}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </FormItem>
          );
          formItemList.push(input_select);
        }
        else if (item.type === 'radio') {
          const radioInput = (
            <FormItem label={label}>
              {getFieldDecorator(field)(
                <Radio.Group>
                  {
                    radioContent.map((item, key) => {
                      return <Radio value={item.value} key={key}> {item.item} </Radio>
                    })
                  }
                </Radio.Group>,
              )}
            </FormItem>
          )
          formItemList.push(radioInput);
        } else if (item.type === 'richText') {
          // const sampleMarkup = '<img src="../../../../public/images/icons/icon-128x128.png" />';
          // const blocksFromHTML = convertFromHTML(sampleMarkup);
          // const state = ContentState.createFromBlockArray(
          //   blocksFromHTML.contentBlocks,
          //   blocksFromHTML.entityMap,
          // );
          // useEffect(e => {
          //   setEditorState(EditorState.createWithContent("Hello"));
          // }, [])
          // setEditorState(EditorState.createWithContent(stateFromHTML(initialValue)));
          // const value = EditorState.createWithContent(stateFromHTML(initialValue));
          console.log("value",initialValue);
          useEffect( e =>{
            setEditorState(EditorState.createWithContent(stateFromHTML(' <p>Hello</p>')));
            // setEditorState(EditorState.createWithContent($(initialValue).html()));
            // setEditorState(className.html(initialValue));
          },[initialValue])
          const richText = (
            <FormItem key={field} label={label} >
              {getFieldDecorator(field)(
                <div>
                  <Editor
                    editorState={editorState}
                    toolbarClassName="home-toolbar"
                    wrapperClassName="home-wrapper"
                    editorClassName="home-editor"
                    localization={{ locale: 'zh', translations: { 'generic.add': '添加' } }}
                    wrapperClassName="wysiwyg-wrapper"
                    placeholder="请输入正文"
                    onEditorStateChange={onEditorStateChange} // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是EditorState类型
                    onContentStateChange={onEditorChange} // 每次编辑器状态发生改变的时候调用这个函数,传递的参数是RawDraftContentState类型
                    toolbar={{
                      history: { inDropdown: true },
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true }, 
                      image: { uploadCallback: imageUploadCallBack },
                    }}
                  />
                </div>
              )}
            </FormItem>)
          formItemList.push(richText);
        } else if (item.type === 'file') {
          const input_file = (
            <FormItem key={field} label={label}>
              {getFieldDecorator(field)(
                <Upload
                  {...uploadConfig}
                  onChange={handleChange}
                >
                  <Button>
                    <Icon type="upload">上传</Icon>
                  </Button>
                </Upload>
              )}
            </FormItem>
          );
          formItemList.push(input_file);
        }
      });
    }
    console.log("formItemList", formItemList);
    return formItemList;
  };

  return (
    <Form onSubmit={handleSubmit}>
      {initForm()}
      <FormItem>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
        >
          {loading ? '上传中' : '确定修改'}
        </Button>
      </FormItem>
    </Form>
  );
};

export default Form.create()(BaseFormComponent);
