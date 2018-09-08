'use strict';

import { Mesh } from 'three/src/objects/Mesh';
import { PlaneBufferGeometry } from 'three/src/geometries/PlaneGeometry';
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial';
import dat from 'dat.gui';

import Config from '../Config';
import noise3d from 'Libs/noise3d.glsl';
import vertHead from './shader/vert/head.glsl';
import vertMain from './shader/vert/main.glsl';
import fragHead from './shader/frag/head.glsl';
import fragMain from './shader/frag/main.glsl';

export default class Background extends Mesh {
  constructor() {
    super();

    this.material = new RawShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0 },
        nStart: { type: 'fv', value: [0, 0, 0] },
        nScale: { type: 'fv', value: [0.001, 0.001] }
      },
      vertexShader: vertHead + vertMain,
      fragmentShader: fragHead + noise3d + fragMain,
      transparent: true
    });

    this.noiseStart = {
      x: 0, y: 0, z: 0
    };
    this.noiseScale = {
      x: 0.001, y: 0.001
    };

    const gui = new dat.GUI();

    const f1 = gui.addFolder('Noise Start');
    f1.add(this.noiseStart, 'x', 0, 10).onChange(value => {
      this.material.uniforms.nStart.value[0] = value;
    });
    f1.add(this.noiseStart, 'y', 0, 10).onChange(value => {
      this.material.uniforms.nStart.value[1] = value;
    });
    f1.add(this.noiseStart, 'z', 0, 10).onChange(value => {
      this.material.uniforms.nStart.value[2] = value;
    });

    const f2 = gui.addFolder('Noise Scale');
    f2.add(this.noiseScale, 'x', 0.001, 0.01).onChange(value => {
      this.material.uniforms.nScale.value[0] = value;
    });
    f2.add(this.noiseScale, 'y', 0.001, 0.01).onChange(value => {
      this.material.uniforms.nScale.value[1] = value;
    });
  }

  resize() {
    this.geometry = new PlaneBufferGeometry(Config.sceneWidth, Config.sceneHeight, 1, 1);
  }

  update(time) {
    this.material.uniforms.time.value = time;
  }
}
