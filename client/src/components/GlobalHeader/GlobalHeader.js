import React, { Component } from 'react'
import PropTypes from "prop-types";
import "./GlobalHeader.scss";

class GlobalHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
  render() {
    return (
      <div className = 'header'>
        <div className = 'header_box'>
            {this.props.isBack && <img src="image/icon_back.png" alt="" className = 'back_icon'/>}
            <span className = 'header_name'>{this.props.name}</span>
        </div>
      </div>
    )
  }
}

GlobalHeader.propTypes = {
    name: PropTypes.string.isRequired,
    isBack: PropTypes.bool
}

export default GlobalHeader