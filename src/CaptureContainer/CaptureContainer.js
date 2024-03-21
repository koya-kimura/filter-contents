// import CameraCapture from "./CameraCapture/CameraCapture"
import CameraCapture, { saveImage } from "./CameraCapture/CameraCapture";
import "./CaptureContainer.css";

// シェーダに関するソースファイルのリスト
// import { fileList } from "./CameraCapture/fileList";

// 画像に関するパス
import flensTypo from "../image/fLens.svg";
import flensLogo from "../image/Logo.svg";
import CaptureFrame from "../image/CaptureFrame.svg";
import CaptureBottomLeft from "../image/CaptureBottomLeft.svg";
import CaptureBottomRight from "../image/CaptureBottomRight.svg";
import DownLoadButton from "../image/DownLoadButton2.svg";
import mediaArtTypo from "../image/MediaArtProject.svg";

// 画面上全体の領域
export default function CaptureContainer() {
  // // 次のシェーダをフィルターとして適用する
  // function nextShader() {
  //   shaderIndex = (shaderIndex + 1) % fileList.length;
  //   console.log(fileList[shaderIndex]["remarks"]);
  // }

  // // 前のシェーダをフィルターとして適用する
  // function backShader() {
  //   shaderIndex = (shaderIndex - 1 + fileList.length) % fileList.length;
  //   console.log(fileList[shaderIndex]["remarks"]);
  // }

  return (
    <div className="CaptureContainer">
      {/* 画面上左側: fLensのタイポとロゴ */}
      <div className="CaptureContainerLeft">
        <img src={flensTypo}></img>
        <br></br>
        <img src={flensLogo}></img>
      </div>

      {/* 画面上中央: カメラのキャプチャ */}
      <div className="CaptureContainerCenter">
        <div className="CaptureContainerCenter-top">
          <CameraCapture />
          {/* 画像の大きさはカメラサイズの決定が決まり次第要調整 */}
          <img src={CaptureFrame} width={100 + "%"} height={100 + "%"}></img>
          {/* <img src={CaptureFrame}></img> */}
        </div>
        <div className="CaptureContainerCenter-bottom">
          <img src={CaptureBottomLeft} className="CaptureContainerCenter-bottom-sides"></img>
          <img src={DownLoadButton} onClick={saveImage} className="CaptureContainerCenter-bottom-center"></img>
          <img src={CaptureBottomRight} className="CaptureContainerCenter-bottom-sides"></img>
          {/* <button onClick={saveImage}>o</button> */}

        </div>
      </div>

      {/* 画面上右側: Media Art Project */}
      <div className="CaptureContainerRight">
        <img src={mediaArtTypo}></img>
      </div>

    </div>
  );
}