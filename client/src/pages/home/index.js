import React, { Component } from 'react'
import { connect } from "react-redux";
import './index.scss';
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import GlobalHeader from "../../components/GlobalHeader/GlobalHeader";
import GlobalInput from "../../components/GlobalInput/GlobalInput";
import { getToken } from "../../actions/authActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToLogin = this.goToLogin.bind(this);
  }

  goToLogin() {
    this.props.getToken({
      phone: 2222
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <GlobalHeader name="注册/登录"></GlobalHeader>
        <div>{this.props.token.token}</div>
        <h1 className = 'login_title'>请输入手机号</h1>
        <div className="phone_import">
          <GlobalInput placeholderText="请输入手机号"></GlobalInput>
        </div>
        <div className="get_code">
          <GlobalButton btnText="获取验证码" handleClick={this.goToLogin}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    token: state.token
  }
}

export default connect(mapStateToProps, {getToken})(Home)