import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';
import { SelectedProps } from './../../interfaces/';

interface ListProps {
  contacts: SelectedProps[];
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
        .filter((item: SelectedProps) => (item.firstName + item.lastName).toLowerCase().includes(search.toLowerCase()))
        .sort((a: SelectedProps, b: SelectedProps) => a.firstName.localeCompare(b.firstName))
        .map((item: SelectedProps) => (
          <li key={item.id} onClick={() => selectPerson(item.id)}> 
            <Link style={linkStyle} to="/detail">{item.firstName} {item.lastName}</Link>
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

// function List ({ children, contacts, selectPerson }: any) {
//   const names = contacts.sort((a: any, b: any) => a.firstName > b.firstName ? 1 : -1)
//     .map((item: SelectedProps, index: number) => (
//       <li key={index} onClick={() => selectPerson(index)}> 
//         <Link style={linkStyle} to="/detail">{item.firstName} {item.lastName}</Link>
//       </li>
//   ));
//   return <div className="list"> {names} </div>;
// }