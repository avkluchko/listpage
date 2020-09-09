import { ArticleActionTypes, CHANGE_PARAMS, INIT_PAGE } from './types';

export function initPage(group: string, urlParams: object): ArticleActionTypes {
    return {
        type: INIT_PAGE,
        payload: {
            group,
            urlParams
        }
    }
}

export function changeParams(params: object) {
    return {
        type: CHANGE_PARAMS,
        payload: params
    }
}
