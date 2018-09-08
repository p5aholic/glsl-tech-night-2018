/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demo1": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/demo1/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/demo1/Canvas/Background/index.js":
/*!**********************************************!*\
  !*** ./src/demo1/Canvas/Background/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/geometries/PlaneGeometry */ \"./node_modules/three/src/geometries/PlaneGeometry.js\");\n/* harmony import */ var three_src_materials_RawShaderMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/materials/RawShaderMaterial */ \"./node_modules/three/src/materials/RawShaderMaterial.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Config */ \"./src/demo1/Canvas/Config.js\");\n/* harmony import */ var Libs_noise3d_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Libs/noise3d.glsl */ \"./src/libs/noise3d.glsl\");\n/* harmony import */ var Libs_noise3d_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Libs_noise3d_glsl__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shader_vert_head_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shader/vert/head.glsl */ \"./src/demo1/Canvas/Background/shader/vert/head.glsl\");\n/* harmony import */ var _shader_vert_head_glsl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shader_vert_head_glsl__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _shader_vert_main_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shader/vert/main.glsl */ \"./src/demo1/Canvas/Background/shader/vert/main.glsl\");\n/* harmony import */ var _shader_vert_main_glsl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shader_vert_main_glsl__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shader_frag_head_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shader/frag/head.glsl */ \"./src/demo1/Canvas/Background/shader/frag/head.glsl\");\n/* harmony import */ var _shader_frag_head_glsl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shader_frag_head_glsl__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shader_frag_main_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shader/frag/main.glsl */ \"./src/demo1/Canvas/Background/shader/frag/main.glsl\");\n/* harmony import */ var _shader_frag_main_glsl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shader_frag_main_glsl__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\nclass Background extends three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"] {\n  constructor() {\n    super();\n    this.material = new three_src_materials_RawShaderMaterial__WEBPACK_IMPORTED_MODULE_2__[\"RawShaderMaterial\"]({\n      uniforms: {\n        time: {\n          type: 'f',\n          value: 0\n        },\n        nStart: {\n          type: 'fv',\n          value: [0, 0, 0]\n        },\n        nScale: {\n          type: 'fv',\n          value: [3, 3]\n        }\n      },\n      vertexShader: _shader_vert_head_glsl__WEBPACK_IMPORTED_MODULE_6___default.a + _shader_vert_main_glsl__WEBPACK_IMPORTED_MODULE_7___default.a,\n      fragmentShader: _shader_frag_head_glsl__WEBPACK_IMPORTED_MODULE_8___default.a + Libs_noise3d_glsl__WEBPACK_IMPORTED_MODULE_5___default.a + _shader_frag_main_glsl__WEBPACK_IMPORTED_MODULE_9___default.a,\n      transparent: true\n    });\n    this.noiseStart = {\n      x: 0,\n      y: 0,\n      z: 0\n    };\n    this.noiseScale = {\n      x: 3,\n      y: 3\n    };\n    const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_3__[\"default\"].GUI();\n    const f1 = gui.addFolder('Noise Start');\n    f1.add(this.noiseStart, 'x', 0, 10).onChange(value => {\n      this.material.uniforms.nStart.value[0] = value;\n    });\n    f1.add(this.noiseStart, 'y', 0, 10).onChange(value => {\n      this.material.uniforms.nStart.value[1] = value;\n    });\n    f1.add(this.noiseStart, 'z', 0, 10).onChange(value => {\n      this.material.uniforms.nStart.value[2] = value;\n    });\n    const f2 = gui.addFolder('Noise Scale');\n    f2.add(this.noiseScale, 'x', 1, 30).onChange(value => {\n      this.material.uniforms.nScale.value[0] = value;\n    });\n    f2.add(this.noiseScale, 'y', 1, 30).onChange(value => {\n      this.material.uniforms.nScale.value[1] = value;\n    });\n  }\n\n  resize() {\n    this.geometry = new three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_1__[\"PlaneBufferGeometry\"](_Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sceneWidth, _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sceneHeight, 1, 1);\n  }\n\n  update(time) {\n    this.material.uniforms.time.value = time;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/demo1/Canvas/Background/index.js?");

/***/ }),

