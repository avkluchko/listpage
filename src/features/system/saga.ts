import { takeLatest } from 'redux-saga/effects';

import { SET_PAGE_TITLE, SetPageTitleAction } from './types';

export default function* systemSaga() {
    yield takeLatest(SET_PAGE_TITLE, handleInitPage);
}

function* handleInitPage(action: SetPageTitleAction) {
    document.title = yield createTitle('ListPageApp', action.payload);
}

const createTitle = (baseName: string, title?: string | null) => {
    if (title && title.length > 0) {
        return `${title} – ${baseName}`
    }

    return baseName;
};
