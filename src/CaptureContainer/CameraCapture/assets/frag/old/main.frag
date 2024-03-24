precision mediump float;

varying vec2 vTexCoord;

// カメラからキャプチャした画像
uniform sampler2D u_tex;

uniform vec2 u_Resolution;

void main() {
  vec2 uv = vTexCoord;
  // 左右反転する処理
  // uv.x = 1. - 1. * uv.x;
  // uv = uv * 4.;

  vec4 col = texture2D(u_tex, uv);

  // vec2 pos = vTexCoord.xy / u_Resolution.xy;

  // vec4 col = texture2D(u_tex, pos);

  gl_FragColor = vec4(col);
}