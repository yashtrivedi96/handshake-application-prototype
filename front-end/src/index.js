import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


// const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
//   // options like actionSanitizer, stateSanitizer
// ));

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.querySelector('#root'));