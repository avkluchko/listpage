import { createSelector } from 'reselect';

import { RootState } from '../../app/store/reducers';
import { SystemState, SET_PAGE_TITLE, SystemActionTypes } from './types';

const initialState: SystemState = {
    title: null,
};

export default function systemReducer(state = initialState, action: SystemActionTypes): SystemState {
    switch (action.type) {
        case SET_PAGE_TITLE:
            return {
                ...state,
                title: action.payload || null
            };

        default:
            return state;
    }
}

const selectSystemState = createSelector(
    (state: RootState) => state.system,
    (state: SystemState) => state
);

export const selectTitle = createSelector(
    selectSystemState,
    (state: SystemState) => state.title
);


