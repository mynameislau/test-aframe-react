import { browserHistory } from 'react-router';

AFRAME.registerComponent('navigate-on-click', {
  schema: { type: 'string', 'default': '/404' },
  init: function () {
    var sceneEl = this.el;
    this.el.addEventListener('click', () => browserHistory.push(this.data));
  }
});
