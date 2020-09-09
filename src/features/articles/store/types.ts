export const INIT_PAGE = 'ARTICLE/INIT_PAGE';
export const CHANGE_PARAMS = 'ARTICLE/CHANGE_PARAMS';

export interface InitPageAction {
    type: typeof INIT_PAGE;
    payload: {
        group: string;
        urlParams: object;
    }
}

export interface ChangeParamsAction {
    type: typeof CHANGE_PARAMS;
    payload: object;
}

export type ArticleActionTypes = InitPageAction | ChangeParamsAction;

export interface ArticleState extends ListState<string> {
    group: string | null;
    params: ArticleListParams;
}

export interface ListState<T> {
    items: T[];
    totalItems: number;
    isLoading: boolean;
    hasLoadingError: boolean;
}

export interface ArticleListParams extends PaginatedListParams, OrderedListParams {
    filter: string | null;
    year: number | null;
    dateAfter: string | null;
    dateBefore: string | null;
}

export interface PaginatedListParams {
    page: number;
    limit: number;
}

export interface OrderedListParams {
    sort: string;
    order: 'asc' | 'desc';
}
