/**
 * Created by Yu Tian Xiong on 2018/05/28.
 * fileName:首页请求
 */
import request from '../utils/request';
import {stringify} from 'qs';


//获取用户信息
export async function getUserInfo() {
  return request('/ZX/v3/AuthGW/GetCurrUserInfo');
}
//获取首页左侧菜单
export async function getMenu(params) {
  return request(`/ZX/v3/AuthGW/GetCurrUserMenuList?${stringify(params)}`);
}
