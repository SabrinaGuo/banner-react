import React from "react";
import ReactDOM from "react-dom";
import RegionSelect from "./components/RegionSelect";
import ImgPreview from "./components/ImgPreview";
import FilterFruit from "./components/FilterFruit";
import Banner from "./components/Banner";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      {/* 水果及時搜尋 */}
      {/* <FilterFruit /> */}
      {/* 鄉鎮市區下拉選單 */}
      {/* <RegionSelect /> */}
      {/* 圖片上傳預覽 */}
      {/* <ImgPreview /> */}
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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
