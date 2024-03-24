precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform sampler2D u_tex;

float random(float co){
    float a = sin(co * 1234.56789) / 1. + 1.;
    float b = cos(a * 1234.56789) / 1. + 1.;
    return b;
}

vec2 mosaic(vec2 inputTexCoord) {
  vec2 outputTexCoord;
  float mosaicResolution = random(floor(u_time * 10.)) * 250.;

  outputTexCoord.x = floor(inputTexCoord.x  * mosaicResolution) / mosaicResolution;
  outputTexCoord.y = floor(inputTexCoord.y * mosaicResolution) / mosaicResolution;

  return outputTexCoord;
}

void main(void) {
  vec4 color = texture2D(u_tex, mosaic(vTexCoord));
  vec4 colorR = texture2D(u_tex,mosaic(vTexCoord+vec2(.01*random(floor(u_time*10.)), 0)));

  color.r = colorR.r;

  color.r = pow(color.r, 2.) + .2;
  color.g = pow(color.g, 2.) + .1;
  color.b = pow(color.b, 2.) + .1;

  gl_FragColor = vec4(color.r * .95, color.g, color.b, color.a);
}