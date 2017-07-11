import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';
import { SelectedProps } from './../../interfaces/';

interface ListProps {
  contacts: any[];
  selectPerson: (index: number) => void;
}

const mapStateToProps = (state: any) => ({
  contacts: state.list.contacts
});

const mapDispatchToProps = (dispatch: Dispatch<listDispatch.SelectContact>) => {
    return {
        selectPerson: (index: number) => dispatch(listDispatch.selectContact(index))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

function List ({ contacts, selectPerson }: ListProps) {
  const names = contacts.sort((a, b) => a.firstName > b.firstName ? 1 : -1)
    .map((item: SelectedProps, index: number) => (
      <li key={index} onClick={() => selectPerson(index)}> 
        <Link style={linkStyle} to="/detail">{item.firstName} {item.lastName}</Link>
      </li>
  ));
  return <div className="list"> {names} </div>;
}

// Styling Links are awkward, Inline style is recommended in this case
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  cursor: 'default'
};