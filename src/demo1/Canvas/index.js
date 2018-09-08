'use strict';

import { Scene } from 'three/src/scenes/Scene';
import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';

import Config from './Config';
import Background from './Background';

export default class Canvas {
  constructor() {
    this.container = document.getElementById('CanvasContainer');
    Config.dpr = window.devicePixelRatio;
    
    this.scene = new Scene();

    this.camera = new OrthographicCamera(-1, 1, 1, -1, 1, 1000);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(this.scene.position);

    this.renderer = new WebGLRenderer({
      antialias : false,
      alpha     : false,
      stencil   : false,
      depth     : false
    });
    this.renderer.setClearColor(0x000000);
    this.renderer.setSize(Config.width, Config.height);
    this.renderer.setPixelRatio(Config.dpr);
    this.container.appendChild(this.renderer.domElement);

    this.background = new Background();
    this.scene.add(this.background);

    this.needsStopUpdate = false;
    this.resizeFunction = this.resize.bind(this);
    this.updateFunction = this.update.bind(this);

    window.addEventListener('resize', this.resizeFunction);

    this.resize();
    this.update();
  }

  resize() {
    this.needsStopUpdate = true;

    this.setConfig();
    this.resizeScene();
    this.background.resize();

    this.needsStopUpdate = false;
  }
  
  setConfig() {
    const domRect = this.container.getBoundingClientRect();
    Config.width = domRect.right - domRect.left;
    Config.height = domRect.bottom - domRect.top;
    Config.halfWidth = Config.width / 2;
    Config.halfHeight = Config.height / 2;
    Config.aspectRatio = Config.width / Config.height;

    if (Config.width >= Config.height) {
      Config.sceneWidth = 2.0;
      Config.sceneHeight = Config.sceneWidth / Config.aspectRatio;
    } else {
      Config.sceneHeight = 2.0;
      Config.sceneWidth = Config.sceneHeight * Config.aspectRatio;
    }
  }

  resizeScene() {
    this.camera.aspect =  Config.aspectRatio;
    this.camera.left   = -Config.sceneWidth/2;
    this.camera.right  =  Config.sceneWidth/2;
    this.camera.top    =  Config.sceneHeight/2;
    this.camera.bottom = -Config.sceneHeight/2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(Config.width, Config.height);
  }

  update() {
    requestAnimationFrame(this.updateFunction);

    if (this.needsStopUpdate) return;

    const time = performance.now() * 0.001;
    this.background.update(time);

    this.renderer.render(this.scene, this.camera);
  }
}