/***/ "./src/demo1/Canvas/Background/shader/frag/head.glsl":
/*!***********************************************************!*\
  !*** ./src/demo1/Canvas/Background/shader/frag/head.glsl ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform float time;\\nuniform vec3 nStart;\\nuniform vec2 nScale;\\n\\nvarying vec2 vUv;\\n\"\n\n//# sourceURL=webpack:///./src/demo1/Canvas/Background/shader/frag/head.glsl?");

/***/ }),

/***/ "./src/demo1/Canvas/Background/shader/frag/main.glsl":
/*!***********************************************************!*\
  !*** ./src/demo1/Canvas/Background/shader/frag/main.glsl ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"void main() {\\n  vec2 uv = vUv;\\n\\n  float nx = nStart.x + uv.x * nScale.x;\\n  float ny = nStart.y + uv.y * nScale.y;\\n  // float nz = nStart.z;\\n  float nz = nStart.z + time;\\n  float n = snoise(vec3(nx, ny, nz));\\n  n = (1.0 + n) * 0.5;\\n\\n  vec4 color = vec4(n, n, n, 1.0);\\n\\n  gl_FragColor = color;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/demo1/Canvas/Background/shader/frag/main.glsl?");

/***/ }),

/***/ "./src/demo1/Canvas/Background/shader/vert/head.glsl":
/*!***********************************************************!*\
  !*** ./src/demo1/Canvas/Background/shader/vert/head.glsl ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform mat4 modelViewMatrix;\\nuniform mat4 projectionMatrix;\\n\\nattribute vec3 position;\\nattribute vec2 uv;\\n\\nvarying vec2 vUv;\\n\"\n\n//# sourceURL=webpack:///./src/demo1/Canvas/Background/shader/vert/head.glsl?");

/***/ }),

/***/ "./src/demo1/Canvas/Background/shader/vert/main.glsl":
/*!***********************************************************!*\
  !*** ./src/demo1/Canvas/Background/shader/vert/main.glsl ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"void main() {\\n  vUv = uv;\\n\\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/demo1/Canvas/Background/shader/vert/main.glsl?");

/***/ }),

/***/ "./src/demo1/Canvas/Config.js":
/*!************************************!*\
  !*** ./src/demo1/Canvas/Config.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Config = {\n  width: 100,\n  height: 100,\n  halfWidth: 50,\n  halfHeight: 50,\n  sceneWidth: 2,\n  sceneHeight: 2,\n  dpr: 1,\n  aspectRatio: 1.0\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/demo1/Canvas/Config.js?");

/***/ }),

/***/ "./src/demo1/Canvas/index.js":
/*!***********************************!*\
  !*** ./src/demo1/Canvas/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/OrthographicCamera */ \"./node_modules/three/src/cameras/OrthographicCamera.js\");\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Config */ \"./src/demo1/Canvas/Config.js\");\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Background */ \"./src/demo1/Canvas/Background/index.js\");\n\n\n\n\n\n\n\nclass Canvas {\n  constructor() {\n    this.container = document.getElementById('CanvasContainer');\n    _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dpr = window.devicePixelRatio;\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n    this.camera = new three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__[\"OrthographicCamera\"](-1, 1, 1, -1, 1, 1000);\n    this.camera.position.set(0, 0, 100);\n    this.camera.lookAt(this.scene.position);\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_2__[\"WebGLRenderer\"]({\n      antialias: false,\n      alpha: false,\n      stencil: false,\n      depth: false\n    });\n    this.renderer.setClearColor(0x000000);\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dpr);\n    this.container.appendChild(this.renderer.domElement);\n    this.background = new _Background__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    this.scene.add(this.background);\n    this.needsStopUpdate = false;\n    this.resizeFunction = this.resize.bind(this);\n    this.updateFunction = this.update.bind(this);\n    window.addEventListener('resize', this.resizeFunction);\n    this.resize();\n    this.update();\n  }\n\n  resize() {\n    this.needsStopUpdate = true;\n    this.setConfig();\n    this.resizeScene();\n    this.background.resize();\n    this.needsStopUpdate = false;\n  }\n\n  setConfig() {\n    const domRect = this.container.getBoundingClientRect();\n    _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width = domRect.right - domRect.left;\n    _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height = domRect.bottom - domRect.top;\n    _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width / 2;\n    _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height / 2;\n    _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height;\n\n    if (_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width >= _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height) {\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneWidth = 2.0;\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneHeight = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneWidth / _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aspectRatio;\n    } else {\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneHeight = 2.0;\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneWidth = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneHeight * _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aspectRatio;\n    }\n  }\n\n  resizeScene() {\n    this.camera.aspect = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aspectRatio;\n    this.camera.left = -_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneWidth / 2;\n    this.camera.right = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneWidth / 2;\n    this.camera.top = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneHeight / 2;\n    this.camera.bottom = -_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sceneHeight / 2;\n    this.camera.updateProjectionMatrix();\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height);\n  }\n\n  update() {\n    requestAnimationFrame(this.updateFunction);\n    if (this.needsStopUpdate) return;\n    const time = performance.now() * 0.001;\n    this.background.update(time);\n    this.renderer.render(this.scene, this.camera);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/demo1/Canvas/index.js?");

