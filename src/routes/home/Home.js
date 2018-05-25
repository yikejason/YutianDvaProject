/**
 * Created by Yu Tian Xiong on 2018/04/25.
 * fileName:dva入口文件
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './Home.less';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {routerRedux} from 'dva/router';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class Home extends Component {
  componentDidMount() {
    this.getData();
    console.log(this.props)
  }
  //点击路由跳转
  handleFrist = () => this.props.dispatch(routerRedux.push('/frist'));

  getData = () => {
    this.props.dispatch({
      type:'home/fetch',
      payload:{}
    })
  };

  render() {
    return (
      <Layout className={styles.layoutContent}>
        <Header className="header">
          <div className="logo"/>
        </Header>
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              className={styles.layoutMenu}
            >
              <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className={styles.layoutContentTwo}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className={styles.layoutTwoText}>
              Content
            </Content>
            <Footer className={styles.layoutContentTwoFooter}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

Home.propTypes = {};

export default connect(({ home }) => ({ home }))(Home);
