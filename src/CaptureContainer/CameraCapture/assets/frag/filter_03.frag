precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform sampler2D u_tex;

vec3 colorRemap(float input_color) {
  vec3 output_color = vec3(0.0);

  if (input_color > 0.9){
    output_color = vec3(0.7, 0.68, 0.82);
  }
  else if (input_color > 0.8) {
    output_color = vec3(0.12, 0.05, 0.33);
  }
  else if (input_color > 0.7) {
    output_color = vec3(0.7, 0.68, 0.82);
  }
  else if (input_color > 0.6) {
    output_color = vec3(0.12, 0.05, 0.33);
  }
  else if (input_color > 0.5) {
    output_color = vec3(0.7, 0.68, 0.82);
  }
  else if (input_color > 0.4) {
    output_color = vec3(0.12, 0.05, 0.33);
  }
  else if (input_color > 0.3) {
    output_color = vec3(0.7, 0.68, 0.82);
  }
  else if (input_color > 0.2) {
    output_color = vec3(0.12, 0.05, 0.33);
  }

  return output_color;
}

vec2 ripple(vec2 inputTexCoord) {
  vec2 outputTexCoord;

  vec2 right = vec2(0.0, sin(u_time) / 4. + .5);
  vec2 left = vec2(1.0, cos(u_time) / 4. + .5);

  float dist1 = distance(left, inputTexCoord);
  float dist2 = distance(right, inputTexCoord);

  float dist = pow(dist1, 3.) * pow(dist2, 3.);

  float phase =  dist * 20.0 - u_time * 1.0;

  float motion =  sin(phase) * 0.1 * max(0.0, 2.0 - dist * 1.0);

  vec2 direction = normalize(inputTexCoord - left);

  direction.x = direction.x * motion;
  direction.y = direction.y * motion;

  outputTexCoord.x = inputTexCoord.x + direction.x;
  outputTexCoord.y = inputTexCoord.y + direction.y;

  return outputTexCoord;
}

void main(void) {
  vec4 color = texture2D(u_tex, ripple(vTexCoord));

  float average = (color.r + color.g + color.b) / 3.;

  vec3 sparate_color = colorRemap(average);

  gl_FragColor = vec4(sparate_color, color.a);
}