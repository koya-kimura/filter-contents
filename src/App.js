import CaptureContainer from "./CaptureContainer/CaptureContainer"
import FilterSelectContainer from "./FilterSelectContainer/FilterSelectContainer"

// import "./style_debug.css"; // デバッグ用のスタイリング
import "./style.css";

// Appコンポーネントの定義
function App() {


  return (
    <div className="App">
      <CaptureContainer />
      {/* ページのタイトル部分 */}
      {/* <header> */}
      {/* <h1>fLens v.0.3.2</h1> */}
      {/* </header> */}

      {/* カメラのキャプチャ */}
      {/* <CameraCapture /> */}

      {/* UI */}
      <FilterSelectContainer />


    </div>
  );
}

// Appコンポーネントを他のファイルで利用できるようにエクスポート
export default App;