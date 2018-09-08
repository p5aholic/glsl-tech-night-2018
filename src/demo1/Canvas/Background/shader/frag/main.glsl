void main() {
  vec2 uv = vUv;

  float nx = nStart.x + uv.x * nScale.x;
  float ny = nStart.y + uv.y * nScale.y;
  // float nz = nStart.z;
  float nz = nStart.z + time;
  float n = snoise(vec3(nx, ny, nz));
  n = (1.0 + n) * 0.5;

  vec4 color = vec4(n, n, n, 1.0);

  gl_FragColor = color;
}
