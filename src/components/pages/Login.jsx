/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-07-01 15:49:46
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-12 00:11:48
 * @ 文件解释: 登录页面
 */


import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import CanvasBox from '../canvasBackground/CanvasBg';
import LogoImg from '../../style/imgs/logo.png';
import Vcode from 'react-vcode';
import tools from '../../utils/tools';
import '../../style/login.less';
import cookies from 'react-cookies';

const FormItem = Form.Item;

class Login extends React.Component {

  constructor(props){
    super(props);
    console.log('cookieData', this.props.cookieData)
  }

  componentDidUpdate() {
    const { loginData, history } = this.props;
    console.log('=====/>',loginData);
    if (loginData.userInfo) {
      this.props.saveUserInfo(loginData); // 存localStore
      history.push('/');
    }
  }

  // label , input布局
  formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  // 验证码改变时触发
  onVcodeChange(code) {
    const form = this.props.form;
    form.setFieldsValue({
      vcode: code // 开发模式自动赋值验证码，正式环境，这里应该赋值''
    });
    this.setState({
      codeValue: code
    });
  }

  handleSubmit = e => {
    // 提交到后台
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('values=>>', values)
        const { remember, username, password } = values;
        this.props.loginAction(remember, username, password); // 提交登陆密码
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-form">
          {/* canvas效果 */}
          <div className="canvasBox">
            <CanvasBox row={12} col={8} />
          </div>
          <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }} className="formStyle" >
            <div className="login-logo">
              <span className="login-name">
                <img src={LogoImg} alt="logo" />
                <span>Gszs-React-Admin</span>
              </span>
              {/* <PwaInstaller /> */}
            </div>
            <FormItem {...this.formItemLayout} className="userStyle" >
              {getFieldDecorator('username', {
                initialValue: cookies.load('authCookie').username,
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="请输入账号"
                />
              )}
            </FormItem>
            <FormItem {...this.formItemLayout} className="passwordStyle" >
              {getFieldDecorator('password', {
                initialValue: cookies.load('authCookie').password,
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="请输入"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("vcode", {
                rules: [
                  {
                    validator: (rule, value, callback) => {
                      const v = tools.trim(value);
                      if (v) {
                        if (v.length > 4) {
                          callback("验证码为4位字符");
                        } else if (
                          v.toLowerCase() !==
                          this.state.codeValue.toLowerCase()
                        ) {
                          callback("验证码错误");
                        } else {
                          callback();
                        }
                      } else {
                        callback("请输入验证码");
                      }
                    }
                  }
                ]
              })(
                <Input
                  className="inputCode"
                  size="large"
                  id="vcode" // 为了获取焦点
                  placeholder="请输入验证码"
                  onPressEnter={() => this.onSubmit()}
                />
              )}
              <Vcode
                height={40}
                width={150}
                onChange={code => this.onVcodeChange(code)}
                className="vcode"
                options={{
                  lines: 16
                }}
              />
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住我</Checkbox>)}
            
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '100%' }}
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);