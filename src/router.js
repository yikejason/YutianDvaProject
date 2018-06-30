/**
 * Created by Yu Tian Xiong on 2018/05/28.
 * fileName:rotuer
 */
import React from 'react';
import {routerRedux} from 'dva/router';
import Home from './routes/home/Home';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from 'antd';

const { ConnectedRouter } = routerRedux;
function RouterConfig({history}) {
  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zhCN}>
          <Home/>
      </LocaleProvider>
    </ConnectedRouter>
  );
}

export default RouterConfig;
