import { connect } from 'react-redux';
import React from 'react';
import { Entity, Scene } from 'aframe-react';
import { VisorCam } from './visor-cam.jsx';
import { NavAnchor } from './nav-anchor.jsx';
import '../aframe/components/navigate-on-click';

const mapStateToProps = state => ({
  squares: state.squares
});

const component = ({ children, skyTexture }) =>
  <Entity>
    <VisorCam/>
    <Entity primitive="a-sky" material={`src: url(${skyTexture})`}/>
    {children}
  </Entity>
export const Room = connect(mapStateToProps)(component);
