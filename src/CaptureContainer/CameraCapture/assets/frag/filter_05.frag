precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform sampler2D u_tex;

vec2 ripple(vec2 inputTexCoord) {
  vec2 outputTexCoord;

  vec2 center = vec2(sin(u_time) * cos(u_time / 2.) + .5, sin(u_time) * sin(u_time / 2.) + .5);

  float dist = distance(center, inputTexCoord);

  dist = dist * dist;

  float phase =  dist * 5. - u_time * 1.;

  float motion =  sin(phase) * .1 * max(0., 2. - dist * 1.);

  vec2 direction = inputTexCoord - center;

  direction.x = direction.x * motion;
  direction.y = direction.y * motion;

  outputTexCoord.x = inputTexCoord.x + direction.x;
  outputTexCoord.y = inputTexCoord.y + direction.y;

  return outputTexCoord;
}

void main() {
  vec2 rippleTexCoord = ripple(vTexCoord);

  gl_FragColor = texture2D(u_tex, rippleTexCoord);
}