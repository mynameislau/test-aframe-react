import { connect } from 'react-redux';
import React from 'react';
import { Entity } from 'aframe-react';
import { VisorCam } from './visor-cam.jsx';
import { NavAnchor } from './nav-anchor.jsx';
import '../aframe/components/navigate-on-click';

const mapStateToProps = state => ({
  rooms: state.rooms.toJS()
});

const component = ({ children, skyTexture = 'assets/2.jpg', params, rooms }) => {
  const room = params ? rooms[params.roomName] : null;
  const sky = room ? room.sky : skyTexture;
  const navAnchors = room ? room.navAnchors : [];

  console.log('sky', sky);

  return <Entity>
    <VisorCam/>
    <Entity primitive="a-sky" material={`src: url(${sky})`}/>
    {
      Object.keys(navAnchors).map(id => {
        console.log('log pos', navAnchors[id].position);

        return <NavAnchor
          key={id}
          editable-pos={`name: ${params.roomName}; id: ${id};`}
          position={navAnchors[id].position.join(' ')}
          navigate-on-click={navAnchors[id].href}
        />; }
      )
    }
    {children}
  </Entity>;
};

export const Room = connect(mapStateToProps)(component);
