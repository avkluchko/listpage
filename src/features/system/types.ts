export const SET_PAGE_TITLE = 'SYSTEM/SET_PAGE_TITLE';

export interface SetPageTitleAction {
    type: typeof SET_PAGE_TITLE;
    payload?: string | null;
}

export type SystemActionTypes = SetPageTitleAction;

export interface SystemState {
    title: string | null;
}
