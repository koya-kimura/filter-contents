import React, { useEffect, useRef } from "react";
import p5 from 'p5';
import { fileList } from "./fileList";

let P;

const CameraCapture = ({ shaderIndex }) => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = new p5(sketchHandler, sketchRef.current);

    return () => {
      sketch.remove();
    };
  }, [shaderIndex]);

  const sketchHandler = p => {
    let filterShaders = [];
    let capture;
    const canvasScaleMax = 0.5;

    p.preload = () => {
      fileList.forEach(fp => {
        filterShaders.push(p.loadShader(fp.vert, fp.frag));
      });
    };

    p.setup = () => {
      P = p;
      p.createCanvas(p.windowWidth * canvasScaleMax, p.windowHeight * canvasScaleMax, p.WEBGL);
      capture = p.createCapture(p.VIDEO, calculateLayout);
      capture.hide();
    };

    p.draw = () => {
      p.shader(filterShaders[shaderIndex]);
      filterShaders[shaderIndex].setUniform("u_time", p.frameCount / 100);
      filterShaders[shaderIndex].setUniform("u_Resolution", [p.width, p.height]);
      filterShaders[shaderIndex].setUniform("u_tex", capture);
      p.rect(0, 0, p.width, p.height);
    };

    p.windowResized = () => {
      calculateLayout();
    }

    function calculateLayout() {
      let newWidth = p.windowWidth * canvasScaleMax;
      let newHeight = p.windowHeight * canvasScaleMax;
      let scale = p.min(newWidth / capture.width, newHeight / capture.height);
      p.resizeCanvas(capture.width * scale, capture.height * scale, p.WEBGL);
    }
  };

  return <div className="CameraCapture" ref={sketchRef}></div>;
};

export default CameraCapture;

// 画像の保存
export function saveImage() {
  P.saveCanvas();
}
