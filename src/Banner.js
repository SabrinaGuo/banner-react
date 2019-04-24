import React, { Component } from "react";
import Img from "./img/1200x380.png";
import "./style.css";
import Btn from "./component/btn";
import PropTypes from "prop-types";

export default class Banner extends Component {
  //確認傳入資料格式是否有誤

  render() {
    return (
      <div className="banner">
        <a className="wrap" href="{#}">
          <img
            className="img"
            src={Img}
            title="輸入廣告促銷說明文字"
            alt="輸入廣告促銷說明文字"
          />
        </a>
        <Btn />
      </div>
    );
  }
}
