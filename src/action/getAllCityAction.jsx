
import * as TableConstants from '../constants/TableConstants';
import { message } from 'antd';

/**
 * @description 查询所以村镇
 * @param {func}      接口函数
 */
export const getAllCityAction = (func) => {
  console.log('22222')
  return async dispatch => {
    dispatch({
      type: TableConstants._startGetAllCityId
    })
    try {
      const res = await func();
      console.log('22222',res)
      if (res && res.status === 200) {
        
        dispatch({
          type: TableConstants._successGetAllCityId,
          payload: res
        })
      } else {
        dispatch({
          type: TableConstants._failGetAllCityId
        })
      }
    } catch (err) {
      message.error('网络连接错误');
    } finally {
      dispatch({
        type: TableConstants._stopGetAllCityId
      })
    }
  }
}
