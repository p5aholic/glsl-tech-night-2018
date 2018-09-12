'use strict';

import { Mesh } from 'three/src/objects/Mesh';
import { PlaneBufferGeometry } from 'three/src/geometries/PlaneGeometry';
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial';
import { CanvasTexture } from 'three/src/textures/CanvasTexture';
import dat from 'dat.gui';

import Config from '../Config';
import vertexShader from './shader/vert.glsl';
import fragmentShader from './shader/frag.glsl';

export default class Title extends Mesh {
  constructor() {
    super();

    const texture = this.createTexture({
      text: 'GLSL Tech Night',
      width: 2048,
      height: 1024,
      fontSize: 200
    });

    this.material = new RawShaderMaterial({
      uniforms: {
        texture: { type: 't', value: texture },
        time: { type: 'f', value: 0.0 },
        nScale: { type: 'fv', value: [3, 3] }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true
    });

    this.noiseScale = {
      x: 3.0, y: 3.0
    };

    this.setGUI();
  }

  setGUI() {
    const gui = new dat.GUI();

    const f1 = gui.addFolder('Noise Scale');
    f1.add(this.noiseScale, 'x', 1, 20).onChange(value => {
      this.material.uniforms.nScale.value[0] = value;
    });
    f1.add(this.noiseScale, 'y', 1, 20).onChange(value => {
      this.material.uniforms.nScale.value[1] = value;
    });
  }

  // 2D Canvasからテクスチャを作成する
  createTexture(options) {
    const canvas = document.createElement('canvas');
    const width = options.width * Config.dpr;
    const height = options.height * Config.dpr;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    // ctx.fillRect(0, 0, width, height);

    ctx.font = `bold ${options.fontSize * Config.dpr}px 'Ubuntu'`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
    ctx.fillText(options.text, width/2, height/2);

    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = false;

    return texture;
  }

  resize() {
    this.geometry = new PlaneBufferGeometry(Config.sceneWidth, Config.sceneWidth/2, 1, 1);
  }

  update(time) {
    this.material.uniforms.time.value = time;
  }
}
