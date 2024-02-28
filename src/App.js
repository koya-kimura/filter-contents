import CameraCapture, { saveImage } from "./CameraCapture/CameraCapture"
// import "./style_template.css"; // デバッグ用のスタイリング
import "./style.css";

// シェーダに関するソースファイルのリスト
import { fileList } from "./CameraCapture/fileList";
// 使用するGLSLフィルターのインデックス
export let shaderIndex = 0;

// Appコンポーネントの定義
function App() {
  // 次のシェーダをフィルターとして適用する
  function nextShader() {
    shaderIndex = (shaderIndex + 1) % fileList.length;
    console.log(fileList[shaderIndex]["remarks"]);
  }

  // 前のシェーダをフィルターとして適用する
  function backShader() {
    shaderIndex = (shaderIndex - 1 + fileList.length) % fileList.length;
    console.log(fileList[shaderIndex]["remarks"]);
  }

  return (
    <div className="App">
      {/* ページのタイトル部分 */}
      <header>
        <h1>fLens v.0.3.0</h1>
      </header>

      <main>
        {/* カメラのキャプチャ */}
        <CameraCapture />

        {/* UI */}
        <div id="UI">
          <button onClick={backShader}>←</button>
          <button onClick={saveImage}>o</button>
          <button onClick={nextShader}>→</button>
        </div>
      </main>

    </div>
  );
}

// Appコンポーネントを他のファイルで利用できるようにエクスポート
export default App;