import React, { Component } from 'react';
import './index.less';

class Header extends Component {
  state = {
    city: '',
    weather: '',
    currentTime: '',
  };

  render() {
    return (
      <header>
        <div className='header-top'>
          <span>欢迎使用</span>
        </div>
      </header>
    );
  }
}

export default Header;
