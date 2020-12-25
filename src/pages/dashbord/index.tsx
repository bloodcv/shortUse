import React, { Component } from 'react';
import {Button} from 'antd';

interface Iprops{
  history:any
}

class Dashbord extends Component<Iprops,any> {
  render() {
    return (
      <div>
        <h1>我是首页</h1>
        <Button type='primary' onClick={()=>this.props.history.push('/home')}>跳转到主页</Button>
      </div>
    );
  }
}

export default Dashbord;