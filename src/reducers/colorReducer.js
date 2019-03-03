export const colorReducer = (state, action) => {
    switch (action.type) {
      case 'SELECT_COLOR':
        const isSelected = state.value === action.payload.value;
        
        return {
          ...state,
          selected: isSelected
        };
        
      default:
        return state;
    }
  };