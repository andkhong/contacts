import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';
import { Contact } from './../../data/';

interface EditState {
    list: { 
        selected: Contact,
        id: number
     };
}

interface Change {
    target: {
        name: string,
        value: string
    };
}

function mapStateToProps (state: EditState) {
    return {
        selected: state.list.selected,
        id: state.list.id
    };
}

const mapDispatchToProps = (dispatch: Dispatch<listDispatch.UpdateContact>) => {
    return {
        updateContact: (list: Contact, id: number) => dispatch(listDispatch.updateContact(list, id)),
        deletePerson: (index: number) => dispatch(listDispatch.deleteContact(index))
    };
};

class Edit extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = props.selected;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: Change): void {
        this.setState({ [e.target.name]: e.target.value });
    }

    editContact(id: number): void {
        this.props.updateContact(this.state, id);
    }

    render() {
        const { firstName, lastName, mobile, email, bDay, address } = this.state;
        const { id } = this.props;
        return (
            <div className="container">
                <div className="edit">
                    <div className="editName"> 
                        <input onChange={this.handleChange} name="firstName" placeholder="First" value={firstName} />
                        <input onChange={this.handleChange} name="lastName" placeholder="Last" value={lastName} />
                    </div>
                    <div className="editDetail">
                        mobile: <input onChange={this.handleChange} name="mobile" placeholder="Phone" value={mobile} /> <hr />
                        email: <input onChange={this.handleChange} name="email" placeholder="Email" value={email} /> <hr />
                        birthday: <input onChange={this.handleChange} name="bDay" placeholder="month/day/year" value={bDay} /> <hr />
                        address: <input onChange={this.handleChange} name="address" placeholder="Address" value={address} />
                    </div>
                </div>
                <div className="footer">
                    <div className="addBtn"> <Link to="/add"> <button> + </button> </Link> </div>
                    <div className="edtBtn"> 
                        <Link to="/detail"> <button onClick={() => this.editContact(id)}> Done </button> </Link>
                    </div>
                    <div className="dltBtn"> 
                        <Link to="/"> <button onClick={() => this.props.deletePerson(id)}> Delete </button> </Link>
                    </div> 
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);