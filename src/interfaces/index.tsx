export interface SelectedProps {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bDay: string;
    mobile: string;
    address: string;
}

export interface AppState {
    contacts: object[];
    selected: null;
}
