import { TOGGLE_DRAWER } from './utilityActions';

const initialState = {
  openDrawer: true,
};

const utilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        openDrawer: !state.openDrawer,
      };
    default:
      return state;
  }
};

export default utilityReducer;
