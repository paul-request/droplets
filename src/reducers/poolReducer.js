export const poolReducer = (state, action) => {
  switch (action.type) {
    case 'FILL_POOL':
      // TODO: try and add 2 colors together based on existsing height and color etc?
      return {
        height: (state.height + action.payload.value),
        color: action.payload.color
      }
      
    default:
      return state;
  }
};