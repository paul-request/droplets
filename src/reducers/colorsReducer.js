export const colorsReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_COLOR':
      const colors = state.map(color => colorReducer(color, action));

      return [ ...colors ];
      
    default:
      return state;
  }
};

export const colorReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_COLOR':
      const isSelected = state.value === action.payload.value;
      
      return {
        ...state,
        selected: isSelected
      };
      
    default:
      return state
  }
};