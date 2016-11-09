import AFRAME from 'aframe';
import { browserHistory } from 'react-router';

AFRAME.registerComponent('navigate-on-click', {
  schema: { type: 'string', 'default': '/404' },
  init: function () {
    var sceneEl = this.el;
    this.el.addEventListener('click', () => {
      if (!window.debugNavAnchors) {
        browserHistory.push(this.data);
      }
    });
  }
});
