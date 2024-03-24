precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform sampler2D u_tex;

/* 左右反転
vec2 reverse(vec2 inputTexCoord) {
    vec2 outputTexCoord;

    outputTexCoord.x = inputTexCoord.x * -1. + 1.;
    outputTexCoord.y = inputTexCoord.y;

    return outputTexCoord;
}
*/

vec2 mirror(vec2 inputTexCoord) {
    vec2 outputTexCoord;

    outputTexCoord.x = abs(inputTexCoord.x - .5) + .5;
    outputTexCoord.y = abs(inputTexCoord.y - .5) + .5;

    return outputTexCoord;
}

vec2 circleMirror(vec2 inputTexCoord) {
    vec2 outputTexCoord = inputTexCoord;

    vec2 center = vec2(0.5, 0.5);

    float dist = distance(inputTexCoord, center);

    float phase = sin(dist - .8) / 2. + .1;

    vec2 direction = normalize(inputTexCoord - center);

    direction *= phase; 

    outputTexCoord += direction;   

    return outputTexCoord;
}

void main() {
    vec2 mirrorTexCoord = mirror(vTexCoord);
    
    vec2 circleTexCoord = circleMirror(mirrorTexCoord);

    vec4 color = texture2D(u_tex, circleTexCoord);

    color.g *= (sin(u_time) / 2. + .5) * .5 + .5;
    color.b *= (cos(u_time * 2.) / 2. + .5) * .5 + .25;

    gl_FragColor = color;
}