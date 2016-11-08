import AFRAME from 'aframe';

AFRAME.registerComponent('hoverable', {
  schema: { type: 'string', 'default': 'green' },
  init: function () {
    this.el.addEventListener('mouseenter', () => {
      const color = this.el.getAttribute('material').color;

      this.el.setAttribute('material', 'color', this.data);
      this.el.addEventListener('mouseleave', () => {
        this.el.setAttribute('material', 'color', color);
      });
    });
  }
});
