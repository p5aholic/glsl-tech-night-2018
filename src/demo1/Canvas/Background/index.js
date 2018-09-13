'use strict';

import { Mesh } from 'three/src/objects/Mesh';
import { PlaneBufferGeometry } from 'three/src/geometries/PlaneGeometry';
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial';
import dat from 'dat.gui';

import Config from '../Config';
import vertexShader from './shader/vert.glsl';
import fragmentShader from './shader/frag.glsl';

export default class Background extends Mesh {
  constructor() {
    super();

    this.material = new RawShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0 },
        nStart: { type: 'fv', value: [0, 0, 0] },
        nScale: { type: 'f', value: 0.002 }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true
    });

    this.noiseStart = {
      x: 0, y: 0, z: 0
    };
    this.noiseScale = {
      value: 0.002
    };

    this.setGUI();
  }

  setGUI() {
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
    f2.add(this.noiseScale, 'value', 0.001, 0.01).onChange(value => {
      this.material.uniforms.nScale.value = value;
    });
  }

  resize() {
    this.geometry = new PlaneBufferGeometry(Config.sceneWidth, Config.sceneHeight, 1, 1);
  }

  update(time) {
    this.material.uniforms.time.value = time;
  }
}
