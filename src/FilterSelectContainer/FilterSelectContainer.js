// 使用するGLSLフィルターのインデックス
export let shaderIndex = 0;

// // 利用するシェーダのインデックス
// import { shaderIndex } from "../App"

// GLSLソースファイルのパスリスト
import { fileList } from "../CaptureContainer/CameraCapture/fileList";

// 画像に関するパス
import CaptureBottomLeft from "../image/CaptureBottomLeft.png";
import CaptureBottomRight from "../image/CaptureBottomRight.png";


export default function FilterSelectContainer() {
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
    <div className="FilterSelectContainer">

      <button onClick={backShader}>←</button>
      {/* <image > */}
      <button onClick={nextShader}>→</button>


    </div>
  );
}