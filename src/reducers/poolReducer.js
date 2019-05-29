export const poolReducer = (state, action) => {
  switch (action.type) {
    case 'FILL_POOL':
      // TODO: where is the best place for this?
      const { payload: { value, color }} = action;
      const distance = ((100 / (state.height + value)) * state.height);
      const nextColor = mix(state.color, color.value, distance);

      return {
        height: (state.height + action.payload.value),
        color: nextColor
      }

    case 'RESET_POOL':
      return {
        height: 0,
        color: state.color
      }
      
    default:
      return state;
  }
};

function mix(color1, color2, percent) {
  if (color1 === color2) return color1;

  const dec2hex = (d) => d.toString(16);
  const hex2dec = (h) => parseInt(h, 16);
  let color = '#';

  for (let i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
    const v1 = hex2dec(color1.replace(/#/g , '').substr(i, 2));
    const v2 = hex2dec(color2.replace(/#/g , '').substr(i, 2));
    let val = dec2hex(Math.floor(v2 + (v1 - v2) * (percent / 100.0))); 

    while(val.length < 2) { val = `0${val}`; }
    
    color += val;
  }
    
  return color;
};