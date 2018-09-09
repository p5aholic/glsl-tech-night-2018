'use strict';

import WebFont from 'webfontloader';
import Canvas from './Canvas';

document.addEventListener('DOMContentLoaded', () => {
  WebFont.load({
    classes: false,
    google: {
      families: ['Ubuntu']
    },
    active: () => {
      new Canvas();
    }
  });
});
