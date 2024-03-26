// 使用するGLSLフィルターのインデックス
// export let shaderIndex = 0;
import "./FilterSelectContainer.css";

// 利用するシェーダのインデックス

// GLSLソースファイルのパスリスト
import { fileList } from "../CaptureContainer/CameraCapture/fileList";

// 画像に関するパス
import LeftButton from "../image/LeftButton.svg";
import RightButton from "../image/RightButton.svg";
import FocusFilter from "../image/FocusFilter.svg";

export default function FilterSelectContainer({ shaderIndex, setShaderIndex }) {
  // 次のシェーダをフィルターとして適用する
  function nextShader() {
    setShaderIndex((shaderIndex + 1) % fileList.length);
  }

  // 前のシェーダをフィルターとして適用する
  function backShader() {
    setShaderIndex((shaderIndex - 1 + fileList.length) % fileList.length);
  }

  return (
    <div className="FilterSelectContainer">
      <img src={LeftButton} onClick={backShader} className="btn"></img>

      <img src={FocusFilter} className="focus"></img>
      <img src={fileList[shaderIndex]["prev"]} className="preview"></img>
      {/* <img src={fileList[shaderIndex]["prev"]} className="preview" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}></img> */}

      <img src={RightButton} onClick={nextShader} className="btn"></img>
    </div>
  );
}