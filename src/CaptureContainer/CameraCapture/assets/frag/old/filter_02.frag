precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform sampler2D u_tex;

vec3 colorRemap(float input_color) {
  vec3 output_color = vec3(0, 0, 0);

  if (input_color > 0.9){
    output_color = vec3(1., 0., 0.);
  }
  else if (input_color > 0.8) {
    output_color = vec3(0., 1., 0.);
  }
  else if (input_color > 0.7) {
    output_color = vec3(0., 0., 1.);
  }
  else if (input_color > 0.6) {
    output_color = vec3(1., 1., 0.);
  }
  else if (input_color > 0.5) {
    output_color = vec3(1., 0., 1.);
  }
  else if (input_color > 0.4) {
    output_color = vec3(0., 1., 1.);
  }
  else if (input_color > 0.3) {
    output_color = vec3(1., 1., 1.);
  }
  else {
    output_color = vec3(0., 0., 0.);
  }

  return output_color;
}

void main(void) {    
  vec4 color = texture2D(u_tex, vTexCoord);

  float average = (color.r + color.g + color.b) / 3.;

  vec3 sparate_color = colorRemap(average);

  gl_FragColor = vec4(sparate_color, color.a);
}