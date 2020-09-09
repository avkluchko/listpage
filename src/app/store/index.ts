import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import saga from './saga';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middlewares = [sagaMiddleware];

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    // @ts-ignore
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        // @ts-ignore
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    sagaMiddleware.run(saga);

    return store;
};
