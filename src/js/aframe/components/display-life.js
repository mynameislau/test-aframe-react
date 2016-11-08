import AFRAME from 'aframe';
import hsl from 'hsl-to-hex';

export default (squares) => {
  AFRAME.registerComponent('display-life', {
    tick: function () {
      this.el.setAttribute('material', 'color', hsl(0, 50, 50 + Number(this.em.getAttribute('life')) * 50));
      //this.el.setAttribute('material', `hsl(0,0,${Math.random() * 100})`);
      //this.el.object3D.material.color = "#ff0000";
    }
  });
};
