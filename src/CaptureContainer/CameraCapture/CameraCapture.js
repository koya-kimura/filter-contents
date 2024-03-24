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
    let filterShaders = []; // シェーダオブジェクト
    let capture;            // カメラのキャプチャ

    // ページに対するキャンバスの最大サイズ率
    // const canvasWidthScale = 0.8;
    // const canvasWidthScale = 0.75;
    // const canvasWidthScale = 0.55;
    // const canvasWidthScale = 0.5375;
    const canvasWidthScale = 0.50;
    // const canvasWidthScale = 0.49 * 0.95;

    // キャンバスの横幅に対する高さの比率
    // const heightRate = 2 / 3;

    // 全フィルタファイルを読み込んでフィルタ(Shaderオブジェクト)を生成
    p.preload = () => {
      fileList.forEach(fp => {
        filterShaders.push(p.loadShader(fp.vert, fp.frag));
      });

      // filterShaders.push(p.loadShader(fileList[fileList.length - 1].vert, fileList[fileList.length - 1].frag,))

    };

    p.setup = () => {
      // saveImage()関数を使うためにpをグローバルへ引き上げる（荒ワザすぎるので修正の余地があるかも）
      P = p;

      // メインキャンバスの作成
      p.createCanvas(p.windowWidth * canvasWidthScale, p.windowHeight * canvasWidthScale, p.WEBGL);
      // capture = p.createCapture(p.VIDEO, { flipped: true });
      capture = p.createCapture(p.VIDEO, { flipped: true }, calculateLayout);
      // capture = p.createCapture(p.VIDEO, calculateLayout);

      capture.hide();

      // カメラの解像度を考慮したキャンバスサイズの変更
      // calculateLayout();
    };

    p.draw = () => {
      // 選択中のフィルタをShaderに適用する
      p.shader(filterShaders[shaderIndex]);

      // Shaderへ情報を渡す
      filterShaders[shaderIndex].setUniform("u_Resolution", [p.width, p.height]); // キャンバスの解像度
      filterShaders[shaderIndex].setUniform("u_tex", capture);                    // Webカメラからのキャプチャ画像

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

      console.log(p.windowWidth, p.windowHeight)
    };

    p.windowResized = () => {
      // p.resizeCanvas(p.windowWidth * canvasWidthScale, p.windowHeight * canvasWidthScale, p.WEBGL);
      // p.resizeCanvas(p.windowWidth * canvasWidthScale, p.windowHeight * canvasWidthScale, p.WEBGL);
      calculateLayout();
    }

    function calculateLayout() {
      let newWidth = p.windowWidth * canvasWidthScale;
      let newHeight = p.windowHeight * canvasWidthScale;
      let scale = p.min(newWidth / capture.width, newHeight / capture.height);
      p.resizeCanvas(capture.width * scale, capture.height * scale, p.WEBGL);
      console.log(p.width);
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
