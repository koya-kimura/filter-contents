precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform sampler2D u_tex;

vec2 centerVacuum (vec2 inputTexCoord) {
    vec2 outputTexCoord = inputTexCoord;

    vec2 center = vec2(0.5, 0.5);

    float dist = distance(inputTexCoord, center);

    float phase = sin(dist - 3.1) / 2. + .1;

    vec2 direction = normalize(inputTexCoord - center);

    direction *= phase; 

    outputTexCoord += direction;   

    return outputTexCoord;
}

void main() {
    vec2 vacuumTexCoord = centerVacuum(vTexCoord);

    gl_FragColor = texture2D(u_tex, vacuumTexCoord);
}