import React, { Component } from "react";
import p5 from 'p5';

// GLSLソースファイルのパスリスト
import { fileList } from "./fileList";

// 利用するシェーダのインデックス
import { shaderIndex } from "../../../src/App"

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
    // const scl = 0.8;
    // const scl = 0.75;
    const scl = 0.5;

    p.preload = () => {
      fileList.forEach(fp => {
        filterShaders.push(p.loadShader(fp.vert, fp.frag));
      });
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth * scl, p.windowHeight * scl, p.WEBGL);
    }

    p.setup = () => {
      // saveImage()関数を使うためにpをグローバルへ引き上げる
      P = p;

      // メインキャンバスの作成
      p.createCanvas(p.windowWidth * scl, p.windowHeight * scl, p.WEBGL);

      // 仮想キャンバスの作成
      // pg = p5.createGraphics(p5.width, p5.height);

      // Webカメラのキャプチャ開始
      capture = p.createCapture(p.VIDEO);
      // capture = p.createCapture(p.VIDEO, { flipped: true });
      // console.log(p.createCapture);
      // capture = p.createCapture(p.VIDEO, true);
      capture.hide();
    };

    p.draw = () => {
      p.shader(filterShaders[shaderIndex]);

      filterShaders[shaderIndex].setUniform("u_time", p.frameCount / 100);
      filterShaders[shaderIndex].setUniform("u_Resolution", [p.width, p.height]);

      filterShaders[shaderIndex].setUniform("u_tex", capture);

      // filterShaders.setUniform('u_color0', normalizeColors[0]);
      // filterShaders.setUniform('u_color1', normalizeColors[1]);
      // filterShaders.setUniform('u_color2', normalizeColors[2]);
      // filterShaders.setUniform('u_color3', normalizeColors[3]);
      // filterShaders.setUniform('u_color4', normalizeColors[4]);

      p.rect(0, 0, p.width, p.height);

      // w = p.windowWidth * scl / p.windowWidth * 100;
      // h = p.windowHeight * scl;
      // console.log(w + ", " + P.width)
    };
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
