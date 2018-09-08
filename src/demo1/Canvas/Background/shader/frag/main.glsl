void main() {
  vec2 p = gl_FragCoord.xy;

  float nx = nStart.x + p.x * nScale.x;
  float ny = nStart.y + p.y * nScale.y;
  // float nz = nStart.z;
  float nz = nStart.z + time * 0.5;
  float n = snoise(vec3(nx, ny, nz));
  n = (1.0 + n) * 0.5; // 0〜1に変換

  vec4 color = vec4(n, n, n, 1.0);

  gl_FragColor = color;
}
