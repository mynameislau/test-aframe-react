import React from 'react';
import { Entity } from 'aframe-react';
import '../aframe/components/hoverable';

export const NavAnchor = props =>
  <Entity
    {...props}
    hoverable geometry="primitive: tetrahedron; radius: 1"
    material="color: #FF0000;"
    animation__rot={{ property: 'rotation', easing: 'linear', dur: 2000, loop: true, to: '360 0 0' }}
  />;
