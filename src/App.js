import CaptureContainer from "./CaptureContainer/CaptureContainer"
import FilterSelectContainer from "./FilterSelectContainer/FilterSelectContainer"

// import "./style_debug.css"; // デバッグ用のスタイリング
import "./App.css";
import { useState } from "react";

// Appコンポーネントの定義
function App() {
  const [shaderIndex, setShaderIndex] = useState(0);

  // function changeShaderIndex(i) {
  //   setShaderIndex(i);
  // }

  return (
    <div className="App" >
      <CaptureContainer shaderIndex={shaderIndex} />
      {/* ページのタイトル部分 */}
      {/* <header> */}
      {/* <h1>fLens v.0.3.2</h1> */}
      {/* </header> */}

      {/* カメラのキャプチャ */}
      {/* <CameraCapture /> */}

      {/* UI */}
      <FilterSelectContainer shaderIndex={shaderIndex} setShaderIndex={setShaderIndex} />

    </div>
  );
}

// Appコンポーネントを他のファイルで利用できるようにエクスポート
export default App;