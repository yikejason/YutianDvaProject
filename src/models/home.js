/**
 * Created by Yu Tian Xiong on 2018/05/25.
 * fileName:home dva 入口 model文件
 */
import {query} from '../services/home';


export default {
  namespace: 'home',
  state: {},
  subscriptions: {
    setup({dispatch, history}) {
    },
  },
  //异步请求
  effects: {
    * fetch({payload}, {call, put}) {
      const response = yield call(query, payload);
      console.log(response)
      yield put({type: 'save'});
    },
  },
  //把状态抛入store
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },


  },
};
