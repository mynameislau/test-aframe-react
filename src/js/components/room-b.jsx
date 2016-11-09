import { connect } from 'react-redux';
import React from 'react';
import { Entity, Scene } from 'aframe-react';
import { VisorCam } from './visor-cam.jsx';
import { NavAnchor } from './nav-anchor.jsx';
import { Room } from './room.jsx';
import '../aframe/components/navigate-on-click';

const mapStateToProps = state => ({
  squares: state.squares
});

const component = ({ squares, params }) => {
  console.log('params,', params);
  return <Room skyTexture="assets/2.jpg">
    <NavAnchor navigate-on-click="/room-a" position="5 0 0"/>
  </Room>
}
export const RoomB = connect(mapStateToProps)(component);
