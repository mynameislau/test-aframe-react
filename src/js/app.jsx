import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { Entity, Scene } from 'aframe-react';

import { squaresReducer } from './reducers/squares';
import { roomsReducer } from './reducers/rooms';

import { RoomA } from './components/room-a.jsx';
import { RoomB } from './components/room-b.jsx';
import { Room } from './components/room.jsx';
import { RoomScala } from './components/room-scala.jsx';
import { initEditablePos } from './aframe/components/editable-pos';

import './aframe/components/toggle-debug';

console.log('nope');

const store = createStore(combineReducers({
  squares: squaresReducer,
  rooms: roomsReducer
}));

initEditablePos(store);

window.addEventListener('load', () => {
  ReactDOM.render(
    <Scene toggle-debug inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={RoomScala}/>
          <Route path="/room/:roomName" component={Room}/>
          <Route path="/room-b" component={RoomB}/>
          <Route path="/room-a" component={RoomA}/>
        </Router>
      </Provider>
    </Scene>

    , document.getElementById('app'));
});

    // document.body.innerHTML = `
    // <a-scene
      //   inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js"
      // >
      //   <a-sky color="#9ae1ff" src=""></a-sky>
      //   <a-sphere radius="2" position="0.03 2.32 -10.99" src="assets/texture.jpg" rotation="0 24.27 0">
      //     <a-animation attribute="rotation" dur="10000" fill="forwards" to="0 360 0" repeat="indefinite">
      //     </a-animation>
      //   </a-sphere>
      //   <a-entity
      //     geometry="primitive: plane; height: 100; width: 100"
      //     material="side:back;shader:flat;color:#75ba18"
      //     rotation="90 0 0"
      //   >
      //   </a-entity>
      // </a-scene>
      // `

      //       var scene = document.querySelector('a-scene');
      // if (scene.hasLoaded) {
      //   run();
      // } else {
      //   scene.addEventListener('loaded', run);
      // }
      // function run () {
      //   console.log('ok')
      //   var entity = scene.querySelector('a-entity');
      //   //entity.setAttribute('material', 'color', 'red');
      //   document.querySelectorAll('.cube').forEach(cube => {
      //     console.log(cube);
      //     cube.addEventListener('mouseenter', function () {
      //
      //       const intervalID = setInterval(() => {
      //         const data = squares[Number(cube.id)];
      //         data.life = data.life - 0.1;
      //       }, 50);
      //
      //       cube.addEventListener('mouseleave', () => clearInterval(intervalID));
      //     });
      //   });
      // }
