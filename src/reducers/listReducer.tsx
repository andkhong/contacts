import { 
    ListAction, 
    SELECT_CONTACT, 
    UPDATE_CONTACT,
    ADD_CONTACT,
    DELETE_CONTACT
} from '../actions/listActions';

interface ListState {
    contacts: object[];
    selected: null;
}

import { contacts } from './../data/';

function listReducer(state: ListState, action: ListAction): ListState {
    switch (action.type) {
        case SELECT_CONTACT:
            return Object.assign({}, state, {
                selected: {...state.contacts[action.id], id: action.id },
            });
        case UPDATE_CONTACT: 
            let copy = [...state.contacts];
            let index = action.contact.id;
            delete action.contact.id;
            copy[index] = action.contact;
            return Object.assign({}, state, {
                contacts: copy,
                selected: action.contact
            });
        case ADD_CONTACT:
            copy = [...state.contacts];
            copy.push(action.contact);
            return Object.assign({}, state, {
                contacts: copy,
                selected: null
            });
        case DELETE_CONTACT:
            copy = state.contacts.filter((item, index) => index !== action.id);
            return Object.assign({}, state, {
                contacts: copy,
                selected: null
            });
        default:
            return { contacts: contacts, selected: null };
    }
}

export default listReducer;