import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import reducers from './redux/reducers';

import {createStore} from 'redux';
import {Provider} from 'react-redux';



if (module.hot) {
	// module.hot.accept()
}

let store = createStore(reducers, window.__INITIAL_STATE__);

ReactDOM.hydrate((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.querySelector('#root'));
