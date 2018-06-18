import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import brand_img_src from '../../images/brand.jpg';
import './index.less';

class Nav extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      loginTip:"登陆",
      registerTip:"注册"
    }
  }

  render() {
    return (
      <nav className="app_bar">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img alt="vincent" className="brand" src={brand_img_src}/>
            </Link>

            <Link className="navbar-brand" to="/">
              <img alt="vincent" className="brand" src={brand_img_src}/>
            </Link>

            <Link className="navbar-brand" to="/">
              <img alt="vincent" className="brand" src={brand_img_src}/>
            </Link>

            <Link className="navbar-brand" to="/">
              <img alt="vincent" className="brand" src={brand_img_src}/>
            </Link>
          </div>
          <div className="login_register">
            <Link to='/login' className="navbar-link">{this.state.loginTip}</Link>
            <Link to='/register' className="navbar-link">{this.state.registerTip}</Link>
          </div>
      </nav>
    );
  }
}

export default Nav;
