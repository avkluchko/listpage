import { ArticleActionTypes, ArticleListParams, ArticleState, CHANGE_PARAMS, INIT_PAGE } from './types';
import { replaceParams, subtractParams } from '../../../helpers/object';

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
    query: {},

    items: [],
    totalItems: 0,
    isLoading: false,
    hasLoadingError: false,
}

export default function articlesReducer(state = initialState, action: ArticleActionTypes): ArticleState {
    switch (action.type) {
        case INIT_PAGE:
            const { group, urlParams } = action.payload;

            const params = replaceParams(defaultParams, urlParams) as ArticleListParams;

            console.log('replaceParams params: ', params);

            // compare this.params and params

            const query = subtractParams(params, defaultParams);

            // or compare this.query and query

            console.log('subtractParams query: ', query);

            return {
                ...state,
                group,
                params,
                query
            };

        case CHANGE_PARAMS:
            return state;

        default:
            return state;
    }
}
