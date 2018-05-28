/**
 * Created by Yu Tian Xiong on 2018/05/25.
 * fileName:home dva 入口 model文件
 */
import {getUserInfo,getMenu} from '../services/home';
import {message} from 'antd';

export default {
  namespace: 'home',
  state: {
    userInfoData:[],
    menuData:[],
  },
  subscriptions: {
    setup({dispatch, history}) {
    },
  },
  effects: {
    //获取用户数据
    * GetUserInfo({payload}, {call, put}) {
      const response = yield call(getUserInfo, payload);
      yield put({type: 'getUserInfo',payload: response.Data});
    },
    //左侧菜单数据
    * GetMenu({payload}, {call, put}) {
      const response = yield call(getMenu, payload);
      if(response.length === 0 || response.length === null){
        message.error('您没有权限哦！',()=>{})
      }
      yield put({type: 'getMenu',payload: response.Data});
    },
  },
  //把状态抛入store
  reducers: {
    //用户数据
    getUserInfo(state, action) {
      return {
        ...state,
        userInfoData:action.payload
      }
    },
    getMenu(state, action) {
      return {
        ...state,
        menuData:action.payload
      }
    },

  },
};
