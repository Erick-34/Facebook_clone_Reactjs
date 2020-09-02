import React from 'react';
import ReactDOM from 'react-dom';

import { StateProvider } from './Components/StateProvider';
import reducer, { initialState } from './Components/reducer'
import App from './App';

ReactDOM.render(
     <StateProvider initialState={initialState} reducer={reducer}>
        <App />
     </StateProvider>
, document.getElementById('root'));
