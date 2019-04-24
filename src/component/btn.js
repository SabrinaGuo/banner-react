import React, { Component } from "react";

export default class Btn extends Component {
  toggle() {}

  render() {
    // console.log(this.props); //button object
    console.log(this.props.openAtStart);
    return (
      <div onClick={() => this.toggle()} className={this.props.button.class}>
        {
          this.props.button.closeText
          /* {openAtStart === true
        ? this.props.button.closeText
        : this.props.button.closeText} */
        }
      </div>
    );
  }
}
