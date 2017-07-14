import { contacts, Contact } from './../data/';
import { ListAction, SELECT_CONTACT, UPDATE_CONTACT, ADD_CONTACT, DELETE_CONTACT } from '../actions/listActions';

interface AppState {
    contacts: Contact[];
    selected: null;
    id: null;
}

export function listReducer(state: AppState, action: ListAction): AppState {
    switch (action.type) {
        case SELECT_CONTACT:
            return Object.assign({}, state, {
                id: action.id,
                selected: {
                    ...state.contacts[action.id]
                }
            });
        case UPDATE_CONTACT: 
            return Object.assign({}, state, {
                selected: action.contact,
                contacts: [
                    ...state.contacts.slice(0, action.id), 
                    action.contact,
                    ...state.contacts.slice(action.id + 1)
                ]
            });
        case ADD_CONTACT:
            return Object.assign({}, state, {
                selected: null,
                id: null, 
                contacts: [
                    ...state.contacts, 
                    action.contact
                ]
            });
        case DELETE_CONTACT:
            return Object.assign({}, state, {
                selected: null,
                id: null,
                contacts: [
                    ...state.contacts.slice(0, action.id),
                    ...state.contacts.slice(action.id + 1)
                ]
            });
        default:
            return { contacts: contacts, selected: null, id: null };
    }
}