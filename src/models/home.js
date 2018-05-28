/**
 * Created by Yu Tian Xiong on 2018/05/25.
 * fileName:home dva 入口 model文件
 */
import {getUserInfo} from '../services/home';

export default {
  namespace: 'home',
  state: {
    userInfoData:[],
  },
  subscriptions: {
    setup({dispatch, history}) {
    },
  },
  //异步请求获取用户数据
  effects: {
    * GetUserInfo({payload}, {call, put}) {
      const response = yield call(getUserInfo, payload);
      yield put({type: 'getUserInfo',payload: response.Data});
    },
  },
  //把状态抛入store
  reducers: {
    getUserInfo(state, action) {
      return {
        ...state,
        userInfoData:action.payload
      }
    },

  },
};
