precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;

uniform vec2 u_Resolution;

// カメラからキャプチャした画像
uniform sampler2D u_tex;

void main() {
  vec2 uv = vTexCoord;

  vec4 col = texture2D(u_tex, uv);

  gl_FragColor = vec4(vec3(1.0) - col.rgb, 1.0);
}