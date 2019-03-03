import React from "react";
import { StateProvider } from './state';
import { initialState } from './model';
import mainReducer from './reducers/index.js';
import Droplets from './Droplets';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <Droplets></Droplets>
    </StateProvider>
  );
}

export default App;
