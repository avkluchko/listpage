import { combineReducers } from 'redux';

import articlesReducer from '../../features/articles/store/reducer';
import systemReducer from '../../features/system/reducer';

const reducers = combineReducers({
    articles: articlesReducer,
    system: systemReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
