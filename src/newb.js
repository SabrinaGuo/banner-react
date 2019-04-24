import React, { Component } from "react";
import bannerImg from "../../public/images/1200x380.png";
import Btn from "../components/newBtn";
import PropTypes from "prop-types";

export default class Banner extends Component {
  static propTypes = {
    openAtStart: PropTypes.bool,
    autoToggle: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    button: PropTypes.object,
    transition: PropTypes.bool,
    whentransition: PropTypes.func
  };

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

  state = {
    status: this.props.openAtStart ? 2 : 0
  };
  statusAry = ["closed", "opening", "opened", "closing"];
  timer = ""; //存interval計時器用
  timeout = ""; //存settimeout計時器用

  componentDidMount() {
    let autoToggle = this.props.autoToggle;
    if (typeof autoToggle === "number") {
      this.timeout = setTimeout(() => {
        this.toggle();
      }, autoToggle);
    } else if (autoToggle === true) {
      this.timeout = setTimeout(() => {
        this.toggle();
      }, 2000);
    }
  }

  componentWillUnMount() {
    clearTimeout(this.timeout);
  }

  intervalTime() {
    this.timer = setInterval(() => {
      this.props.whentransition();
    }, 100);
  }

  nextStatus() {
    let { status } = this.state;
    status++;
    if (status > 3) {
      status = 0;
    }
    return status;
  }

  open() {
    let status = "";
    if (this.props.transition) {
      this.intervalTime();
      status = this.nextStatus();
    } else {
      status = 2;
    }
    this.setState({
      status
    });
  }

  close() {
    let status = "";
    if (this.props.transition) {
      this.intervalTime();
      status = this.nextStatus();
    } else {
      status = 0;
    }
    this.setState({
      status
    });
  }

  onTransitionEnd = () => {
    let status = this.nextStatus();
    clearInterval(this.timer);
    this.setState({
      status
    });
  };

  toggle = () => {
    let { status } = this.state;
    if (status === 0) {
      this.open();
    } else if (status === 2) {
      this.close();
    }
  };

  render() {
    let { status } = this.state;
    let transition = this.props.transition ? "transition" : "";
    return (
      <div
        className={`banner ${this.statusAry[status]} ${transition}`}
        onTransitionEnd={this.onTransitionEnd}
      >
        <a className="wrap">
          <img src={bannerImg} title="輸入廣告文字" alt="輸入廣告文字" />
          <Btn
            {...this.state}
            txt={
              status === 0 || status === 4
                ? this.props.button.openText
                : this.props.button.closeText
            }
            toggle={this.toggle}
          />
        </a>
      </div>
    );
  }
}
