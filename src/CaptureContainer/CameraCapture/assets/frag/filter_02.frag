precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform sampler2D u_tex;

vec3 colorRemap(float input_color, float time) {
  vec3 output_color = vec3(0, 0, 0);

  if (input_color > 0.9){
    output_color = vec3(1.,1.,1. + sin(time*.1)*.2);
  }
  else if(input_color>.8){
    output_color=vec3(1.,.65,1.+sin(time*.1+.4)*.2);
  }
  else if (input_color > .7) {
    output_color = vec3(0., 1., .8+sin(time*.1+.8)*.2);
  }
  else if (input_color > .5) {
    output_color = vec3(.3, 1., 1.+sin(time*.1+1.2)*.2);
  }
  else if (input_color > .4) {
    output_color = vec3(.5, .15, .57+sin(time*.1+1.6)*.2);
  }
  else if(input_color>.2){
    output_color=vec3(0.2235, 0.1451, 0.4941+sin(time*.1+2.)*.2);
  }
  else {
    output_color = vec3(.1, .16, .16+sin(time*.1+2.4)*.2);
  }

  return output_color;
}

void main(void) {    
  vec4 color = texture2D(u_tex, vTexCoord);

  float average = (color.r + color.g + color.b) / 3.;

  vec3 sparate_color = colorRemap(average, u_time);

  gl_FragColor = vec4(sparate_color, color.a);
}