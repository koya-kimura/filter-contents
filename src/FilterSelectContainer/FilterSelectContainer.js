// 使用するGLSLフィルターのインデックス
export let shaderIndex = 0;
import "./FilterSelectContainer.css";

// // 利用するシェーダのインデックス
// import { shaderIndex } from "../App"

// GLSLソースファイルのパスリスト
import { fileList } from "../CaptureContainer/CameraCapture/fileList";

// 画像に関するパス
import LeftButton from "../image/LeftButton.svg";
import RightButton from "../image/RightButton.svg";
import FocusFilter from "../image/FocusFilter.svg";
import Preview from "../image/monochrome.png";

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
      <img src={LeftButton} onClick={backShader} className="btn"></img>
      {/* <button onClick={backShader}>←</button> */}

      <img src={FocusFilter} className="focus"></img>
      <img src={Preview} className="preview"></img>

      <img src={RightButton} onClick={nextShader} className="btn"></img>
      {/* <button onClick={nextShader}>→</button> */}
    </div>
  );
}