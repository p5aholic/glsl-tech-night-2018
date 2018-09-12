'use strict';

import WebFontLoader from 'webfontloader';
import Canvas from './Canvas';

document.addEventListener('DOMContentLoaded', () => {
  // google fontsからフォントを読み込んでからCanvasを作成する
  WebFontLoader.load({
    google: {
      families: ['Ubuntu']
    },
    active: () => {
      new Canvas();
    }
  });
});
