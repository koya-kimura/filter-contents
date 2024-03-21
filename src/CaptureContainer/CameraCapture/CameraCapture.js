import React, { Component } from "react";
import p5 from 'p5';

// GLSLソースファイルのパスリスト
import { fileList } from "./fileList";

// 利用するシェーダのインデックス
import { shaderIndex } from "../../FilterSelectContainer/FilterSelectContainer"

let P;
//let w, h;

export default class CameraCapture extends Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef();
  }


  componentDidMount() {
    this.sketch = new p5(this.sketchHandler, this.sketchRef.current);
  }

  componentWillUnmount() {
    this.sketch.remove();
  }

  sketchHandler = p => {
    let filterShaders = []; // シェーダオブジェクト
    let capture;        // カメラのキャプチャ

    // ページに対するキャンバスの最大サイズ率
    // const canvasScaleMax = 0.8;
    // const canvasScaleMax = 0.75;
    const canvasScaleMax = 0.5;

    p.preload = () => {
      // 全フィルタファイルを読み込んでフィルタ(Shaderオブジェクト)を生成
      fileList.forEach(fp => {
        filterShaders.push(p.loadShader(fp.vert, fp.frag));
      });
    };

    p.setup = () => {
      // saveImage()関数を使うためにpをグローバルへ引き上げる（荒ワザすぎるので修正の余地があるかも）
      P = p;

      // メインキャンバスの作成
      p.createCanvas(p.windowWidth * canvasScaleMax, p.windowHeight * canvasScaleMax, p.WEBGL);
      // p.createCanvas(p.windowWidth * canvasScaleMax, p.windowHeight * canvasScaleMax);
      // p.createCanvas(p.windowWidth * scale, p.windowHeight * scale, p.WEBGL);

      // 仮想キャンバスの作成
      // pg = p5.createGraphics(p5.width, p5.height);

      // Webカメラのキャプチャ開始
      capture = p.createCapture(p.VIDEO, calculateLayout);
      // capture = p.createCapture(p.VIDEO, { flipped: true });
      // console.log(p.createCapture);
      // capture = p.createCapture(p.VIDEO, true);

      capture.hide();

      // カメラの解像度を考慮したキャンバスサイズの変更
      // calculateLayout();
    };

    p.draw = () => {
      p.shader(filterShaders[shaderIndex]);

      filterShaders[shaderIndex].setUniform("u_time", p.frameCount / 100);
      filterShaders[shaderIndex].setUniform("u_Resolution", [p.width, p.height]);
      // filterShaders[shaderIndex].setUniform("u_Resolution", [capture.width * scale, capture.height * scale]);

      filterShaders[shaderIndex].setUniform("u_tex", capture);

      // filterShaders.setUniform('u_color0', normalizeColors[0]);
      // filterShaders.setUniform('u_color1', normalizeColors[1]);
      // filterShaders.setUniform('u_color2', normalizeColors[2]);
      // filterShaders.setUniform('u_color3', normalizeColors[3]);
      // filterShaders.setUniform('u_color4', normalizeColors[4]);

      // キャプチャした画像にShaderでフィルタかけたものを描画
      p.rect(0, 0, p.width, p.height);
    };

    p.windowResized = () => {
      // キャンバスサイズを考慮したカメラの比率計算
      calculateLayout();
    }

    // キャンバスサイズを考慮したカメラの比率計算
    function calculateLayout() {
      // リサイズされたキャンバスサイズの計算
      let newWidth = p.windowWidth * canvasScaleMax;
      let newHeight = p.windowHeight * canvasScaleMax;

      // キャンバスとカメラ映像のアスペクト比に基づくスケーリング比を計算
      let scale = p.min(newWidth / capture.width, newHeight / capture.height);

      console.log(capture.width, capture.height);
      p.resizeCanvas(capture.width * scale, capture.height * scale, p.WEBGL);
    }
  };

  render() {
    return (
      <div className="CameraCapture" ref={this.sketchRef}></div>
    );
  }
}



// 画像の保存
export function saveImage() {
  P.saveCanvas();
}
