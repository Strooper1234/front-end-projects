varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    // uv its given by three.js
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    // position its given by three.js
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
}