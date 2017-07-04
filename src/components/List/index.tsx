import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as listDispatch from '../../actions/listActions';
import { Link } from 'react-router-dom';

interface ListProps {
  contacts: any[];
  selectPerson: (index: number) => void;
}

function List ({ contacts, selectPerson }: ListProps) {
  const names = contacts.sort((a, b) => a.firstName > b.firstName ? 1 : -1)
    .map((item: any, index: number) => (
      <li key={index} onClick={() => selectPerson(index)}> 
        <Link to="/detail">{item.firstName} {item.lastName}</Link>
      </li>
  ));
  return <div className="list"> {names} </div>;
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
