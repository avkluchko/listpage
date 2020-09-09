import { all } from 'redux-saga/effects';

import systemSaga from '../../features/system/saga';

export default function* saga() {
    yield all([
        systemSaga(),
    ]);
}
