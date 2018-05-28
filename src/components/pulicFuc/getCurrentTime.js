/**
 * Created by Yu Tian Xiong on 2018/05/28.
 * fileName:获取当前时间戳
 */
//获取时间戳
export const getCurrentTime = () => {
  return parseInt(new Date().getTime() / 1000, 10);
};

