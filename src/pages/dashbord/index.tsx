import React, { Component } from 'react';

import logo from "../../assets/imgs/jlgllogo.png";
import './index.less'

interface Iprops{
  history:any
}

class Dashbord extends Component<Iprops,any> {
  render() {
    return (
      <div className="dashabord_wrap">
        <div className="top_logo">
          <img src={logo} alt="叽里呱啦"/>
        </div>
        <h2>欢迎使用</h2>
        <h2>小程序发布系统</h2>
      </div>
    );
  }
}

export default Dashbord;