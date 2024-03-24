import React, { useEffect, useRef } from "react";
import p5 from 'p5';

// フィルタに関するファイル（GLSLソースファイルとプレビュー画像）のパスリスト
import { fileList } from "./fileList";

// savaImage関数を使うための変数（少々強引な実装）
let P;

// p5.jsのキャンバスを描画するコンポーネント
const CameraCapture = ({ shaderIndex }) => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = new p5(sketchHandler, sketchRef.current);

    return () => {
      sketch.remove();
    };
  }, [shaderIndex]);

  const sketchHandler = p => {
    // let filterShaders = []; // シェーダオブジェクト
    let filterShader; // シェーダオブジェクト
    let capture;            // カメラのキャプチャ

    // ページに対するキャンバスの最大サイズ率
    const canvasScale = 0.90;
    // 画面に対するフレームのサイズ比率(CaptureContainer.css を参照)
    const CaptureFrameWidth = 0.5555555556 * canvasScale;
    const CaptureFrameHeight = 0.58875 * canvasScale;

    // 選択中のフィルタを実装するShaderファイルのみ読み込む
    p.preload = () => {
      // 全フィルタファイルを読み込んでフィルタ(Shaderオブジェクト)を生成
      // fileList.forEach(fp => {
      //   filterShaders.push(p.loadShader(fp.vert, fp.frag));
      // });
      filterShader = p.loadShader(fileList[shaderIndex].vert, fileList[shaderIndex].frag)
    };

    p.setup = () => {
      // saveImage()関数を使うためにpをグローバルへ引き上げる（荒ワザすぎるので修正の余地があるかも）
      P = p;

      // メインキャンバスの作成
      // p5 の windowWidth と windowHeight を使うのは非推奨(ページのサイズを取得するタイミングが遅い)
      // p.createCanvas(p.windowWidth * canvasWidthScale, p.windowHeight * canvasWidthScale, p.WEBGL);
      // p.createCanvas(CaptureFrameWidth * p.windowWidth, CaptureFrameHeight * p.windowHeight, p.WEBGL);
      p.createCanvas(CaptureFrameWidth * window.innerWidth, CaptureFrameHeight * window.innerHeight, p.WEBGL);
      // console.log(CaptureFrameWidth * p.windowWidth, CaptureFrameHeight * p.windowHeight);

      // capture = p.createCapture(p.VIDEO, { flipped: true });
      capture = p.createCapture(p.VIDEO, { flipped: true }, calculateLayout);
      // capture = p.createCapture(p.VIDEO, calculateLayout);

      capture.hide();

      p.pixelDensity(1);
    };

    p.draw = () => {
      // 選択中のフィルタをShaderに適用する
      // p.shader(filterShaders[shaderIndex]);
      p.shader(filterShader);

      // Shaderへ情報を渡す
      // Webカメラからのキャプチャ画像
      // filterShaders[shaderIndex].setUniform("u_tex", capture);
      filterShader.setUniform("u_tex", capture);

      // キャンバスの解像度
      // filterShaders[shaderIndex].setUniform("u_Resolution", [p.width, p.height]);
      // filterShader.setUniform("u_Resolution", [capture.width, capture.height]);
      filterShader.setUniform("u_Resolution", [p.width, p.height]); // キャンバスの解像度

      // if (P.frameCount % 3 == 0) {
      // キャプチャ画像のクロップ処理（取り急ぎ，カメラの比率は縦より横が大きいことを想定）
      // let cloppedHeight = capture.width * p.height / p.width;
      // let cloppedY = (capture.height - cloppedHeight) / 2;
      // let c = capture.get(0, cloppedY, capture.width, cloppedHeight);
      // filterShaders[shaderIndex].setUniform("u_tex", c);                    // Webカメラからのキャプチャ画像
      //      filterShaders[shaderIndex].setUniform("u_tex", capture.get(0, cloppedY, capture.width, cloppedHeight));                    // Webカメラからのキャプチャ画像

      // p.rect(0, 0, p.width, p.height);

      // }

      // filterShaders[shaderIndex].setUniform("u_time", p.frameCount / 100);

      // キャプチャ画像にフィルタ加工をかけたものを描画
      p.rect(0, 0, p.width, p.height);
    };

    p.windowResized = () => {
      calculateLayout();
    }

    function calculateLayout() {
      // 高さを基準に調整
      // コメントアウトは非推奨コード
      // let newWidth = p.windowWidth * canvasWidthScale;
      // let newHeight = p.windowHeight * canvasWidthScale;
      // let scale = p.min(newWidth / capture.width, newHeight / capture.height);
      // p.resizeCanvas(capture.width * scale, capture.height * scale, p.WEBGL);

      let newHeight = CaptureFrameHeight * window.innerHeight;
      let newHeightScale = newHeight / capture.height;
      let newWidth = capture.width * newHeightScale;

      // 横幅がはみ出た場合はさらに横幅を基準に調整
      // コメントアウトは非推奨コード
      // if (newWidth > CaptureFrameWidth * p.windowWidth) {
      //   console.log(newWidth, CaptureFrameWidth * p.windowWidth)
      //   newWidth = CaptureFrameWidth * p.windowWidth;
      //   let newWidthScale = newWidth / capture.width;
      //   newHeight = capture.height * newWidthScale;
      // }

      if (newWidth > CaptureFrameWidth * window.innerWidth) {
        newWidth = CaptureFrameWidth * window.innerWidth;
        let newWidthScale = newWidth / capture.width;
        newHeight = capture.height * newWidthScale;
      }

      p.resizeCanvas(newWidth, newHeight, p.WEBGL);

    }
  };

  return (
    <div className="CameraCapture" ref={sketchRef}></div>
  );
};

export default CameraCapture;

// 画像の保存
export function saveImage() {
  P.saveCanvas();
}
