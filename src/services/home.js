import request from '../utils/request';

export async function getUserInfo() {
  return request('/ZX/v3/AuthGW/GetCurrUserInfo');
}
