import React, { Component } from 'react'
import './GlobalButton.scss'
import { PropTypes } from "prop-types";

class GlobalButton extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props)
  // }
  
  render() {
    return (
      <div className="global_button_box">
        <button className="global_button" onClick={this.props.handleClick}>{this.props.btnText}</button>
      </div>
    )
  }
}

GlobalButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default GlobalButton