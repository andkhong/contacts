export const SELECT_CONTACT = 'SELECT_CONTACT';
export type SELECT_CONTACT = typeof SELECT_CONTACT;

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export type UPDATE_CONTACT = typeof UPDATE_CONTACT;

export interface SelectContact {
    type: SELECT_CONTACT;
    id: number;
}

export interface UpdateContact {
    type: UPDATE_CONTACT;
    contact: any;
}

export type ListAction = SelectContact | UpdateContact;

export function selectContact(index: number): SelectContact {
    return {
        type: SELECT_CONTACT,
        id: index
    };
}

export function updateContact(update: any) {
    return {
        type: UPDATE_CONTACT,
        contact: update
    };
}