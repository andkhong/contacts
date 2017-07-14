import { Contact } from './../data/';

export const SELECT_CONTACT = 'SELECT_CONTACT';
export type SELECT_CONTACT = typeof SELECT_CONTACT;

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export type UPDATE_CONTACT = typeof UPDATE_CONTACT;

export const ADD_CONTACT = 'ADD_CONTACT';
export type ADD_CONTACT = typeof ADD_CONTACT;

export const DELETE_CONTACT = 'DELETE_CONTACT';
export type DELETE_CONTACT = typeof DELETE_CONTACT;

export interface SelectContact {
    type: SELECT_CONTACT;
    id: number;
}

export interface UpdateContact {
    type: UPDATE_CONTACT;
    contact: Contact;
    id: number;
}

export interface AddContact {
    type: ADD_CONTACT;
    contact: Contact;
}

export interface DeleteContact {
    type: DELETE_CONTACT;
    id: number;
}

export type ListAction = SelectContact | UpdateContact | AddContact | DeleteContact;

export function selectContact(index: number): SelectContact {
    return {
        type: SELECT_CONTACT,
        id: index
    };
}

export function updateContact(update: Contact, id: number): UpdateContact {
    return {
        type: UPDATE_CONTACT,
        contact: update,
        id
    };
}

export function addContact(contact: Contact): AddContact {
    return {
        type: ADD_CONTACT,
        contact
    };
}

export function deleteContact(index: number): DeleteContact {
    return {
        type: DELETE_CONTACT,
        id: index
    };
}