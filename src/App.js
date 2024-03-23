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
      {/* アプリ上部 */}
      <CaptureContainer shaderIndex={shaderIndex} />

      {/* アプリ下部 */}
      <FilterSelectContainer shaderIndex={shaderIndex} setShaderIndex={setShaderIndex} />
    </div>
  );
}

// Appコンポーネントを他のファイルで利用できるようにエクスポート
export default App;