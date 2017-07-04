import { ListAction, SELECT_CONTACT } from '../actions/listActions';

interface ListState {
    contacts: any[];
    selected: null;
}

import { contacts } from './../data/';

function listReducer(state: ListState, action: ListAction): ListState {
    switch (action.type) {
        case SELECT_CONTACT:
            return Object.assign({}, state, {
                selected: {...state.contacts[action.id], id: action.id },
            });
        default:
            return { contacts: contacts, selected: null };
    }
}

export default listReducer;