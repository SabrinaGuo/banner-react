import React from "react";
import ReactDOM from "react-dom";
import Banner from "./Banner";
import "./styles.scss";
// ReactDOM.render(<App />, document.getElementById('root'))

function Banner() {
  return (
    <Banner
      openAtStart={false}
      autoToggle={true} // number || boolean (幾秒開合 || 是否自動開關)
      button={{
        closeText: "收合",
        openText: "展開",
        class: "btn"
      }}
      transition={true}
      whentransition={function() {
        console.log("whenTransition");
      }}
    />
  );
}

ReactDOM.render(<Banner />, document.getElementById("root"));
