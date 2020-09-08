import React from 'react';
import { render } from 'react-dom';

import App from './app/App';
import { configureStore } from './app/store';
import { Provider } from 'react-redux';

const store = configureStore();

const renderApp = () =>
    render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

// @ts-ignore
if (process.env.NODE_ENV !== 'production' && module.hot) {
    // @ts-ignore
    module.hot.accept('./app/App', renderApp)
}

renderApp();
