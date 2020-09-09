import { all } from 'redux-saga/effects';

import articlesSaga from '../../features/articles/store/saga';

export default function* saga() {
    yield all([
        articlesSaga(),
    ]);
}
