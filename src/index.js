import React from "react";
import ReactDOM from "react-dom";
import Banner from "./Banner";
import "./style.css";
// ReactDOM.render(<App />, document.getElementById('root'))

function BannerReact() {
  return (
    <Banner
      openAtStart={true}
      autoToggle={true} // number || boolean (幾秒開合 || 是否自動開關)
      button={{
        closeText: "收合",
        openText: "展開",
        class: "btn"
      }}
      transition={false}
      whentransition={function() {
        console.log("whenTransition");
      }}
    />
  );
}

ReactDOM.render(<BannerReact />, document.getElementById("root"));
