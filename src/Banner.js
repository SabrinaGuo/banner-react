import React, { Component } from "react";
import Img from "./img/1200x380.png";
import Btn from "./component/btn";
import PropTypes from "prop-types";

export default class Banner extends Component {
  //預設傳入資料(若主頁沒有傳入則套用此預設值)
  static defaultProps = {
    openAtStart: true,
    autoToggle: true,
    button: {
      closeText: "收合",
      openText: "展開",
      class: "btn"
    },
    transition: true,
    whentransition: function() {
      console.log("whenTransition");
    }
  };

  //相關元素設定
  state = {
    //由主頁openAtStart先行判斷一開始的狀態，若無則抓上方defaultProps
    // status: this.props.openAtStart ? 2 : 0 //2開 0 關
    status: this.props.openAtStart ? 2 : 0
  };

  //設定想要變化的陣列
  statusArrey = ["closed", "opening", "opened", "closing"];
  //時間相關
  interVTime = ""; //存interval
  timeOut = ""; //存settimeout

  //設定autoToggle
  autoToggle() {
    let autoToggle = this.props.autoToggle;
    if (autoToggle === Number) {
      this.timeOut = setTimeout(function() {
        this.toggle();
      }, autoToggle * 1000);
    } else if (autoToggle === true) {
      this.timeOut = setTimeout(() => {
        this.toggle();
      }, 2 * 1000);
    }
  }

  //計時whentransition
  intervalTime() {
    this.interVTime = setInterval(() => {
      this.props.whentransition();
    }, 100);
    // this.interVTime = setInterval(function() {
    //   this.props.whentransition();
    // }, 100);
  }

  //按鈕所需功能
  open() {
    let status = "";
    if (this.props.transition) {
      this.intervalTime(); //whentransition start
      status = this.nextStatus();
    } else {
      status = 2; //若無transition 不啟動監聽事件 所以直接跳為ed
    }
    this.setState({
      status
    });

    // let status = "";
    // this.setState({
    //   status //2
    // });
  }

  close() {
    let status = "";
    console.log(status);
    if (this.props.transition) {
      this.intervalTime(); //whentransition start
      status = this.nextStatus(); //已由2-> 3 因監聽transitiony再跳轉至onTransitionEnd()
    } else {
      status = 0; //若無transition 不啟動監聽事件 所以直接跳為ed
    }
    this.setState({
      status
    });

    // let status = "";
    // this.setState({
    //   status = 0 //?
    // });
  }

  toggle() {
    let status = this.state.status;
    if (status === 0) {
      this.open();
    } else if (status === 2) {
      this.close();
    }
    // console.log(status);
  }

  nextStatus() {
    let status = this.state.status;
    // let { status } = this.state; //另一種寫法
    status++;
    if (status > 3) {
      status = 0;
    }
    return status;
  }
  onTransitionEnd = () => {
    let status = this.nextStatus(); //當擁有transition的時候由open/close()跳轉至此 原先為1/3 加為 2/4(0) ing->ed
    clearInterval(this.interVTime); //監聽完後關閉 whentransition
    this.setState({
      status
    });
  };

  render() {
    let status = this.state.status;
    let transtion = this.props.transition ? "transition" : "";
    console.log(this.state.status);
    console.log(this.props.openAtStart);
    return (
      <div
        className={`banner ${transtion} ${this.statusArrey[status]} `}
        onTransitionEnd={this.onTransitionEnd}
      >
        {/* onTransitionEnd 監聽 ， 寫法注意 與下方toggle的寫法為互相對照，兩種都可以使用*/}
        <a className="wrap" href="{#}">
          <img
            className="img"
            src={Img}
            title="輸入廣告促銷說明文字"
            alt="輸入廣告促銷說明文字"
          />
        </a>
        <Btn
          {...this.state}
          toggle={() => this.toggle()}
          txt={
            status === 0 || status === 4
              ? this.props.button.openText
              : this.props.button.closeText
          }
        />
      </div>
    );
  }

  //確認傳入資料格式是否有誤
  static propTypes = {
    openAtStart: PropTypes.bool,
    autoToggle: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    button: PropTypes.object,
    transition: PropTypes.bool,
    whentransition: PropTypes.func
  };
}
