import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as listDispatch from '../../actions/listActions';

function List ({ contacts, selectPerson }: any) {
  const names = contacts.map((item: any, index: number) => 
    <li key={index} onClick={() => selectPerson(index)}> {item.firstName} {item.lastName} </li>
  );
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
