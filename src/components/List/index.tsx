import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';
import { Contact } from './../../data/';

interface ListProps {
  contacts: Contact[];
  selectPerson: (index: number) => void;
}

interface ListState {
  search: string;
}

function mapStateToProps (state: { list: ListProps }) {
  return {
    contacts: state.list.contacts
  };
}

const mapDispatchToProps = (dispatch: Dispatch<listDispatch.SelectContact>) => {
  return {
      selectPerson: (index: number) => dispatch(listDispatch.selectContact(index))
  };
};

class List extends React.Component<any, ListState> {
  constructor(props: any) {
    super(props);
    this.state = { search: '' };
  }

  buildList() {
    const { contacts, selectPerson } = this.props;
    const { search } = this.state;
    return contacts
        .filter((contact: Contact, index: number) => ((contact.firstName + contact.lastName)
        .toLowerCase().includes(search.toLowerCase())))
        .sort((a: Contact, b: Contact) => a.firstName.localeCompare(b.firstName))
        .map((contact: Contact, index: number) => (
          <li key={index} onClick={() => selectPerson(contacts.indexOf(contact))}> 
            <Link style={linkStyle} to="/detail">{contact.firstName} {contact.lastName}</Link>
          </li>
        ));
  }

  render() {
    return (
      <div className="list"> 
        <input
          type="search"
          placeholder="Search..."
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        {this.buildList()}
      </div>
    );
  }

}

// Styling Links are awkward, Inline style is recommended in this case
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  cursor: 'default'
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
