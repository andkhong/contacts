import * as React from 'react';

function List (props: any) {
  const { contacts } = props;
  const names = contacts.map((item: any, index: number) => 
    <li key={index}> {item.firstName} {item.lastName} </li>
  );
  return <div className="list"> {names} </div>;
}

import { connect, Dispatch } from 'react-redux';
import * as listDispatch from '../../actions/listActions';

const mapStateToProps = (state: any) => ({
  contacts: state.list.contacts
})

function mapDispatchToProps(dispatch: Dispatch<listDispatch.SelectContact>) {
    return {
        selectPerson: (index: number) => dispatch(listDispatch.selectContact(index))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
