/**
 * Created by Yu Tian Xiong on 2018/05/24.
 * fileName:dva-cli  webpack 配置  (dva基于roadhog)
 */
export default {
  entry:'src/index.js',//入口文件
  extraBabelPlugins: [
    'transform-decorators-legacy',// npm i babel-plugin-transform-decorators-legacy 确保能使用ES7的装饰器
    ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}],//antd按需加载  style为true加载less
  ],
}
