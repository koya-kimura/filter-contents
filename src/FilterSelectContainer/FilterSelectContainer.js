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
// import Normal from "../CaptureContainer/CameraCapture/assets/prev/normal.png";
// import Preview from "../CaptureContainer/CameraCapture/assets/prev/green.png";

export default function FilterSelectContainer({ shaderIndex, setShaderIndex }) {
  // 次のシェーダをフィルターとして適用する
  function nextShader() {
    // shaderIndex = (shaderIndex + 1) % fileList.length;
    // console.log(fileList[shaderIndex]["remarks"]);
    // console.log(fileList[shaderIndex]["prev"]);
    // console.log(Preview);
    // console.log(fileList[shaderIndex]["prev"] == Preview);

    // console.log(shaderIndex)
    setShaderIndex((shaderIndex + 1) % fileList.length);
    // console.log(shaderIndex)

    // changePreviewImage((shaderIndex + 1) % fileList.length);
  }

  // 前のシェーダをフィルターとして適用する
  function backShader() {
    // shaderIndex = (shaderIndex - 1 + fileList.length) % fileList.length;
    // console.log(fileList[shaderIndex]["remarks"]);

    // console.log(shaderIndex)
    setShaderIndex((shaderIndex - 1 + fileList.length) % fileList.length);
    // console.log(shaderIndex)

    // changePreviewImage((shaderIndex - 1 + fileList.length) % fileList.length);
  }

  // function changePreviewImage(si) {
  //   changeShaderIndex(si);
  //   console.log(shaderIndex)
  // };

  return (
    <div className="FilterSelectContainer">
      <img src={LeftButton} onClick={backShader} className="btn"></img>
      {/* <button onClick={backShader}>←</button> */}

      <img src={FocusFilter} className="focus"></img>
      {/* <img src={fileList[shaderIndex]["prev"]} className="preview"></img> */}
      <img src={fileList[shaderIndex]["prev"]} className="preview"></img>

      <img src={RightButton} onClick={nextShader} className="btn"></img>
      {/* <button onClick={nextShader}>→</button> */}
    </div>
  );
}