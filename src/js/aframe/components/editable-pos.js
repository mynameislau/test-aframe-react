import AFRAME from 'aframe';
import { browserHistory } from 'react-router';

export const initEditablePos = store => AFRAME.registerComponent('editable-pos', {
  schema: {
    id: { default: null },
    name: { default: null }
  },
  init: function () {
    window.navAnchors = window.navAnchors || [];
    window.navAnchors.push(this.el);

    this.el.addEventListener('click', () => {
      if (window.debugNavAnchors) {
        document.addEventListener('keydown', event => {
          const editPos = () => {
            const key = event.key;
            const prevPos = this.el.getAttribute('position');

            const add = val => val + 0.1;
            const substract = val => val - 0.1;

            const mapping = {
              'o': { coord: 'z', 'func': add },
              'l': { coord: 'z', 'func': substract },
              'k': { coord: 'x', 'func': add },
              'm': { coord: 'x', 'func': substract },
              'i': { coord: 'y', 'func': add },
              'p': { coord: 'y', 'func': substract }
            };

            if (!mapping[key]) { return; }

            const toMerge = {};
            const coord = mapping[key].coord;
            const func = mapping[key].func;


            toMerge[coord] = func(prevPos[coord]);

            const newPos = Object.assign({}, prevPos, toMerge);

            // console.log(newPos);
            // this.el.setAttribute('position', newPos);

            store.dispatch({ type: 'EDIT_POS', name: this.data.name, id: this.data.id, position: Object.values(newPos) });
          };

          const intervalID = window.setInterval(editPos, 20);
          document.addEventListener('keyup', () => window.clearInterval(intervalID));
        });
      }
    });
  }
});