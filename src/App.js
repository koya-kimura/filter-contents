import CaptureContainer from "./CaptureContainer/CaptureContainer"
import FilterSelectContainer from "./FilterSelectContainer/FilterSelectContainer"

import "./App.css";
import { useState, useEffect } from "react";

// Appコンポーネントの定義
function App() {
  // Shaderのインデックス番号 (選択中フィルタの番号)
  const [shaderIndex, setShaderIndex] = useState(0);

  // 利用マシンがスマートフォン機器か否か
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileKeywords = ['Android', 'iPhone', 'iPad', 'Windows Phone'];

    // ユーザーエージェント文字列にモバイルデバイスのキーワードが含まれているかをチェック
    const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));

    setIsMobile(isMobileDevice);

    if (isMobileDevice) {
      alert("PCで開いてね");
    }
  }, []);

  return (
    <div className="App" >
      {
        isMobile ? (
          /* スマートフォン機器での表示 */
          <>
          </>
        ) : (
          /* パソコンでの表示 */
          <>
            {/* アプリ上部 */}
            < CaptureContainer shaderIndex={shaderIndex} />
            {/* アプリ下部 */}
            <FilterSelectContainer shaderIndex={shaderIndex} setShaderIndex={setShaderIndex} />
          </>
        )
      }

    </div >
  );
}

// Appコンポーネントを他のファイルで利用できるようにエクスポート
export default App;