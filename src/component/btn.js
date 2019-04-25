import React, { Component } from "react";

export default class Btn extends Component {
  onClick = () => {
    this.props.toggle(); //父層傳過來的toggle
  };
  render() {
    return (
      <div className="btn" onClick={this.onClick}>
        {this.props.txt}
      </div>
    );
  }
}
