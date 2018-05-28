/**
 * Created by Yu Tian Xiong on 2018/05/28.
 * fileName:获取地址栏上的token
 */
//根据名称获取查询字段值
export function searchParamName(attr, search) {
  let match = new RegExp(`[?&]${attr}=([^&]*)`).exec(search || window.location.href);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

