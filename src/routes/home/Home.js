/**
 * Created by Yu Tian Xiong on 2018/04/25.
 * fileName:dva入口文件
 */
import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './Home.less';
import
import {Button} from 'antd';

class Home extends Component{
  render(){
    return(
      <div className={styles.normal}>
        <h1 className={styles.title}>第一次</h1>
        <Button type="danger">第一次</Button>
        <div className={styles.welcome}/>
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    )
  }
}

Home.propTypes = {
};

export default connect()(Home);
