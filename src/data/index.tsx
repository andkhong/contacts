export interface Contact {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  bDay: string;
  address: string;
}

export const contacts: Contact[] = [
  {
      firstName: 'John',
      lastName: 'Doe', 
      mobile: '333 4567111',
      email: 'john@gmail.com',
      bDay: '',
      address: ''
    },
  {
      firstName: 'Alice', 
      lastName: 'Smith', 
      mobile: '333 45667933',
      email: 'alex@gmail.com',
      bDay: '',
      address: ''
    },
  {
      firstName: 'Mark', 
      lastName: 'Joseph', 
      mobile: '333 33446776',
      email: 'mark@gmail.com',
      bDay: '',
      address: ''
    },
  {
      firstName: 'Marion', 
      lastName: 'Justin', 
      mobile: '333 4343433345',
      email: 'marion@gmail.com',
      bDay: '',
      address: ''
    }
];