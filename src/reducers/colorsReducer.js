import { colorReducer } from './colorReducer';

export const colorsReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_COLOR':
      const colors = state.map(color => colorReducer(color, action));

      return [ ...colors ];
      
    default:
      return state;
  }
};