import { ArticleActionTypes, ArticleListParams, ArticleState, CHANGE_PARAMS, INIT_PAGE } from './types';

const defaultParams: ArticleListParams = {
    page: 1,
    limit: 20,
    sort: 'date',
    order: 'desc',
    filter: null,
    year: null,
    dateAfter: null,
    dateBefore: null,
}

const initialState: ArticleState = {
    group: null,
    params: defaultParams,

    items: [],
    totalItems: 0,
    isLoading: false,
    hasLoadingError: false,
}

export default function articlesReducer(state = initialState, action: ArticleActionTypes): ArticleState {
    switch (action.type) {
        case INIT_PAGE:
            return state;

        case CHANGE_PARAMS:
            return state;

        default:
            return state;
    }
}
