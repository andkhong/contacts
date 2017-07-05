import { contacts } from './../data/';
import { ListAction, SELECT_CONTACT, UPDATE_CONTACT, ADD_CONTACT, DELETE_CONTACT } from '../actions/listActions';
import { AppState } from './../interfaces/';

function listReducer(state: AppState, action: ListAction): AppState {
    switch (action.type) {
        case SELECT_CONTACT:
            return Object.assign({}, state, {
                selected: {...state.contacts[action.id], id: action.id },
            });
        case UPDATE_CONTACT: 
            let upCopy = [...state.contacts];
            upCopy[action.contact.id] = action.contact;
            return Object.assign({}, state, {
                contacts: upCopy,
                selected: action.contact
            });
        case ADD_CONTACT:
            let addCopy = [...state.contacts];
            addCopy.push(action.contact);
            return Object.assign({}, state, {
                contacts: addCopy,
                selected: null
            });
        case DELETE_CONTACT:
            let delCopy = state.contacts.filter((item, index) => index !== action.id);
            return Object.assign({}, state, {
                contacts: delCopy,
                selected: null
            });
        default:
            return { contacts: contacts, selected: null };
    }
}

export default listReducer;