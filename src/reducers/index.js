import { colorsReducer } from './colorsReducer';

const mainReducer = ({ colors }, action) => ({
    colors: colorsReducer(colors, action),
});

export default mainReducer;