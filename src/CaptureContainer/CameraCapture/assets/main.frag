precision mediump float;

varying vec2 vTexCoord;

// カメラからキャプチャした画像
uniform sampler2D u_tex;

void main() {
  vec2 uv = vTexCoord;

  // 左右反転する処理
  uv.x = 1. - 1. * uv.x;

  vec4 col = texture2D(u_tex, uv);

  gl_FragColor = vec4(col);
}