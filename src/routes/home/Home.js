/**
 * Created by Yu Tian Xiong on 2018/04/25.
 * fileName:dva入口文件
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './Home.less';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import Token from '../../utils/token'

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };
  componentDidMount() {
    this.validateToken();
  }
  //验证用户信息初始化数据
  validateToken = () => {
    if(sessionStorage.getItem('token')){
      this.getUserInfo();
    }else{
      Token.getUserToken().then(res=>{
        sessionStorage.setItem('token',res.Data.Token);
        this.getUserInfo();
      })
    }
  };

  //获取当前用户信息
  getUserInfo = () => {
    this.props.dispatch({type: 'home/GetUserInfo'})
      .then(() => {
        const {userInfoData} = this.props.home;
        this.getMenu(userInfoData.ZXGroups[0].GID)
      });
  };
  //获取左侧菜单
  getMenu = (gID) => {
    this.props.dispatch({
      type:'home/GetMenu',
      payload:{gID:gID}
    });
  };

  //侧边栏折叠
  toggle = () => this.setState({collapsed: !this.state.collapsed});
  render() {
    const {collapsed} = this.state;
    const {userInfoData} = this.props.home;
    return (
      <Layout className={styles.layoutContent}>
        <Header className={styles.header}>
          <span className={styles.logo}><i className={styles.iconLogo}/>搭建内容模板</span>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} className={styles.toggle}/>
          {(userInfoData && userInfoData.length!==0) && <Menu
            onClick={this.handleHorizontalMenuClick}
            mode="horizontal"
            theme="dark"
            className={styles.menuHorizontal}>
            <SubMenu key={1} title={
              <div className={styles.userInfo}>
                <i className={styles.userPic} style={{backgroundImage: `url(${userInfoData.Pic})`}}/>
                {userInfoData.Name}
                <Icon type="caret-down"/>
              </div>}
            >
              {userInfoData.ZXGroups.map((item)=><Menu.Item key={item.GID}>{item.Name}</Menu.Item>)}
              <Menu.Divider/>
              <Menu.Item key="back"><Icon type="logout"/>返回</Menu.Item>
            </SubMenu>
          </Menu>}
        </Header>
        <Layout>
          <Sider width={200} collapsed={collapsed}>
            <div className="logo"/>
            <Menu defaultSelectedKeys={['1']} mode="inline" className={styles.layoutMenu}>
              <Menu.Item key="1">
                <Icon type="pie-chart"/>
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop"/>
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user"/><span>User</span></span>}
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team"/><span>Team</span></span>}
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file"/>
                <span>File</span>
              </Menu.Item>
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

export default connect(({home}) => ({home}))(Home);
