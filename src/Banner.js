import React, { Component } from "react";
import Img from "./img/1200x380.png";
import "./style.css";
// import Btn from "./component/btn";

export default class Banner extends Component {
  state = {
    status: 2, //"2" 設定字串?
    btnCls: 1
  };
  buttontxt = ["收合", "展開"];
  classStatus = ["closed", "opening", "opened", "closing"];
  transition = true;
  openAtStart = false; //設定一開始是否為開(2)或合(0)
  // // const autoToggle = false; // [boolean|number] true | false | 3000
  // const button = {
  //   closeText: "收合", // [string]
  //   openText: "展開", // [string]
  //   class: "btn" // [string]
  // };
  // const classStatus = {
  //   closed: "closed", // [string]
  //   closing: "closing", // [string]
  //   opened: "opened", // [string]
  //   opening: "opening" // [string]
  // };
  // const statusList = ["closed", "opening", "opened", "closing"];
  // nextStatus = () => {
  //   this.status++;
  //   if (this.status > this.statusList.length - 1) {
  //     this.status = 0; //4>3 ->變成0
  //   }
  //   return this.status;
  // };

  open = () => {
    this.setState({
      status: 2,
      btnCls: 0
    });
  };
  close = () => {
    this.setState({
      status: 0,
      btnCls: 1
    });
  };
  toggle = () => {
    if (this.state.status === 2) {
      this.close();
    } else if (this.state.status === 0) {
      this.open();
    }
    console.log(this.state.status);
  };

  onClick = () => {
    this.toggle(); //GO
  };
  render() {
    const { status, btnCls } = this.state;
    let NowClass = this.classStatus[status];
    const transition = this.transition;
    console.log(NowClass);
    return (
      <div className={`${NowClass} banner ${transition ? "transition" : ""}`}>
        <a className="wrap" href="{#}">
          <img
            className="img"
            src={Img}
            title="輸入廣告促銷說明文字"
            alt="輸入廣告促銷說明文字"
          />
        </a>
        <div className="btn" onClick={this.onClick}>
          {this.buttontxt[btnCls]}
        </div>
      </div>
    );
  }
}
