import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from 'antd';

// import Header from '../../components/header';
import LeftNav from '../../components/left-nav';


import Dashbord from '../dashbord';
import Publish from '../publish';
import Record from '../record';

const { Footer, Sider, Content } = Layout;

class Home extends Component<any> {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: Boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Layout style={{ height: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          {/* <Header></Header> */}
          <Content style={{ margin: 20, backgroundColor: '#fff' }}>
            <Switch>
              <Route path='/dashbord' component={Dashbord}></Route>
              <Route path='/publish' component={Publish}></Route>
              <Route path='/record' component={Record}></Route>
              <Redirect to='/index'></Redirect>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#aaa' }}>Jiliguala-小程序发布系统</Footer>
        </Layout>
        {/* <Button type='primary' onClick={()=>this.props.history.push('/login')}>跳转到登录页</Button> */}
      </Layout>
    );
  }
}

export default Home;