import React from 'react';
import './App.css';
import Cmachine from './Cmachine';
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './store/reducer.js'

const store=createStore(rootReducer)



function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Cmachine>

     </Cmachine>
     </div>
     </Provider>
  );
}

export default App;
