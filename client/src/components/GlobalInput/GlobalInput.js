import React, { Component } from 'react'
import { PropTypes } from "prop-types";
import "./GlobalInput.scss";

class GlobalInput extends Component {
  render() {
    return (
      <div className="global_input">
        <input type="number" className="input_phone" maxLength="13" placeholder={this.props.placeholderText}/>
      </div>
    )
  }
}

GlobalInput.propTypes = {
    placeholderText: PropTypes.string.isRequired,
}

export default GlobalInput;
