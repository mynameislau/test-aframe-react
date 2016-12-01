import AFRAME from 'aframe';
import { connect } from 'react-redux';
import React from 'react';
import { Entity } from 'aframe-react';
import '../aframe/components/navigate-on-click';
import { VisorCam } from './visor-cam.jsx';

const mapStateToProps = state => ({
  squares: state.squares
});

const component = ({ squares }) =>
  <Entity>
    <VisorCam/>
    <Entity primitive="a-sky" material="src: url(assets/earth3_bw.png)"/>
  </Entity>;

export const RoomEarth = connect(mapStateToProps)(component);
