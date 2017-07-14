import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';

interface AddState {
    id: number;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    bDay: string;
    address: string;
}

function mapStateToProps (state: { list: { contacts: AddState[] }}) {
    return {
        id: state.list.contacts.length
    };
}

function mapDispatchToProps(dispatch: Dispatch<listDispatch.AddContact>) {
    return {
        addPerson: (contact: AddState) => dispatch(listDispatch.addContact(contact))
    };
}

class Add extends React.Component<any, AddState> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: this.props.id,
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            bDay: '',
            address: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.checkState = this.checkState.bind(this);
    }

    handleChange(e: any) {
        this.setState({ [e.target.name]: e.target.value });
    }

    checkState() {
        const { addPerson } = this.props;
        for (let key in this.state) {
            if (this.state[key] !== '') {
                addPerson(this.state);
                break;
            }
        }
    }

    render() {
        return (
            <div className="container"> 
                <div className="add">
                    <div className="addName"> 
                        <input onChange={this.handleChange} name="firstName" placeholder="First" /> 
                        <input onChange={this.handleChange} name="lastName" placeholder="Last" />
                    </div>
                    <div className="addDetail">
                         mobile: <input onChange={this.handleChange} name="mobile" placeholder="Phone" /> 
                        <hr /> 
                         home: <input onChange={this.handleChange} name="email" placeholder="Email" /> 
                        <hr /> 
                         birthday: <input onChange={this.handleChange} name="bDay" placeholder="month/day/year" /> 
                        <hr /> 
                         address <input onChange={this.handleChange} name="address" placeholder="Address" /> 
                        <hr /> 
                    </div>
                </div>
                <div className="footer">
                    <div className="addBtn"> <Link to="/add"> <button> + </button> </Link> </div>
                    <div className="edtBtn"> 
                        <Link to="/"> <button onClick={this.checkState}> Done </button> </Link> 
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);
