import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/brand.jpg'
import './index.less';

class Login extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="login_container">
      <form>
        <Link className="logo" to='/'>
          <img alt="vincent" src={ logo }/>
        </Link>
        <div className="email">
          <input type="email"   placeholder="邮箱"/>
        </div>
        <div className="password">
          <input type="password" placeholder="密码"/>
        </div>
        <div className="forget_password">
          <span>忘记密码？</span>
        </div>
        <div className="login_btn">
          <button>登陆</button>
        </div>
        <Link className="register_acount" to='/register'>
          <span>没有账号？注册</span>
        </Link>
      </form>
      </div>

    );
  }
}

export default Login
