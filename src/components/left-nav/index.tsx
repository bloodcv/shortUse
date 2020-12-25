import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import * as Icon from "@ant-design/icons";

import "./index.less";
import logo from "../../assets/imgs/jlgllogo.png";
import menuList from "../../router/menuConfig";

const MenuItem = Menu.Item;

class LeftNav extends Component<any, any> {
  /**
   * 根据menu的数据数组生成对应的标签数组
   * 使用reduce + 递归调用
   */
  getMenuNodes = (menuList: any[]) => {
    return menuList.reduce((pre, item) => {
      pre.push(
        <MenuItem key={item.key}>
          <Link
            to={item.key}
          >
            {React.createElement((Icon as any)[item.icon])}
            <span>{item.title}</span>
          </Link>
        </MenuItem>
      );
      return pre;
    }, []);
  };

  menuNodes: any;

  /**
   * 在第一次render()之前执行一次
   * 为第一个render()准备数据(必须是同步的)
   */
  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }

  render() {
    // 得到当前访问的路由路径
    let path = this.props.location.pathname;

    if (path.indexOf("/index/") === 0) {
      path = "/index";
    }

    return (
      <div className="left-nav">
        <Link to="/dashbord" className="left-nav-header">
          <img src={logo} alt="logo" />
          {/* <h1>小程序发布系统</h1> */}
        </Link>
        <Menu
          selectedKeys={[path]}
          mode="inline"
          theme="dark"
        >
          {this.menuNodes}
        </Menu>
      </div>
    );
  }
}
export default withRouter(props => <LeftNav {...props}/>);
