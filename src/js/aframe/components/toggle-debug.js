import AFRAME from 'aframe';
import { browserHistory } from 'react-router';

AFRAME.registerComponent('toggle-debug', {
  schema: { type: 'string', 'default': '/404' },
  init: () => {
    document.addEventListener('keyup', event => {
      if (event.key === 'u') {
        window.debugNavAnchors = !window.debugNavAnchors;
        console.log('debug toggled :', window.debugNavAnchors);
      }
    });
  }
});
