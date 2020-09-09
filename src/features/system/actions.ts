import { SET_PAGE_TITLE, SystemActionTypes } from './types';

export function setPageTitle(title?: string | null): SystemActionTypes {
    return {
        type: SET_PAGE_TITLE,
        payload: title
    }
}
