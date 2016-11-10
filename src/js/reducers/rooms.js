import { Map, Record, List, fromJS } from 'Immutable';

const defaultState = Map({});

export const roomsReducer = (prevState = defaultState, action) => {
  switch (action.type) {

    case 'GET_ROOMS_FROM_FILE':
      return fromJS(action.data);

    case 'EDIT_POS':
      return prevState.setIn([action.name, 'navAnchors', action.id, 'position'], action.position);
    default:
      return prevState;

  }
};
