/**
 * Created by Yu Tian Xiong on 2018/05/28.
 * fileName:token配置
 */
import {searchParamName, getCurrentTime} from '../components/pulicFuc'
import qs from 'qs';
import md5 from 'blueimp-md5';
import Config from '../utils/Config';

export default class Token {
  static getUserToken () {
    //从生产环境中获取token
    if (process.env.NODE_ENV === `production`) {
      const token = searchParamName('AccessToken');
      return new Promise(function (resolve, reject) {
        if (token) {
          resolve({Ret: 0, Data: {Token: token}});
        } else {
          reject('AccessToken is not found！');
        }
      })
    }
    //从开发环境中获取token
    if (process.env.NODE_ENV === `development`) {
      const ts = getCurrentTime();
      return fetch(`${Config.test_api}/base/v3/Auth/GetOpenAPITokenByUser?${qs.stringify({
        uxcode: Config.user,
        md5pwd: md5(Config.pwd),
        appid: Config.appId,
        ts: ts,
        md5ts: md5(Config.appSecret + ts)
      })}`)
        .then(function (response) {
          return response.json();
        })
        .catch(function (ex) {
          console.log('parsing failed', ex)
        });
    }
  }
}
