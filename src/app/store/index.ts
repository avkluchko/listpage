import { applyMiddleware, createStore, compose } from 'redux';

import rootReducer from './reducers';

export const configureStore = () => {
    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middlewares: any = [];

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    // @ts-ignore
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        // @ts-ignore
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store;
};
