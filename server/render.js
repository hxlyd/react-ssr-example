import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from '../client/app';
import reducers from '../client/redux/reducers';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

export default function serverRender() {
    return (req, res) => {
        if (!req.url.includes('static')) {
            let context = {};
            let store = createStore(reducers, {
                app: {
                    tag: req.path + '_server'
                }
            });

            let markup = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <App/>
                    </StaticRouter>
                </Provider>
            );

            res.status(200).render('index.pug', {
                markup,
                preloadedState: JSON.stringify(store.getState())
            });
        }

    };
}
