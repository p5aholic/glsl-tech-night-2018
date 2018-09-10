'use strict';

import WebFont from 'webfontloader';
import Canvas from './Canvas';

document.addEventListener('DOMContentLoaded', () => {
  // google fontsからフォントを読み込んでからCanvasを作成する
  WebFont.load({
    google: {
      families: ['Ubuntu']
    },
    active: () => {
      new Canvas();
    }
  });
});
