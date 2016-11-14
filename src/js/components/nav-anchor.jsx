import React from 'react';
import { Entity } from 'aframe-react';
import '../aframe/components/hoverable';

export const NavAnchor = props =>
  <Entity {...props} hoverable primitive="a-box" material="color: yellow;" />;
