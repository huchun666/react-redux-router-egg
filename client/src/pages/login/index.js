import React, { Component } from 'react'
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  static propTypes = {
    login: PropTypes.func.isRequired
  }

  onChange = (e) => {
    this.setState ({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.login(this.state).then(res => {
      console.log(res)
    })
  }

  render() {
    const {username, password} = this.state;
    return (
      <div>
        <form onSubmit = {this.onSubmit}>
          <div className="username">
            username:
            <input type="text" name="username" value={ username } onChange={this.onChange}/>
          </div>
          <div className="password">
            password:
            <input type="password" name="password" value={ password } onChange={this.onChange}/>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, {login})(Login)