/***/ }),

/***/ "./src/demo1/main.js":
/*!***************************!*\
  !*** ./src/demo1/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ \"./src/demo1/Canvas/index.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  new _Canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n});\n\n//# sourceURL=webpack:///./src/demo1/main.js?");

/***/ }),

/***/ "./src/libs/noise3d.glsl":
/*!*******************************!*\
  !*** ./src/libs/noise3d.glsl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"//\\n// Description : Array and textureless GLSL 2D/3D/4D simplex \\n//               noise functions.\\n//      Author : Ian McEwan, Ashima Arts.\\n//  Maintainer : stegu\\n//     Lastmod : 20110822 (ijm)\\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\\n//               Distributed under the MIT License. See LICENSE file.\\n//               https://github.com/ashima/webgl-noise\\n//               https://github.com/stegu/webgl-noise\\n// \\n\\nvec3 mod289(vec3 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec4 mod289(vec4 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec4 permute(vec4 x) {\\n     return mod289(((x*34.0)+1.0)*x);\\n}\\n\\nvec4 taylorInvSqrt(vec4 r)\\n{\\n  return 1.79284291400159 - 0.85373472095314 * r;\\n}\\n\\nfloat snoise(vec3 v)\\n  { \\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\\n\\n// First corner\\n  vec3 i  = floor(v + dot(v, C.yyy) );\\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\\n\\n// Other corners\\n  vec3 g = step(x0.yzx, x0.xyz);\\n  vec3 l = 1.0 - g;\\n  vec3 i1 = min( g.xyz, l.zxy );\\n  vec3 i2 = max( g.xyz, l.zxy );\\n\\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\\n  vec3 x1 = x0 - i1 + C.xxx;\\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\\n\\n// Permutations\\n  i = mod289(i); \\n  vec4 p = permute( permute( permute( \\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\\n\\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\\n  float n_ = 0.142857142857; // 1.0/7.0\\n  vec3  ns = n_ * D.wyz - D.xzx;\\n\\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\\n\\n  vec4 x_ = floor(j * ns.z);\\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\\n\\n  vec4 x = x_ *ns.x + ns.yyyy;\\n  vec4 y = y_ *ns.x + ns.yyyy;\\n  vec4 h = 1.0 - abs(x) - abs(y);\\n\\n  vec4 b0 = vec4( x.xy, y.xy );\\n  vec4 b1 = vec4( x.zw, y.zw );\\n\\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\\n  vec4 s0 = floor(b0)*2.0 + 1.0;\\n  vec4 s1 = floor(b1)*2.0 + 1.0;\\n  vec4 sh = -step(h, vec4(0.0));\\n\\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\\n\\n  vec3 p0 = vec3(a0.xy,h.x);\\n  vec3 p1 = vec3(a0.zw,h.y);\\n  vec3 p2 = vec3(a1.xy,h.z);\\n  vec3 p3 = vec3(a1.zw,h.w);\\n\\n//Normalise gradients\\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\\n  p0 *= norm.x;\\n  p1 *= norm.y;\\n  p2 *= norm.z;\\n  p3 *= norm.w;\\n\\n// Mix final noise value\\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\\n  m = m * m;\\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \\n                                dot(p2,x2), dot(p3,x3) ) );\\n  }\"\n\n//# sourceURL=webpack:///./src/libs/noise3d.glsl?");

/***/ })

/******/ });