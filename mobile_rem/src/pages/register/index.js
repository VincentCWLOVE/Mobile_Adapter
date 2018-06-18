import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/brand.jpg';
import './index.less';
class Register extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="register_container">
      <form>

        <Link className="logo" to='/'>
          <img alt="vincent" src={ logo }/>
        </Link>

        <div className="email">
          <input type="email" placeholder="邮箱"/>
        </div>
        <div className="password">
          <input type="password" placeholder="设置密码"/>
        </div>
        <div className="password">
          <input type="password" placeholder="确认密码"/>
        </div>
        <div className="login_btn">
          <button>注册</button>
        </div>
        <Link className="register_acount" to="/login">
          <span>已有账号？登陆</span>
        </Link>
      </form>
      </div>
    );
  }
}

export default Register
