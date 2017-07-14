import { contacts } from './../data/';
import { ListAction, SELECT_CONTACT, UPDATE_CONTACT, ADD_CONTACT, DELETE_CONTACT } from '../actions/listActions';
import { AppState, SelectedProps } from './../interfaces/';

export function listReducer(state: AppState, action: ListAction): AppState {
    switch (action.type) {
        case SELECT_CONTACT:
            return Object.assign({}, state, {
                selected: {
                    ...state.contacts[action.id], 
                    id: action.id 
                }
            });
        case UPDATE_CONTACT: 
            return Object.assign({}, state, {
                selected: action.contact,
                contacts: [
                    ...state.contacts.slice(0, action.contact.id), 
                    action.contact,
                    ...state.contacts.slice(action.contact.id + 1)
                ]
            });
        case ADD_CONTACT:
            return Object.assign({}, state, {
                selected: null,
                contacts: [
                    ...state.contacts, 
                    action.contact
                ]
            });
        case DELETE_CONTACT:
            let delCopy = [...state.contacts]
                .filter((item, index) => index !== action.id)
                .map((item: SelectedProps, index) => Object.assign({}, item, { id: index }));
            return Object.assign({}, state, {
                contacts: delCopy,
                selected: null
            });
        default:
            return { contacts: contacts, selected: null };
    }
}