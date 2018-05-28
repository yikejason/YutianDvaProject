/**
 * Created by Yu Tian Xiong on 2018/05/25.
 * fileName:home dva 入口 model文件
 */
import {query} from '../services/home';

export default {
  namespace: 'home',
  state: {
    menuData:[],
  },
  subscriptions: {
    setup({dispatch, history}) {
    },
  },
  //异步请求
  effects: {
    * fetch({payload}, {call, put}) {
      const response = yield call(query, payload);
      yield put({type: 'save',payload: response.Data});
    },
  },
  //把状态抛入store
  reducers: {
    save(state, action) {
      return {
        ...state,
        menuData:action.payload
      }
    },
  },
};
