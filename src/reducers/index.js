import { colorsReducer } from './colorsReducer';
import { poolReducer } from './poolReducer';

const mainReducer = ({ colors, pool }, action) => ({
    colors: colorsReducer(colors, action),
    pool: poolReducer(pool, action)
});

export default mainReducer;