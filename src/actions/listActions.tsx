export const SELECT_CONTACT = 'SELECT_CONTACT';
export type SELECT_CONTACT = typeof SELECT_CONTACT;

export interface SelectContact {
    type: SELECT_CONTACT;
    id: number;
}

export type ListAction = SelectContact;

export function selectContact(index: number): SelectContact {
    return {
        type: SELECT_CONTACT,
        id: index
    };
}

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export type UPDATE_CONTACT = typeof UPDATE_CONTACT;

export interface UpdateContact {
    type: UPDATE_CONTACT;
}

export type EditAction = UpdateContact;

export function updateContact(e: any) {
    return {
        type: UPDATE_CONTACT,
        change: e.target.value,
        id: e.target.id
    };
}