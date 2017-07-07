import { contacts } from './../data/';
import { ListAction, SELECT_CONTACT, UPDATE_CONTACT, ADD_CONTACT, DELETE_CONTACT } from '../actions/listActions';
import { AppState } from './../interfaces/';

function listReducer(state: AppState, action: ListAction): AppState {
    switch (action.type) {
        case SELECT_CONTACT:
            return Object.assign({}, state, {
                selected: {
                    ...state.contacts[action.id], 
                    id: action.id 
                },
            });
        case UPDATE_CONTACT: 
            let index = action.contact.id;
            return Object.assign({}, state, {
                contacts: [
                    ...state.contacts.slice(0, index), 
                    action.contact, 
                    ...state.contacts.slice(index+1)
                ],
                selected: action.contact
            });
        case ADD_CONTACT:
            return Object.assign({}, state, {
                contacts: [
                    ...state.contacts, 
                    action.contact
                ],
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