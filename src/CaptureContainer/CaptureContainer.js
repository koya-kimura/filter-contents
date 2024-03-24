import CameraCapture, { saveImage } from "./CameraCapture/CameraCapture";
import "./CaptureContainer.css";

// 画像に関するパス
import flensLogo from "../image/Logo.svg";
import CaptureFrame from "../image/CaptureFrame.png";
import CaptureBottomLeft from "../image/CaptureBottomLeft.svg";
import CaptureBottomRight from "../image/CaptureBottomRight.svg";
import DownLoadButton from "../image/DownLoadButton2.svg";
import mediaArtTypo from "../image/MediaArtProject.svg";

// 画面上全体の領域
export default function CaptureContainer({ shaderIndex }) {
  return (
    <div className="CaptureContainer">
      {/* 画面上の左側: fLensのタイポとロゴ */}
      <div className="CaptureContainerLeft">
        <img src={flensLogo}></img>
      </div>

      {/* 画面上の中央: カメラのキャプチャ */}
      <div className="CaptureContainerCenter">
        {/* キャプチャとフレーム */}
        <div className="CaptureContainerCenter-top">

          {/* キャプチャのフレーム */}
          <img src={CaptureFrame}></img>

          {/* キャプチャ */}
          <CameraCapture shaderIndex={shaderIndex} />
        </div>

        {/* キャプチャ下部の装飾とダウンロードボタン */}
        <div className="CaptureContainerCenter-bottom">
          <img src={CaptureBottomLeft} className="CaptureContainerCenter-bottom-left"></img>
          <img src={DownLoadButton} onClick={saveImage} className="CaptureContainerCenter-bottom-center"></img>
          <img src={CaptureBottomRight} className="CaptureContainerCenter-bottom-right"></img>
        </div>
      </div>

      {/* 画面上の右側: Media Art Project */}
      <div className="CaptureContainerRight">
        <img src={mediaArtTypo}></img>
      </div>

    </div>
  );
}