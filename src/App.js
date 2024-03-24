import CaptureContainer from "./CaptureContainer/CaptureContainer"
import FilterSelectContainer from "./FilterSelectContainer/FilterSelectContainer"

// import "./style_debug.css"; // デバッグ用のスタイリング
import "./App.css";
import { useState, useEffect } from "react";

// Appコンポーネントの定義
function App() {
  const [shaderIndex, setShaderIndex] = useState(0);

  // function changeShaderIndex(i) {
  //   setShaderIndex(i);
  // }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileKeywords = ['Android', 'iPhone', 'iPad', 'Windows Phone'];

    // ユーザーエージェント文字列にモバイルデバイスのキーワードが含まれているかをチェック
    const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));

    setIsMobile(isMobileDevice);

    console.log(isMobileDevice);

    if (isMobileDevice) {
      alert("PCで開いてね");
    }
  }, []);

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