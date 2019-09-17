/**
 * @ Author: Gszs
 * @ Create Time: 2019-07-22 16:04:49
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-12 00:15:42
 * @ Description: 登陆Action
 */

import { message } from 'antd';
import { handleLogin } from '../axios';
import cookies from 'react-cookies';


export const startLogin = 'startLogin';
export const failedLogin = 'failedLogin';
export const successLogin = 'successLogin';
export const stopLogin = 'stopLogin';

/**
 * @description 登陆的Action
 * @param {Boolean} 判断是否需要保存账号密码
 * @param {String} 用户名
 * @param {String} 密码
 */
export const loginAction = (_boolean, username, password) => {
  return async dispatch => {
    dispatch({
      type: startLogin
    });
    try {
      handleLogin(username, password).then(res => {
        if (res && res.status === 200) {
          if(_boolean){
            const userInfo = {
              username,
              password
            }
            cookies.save('authCookie', userInfo, {
              maxAge: 3600 * 24 * 7
            })
          }else{
            if (cookies.load('authCookie')) {
              cookies.save('authCookie', {
                username: '',
                password: ''
              })
            }
          }
          const { data } = res;
          dispatch({
            type: successLogin,
            payload: data
          })
          message.success('登陆成功')
        }else{
          message.error(res.message)
        }
      })
    } catch (err) {
      dispatch({
        type: failedLogin
      })
    } finally {
      dispatch({
        type: stopLogin
      })
    }
  }
}