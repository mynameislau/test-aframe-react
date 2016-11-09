import { Map, Record, List } from 'Immutable';

const defaultState = Map({
  scala: Map({
    sky: 'assets/scala.jpg',
    navAnchors: Map({
      '2': Map({ href: '/room/fish', position: [27.9, -0.29, 10.49] })
    })
  }),
  fish: Map({
    sky: 'assets/3.jpg',
    navAnchors: Map({
      '1': Map({ href: '/room/scala', position: [5, 0, 0] })
    })
  })
});

export const roomsReducer = (prevState = defaultState, action) => {
  switch (action.type) {

    case 'EDIT_POS':
      return prevState.setIn([action.name, 'navAnchors', action.id, 'position'], action.position);
    default:
      return prevState;

  }
};
