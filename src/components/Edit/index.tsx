import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';
import { SelectedProps } from './../../interfaces/';

interface EditState {
    list: { selected: SelectedProps; };
}

function mapStateToProps (state: EditState) {
    return {
        selected: state.list.selected
    };
}

const mapDispatchToProps = (dispatch: Dispatch<listDispatch.UpdateContact>) => {
    return {
        updateContact: (list: SelectedProps) => dispatch(listDispatch.updateContact(list)),
        deletePerson: (index: number) => dispatch(listDispatch.deleteContact(index))
    };
};

class Edit extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = props.selected;
        this.handleChange = this.handleChange.bind(this);
        this.editContact = this.editContact.bind(this);
    }

    handleChange(e: any): void {
        this.setState({ [e.target.name]: e.target.value });
    }

    editContact(): void {
        this.props.updateContact(this.state);
    }

    render() {
        const { id, firstName, lastName, mobile, email, bDay, address } = this.state;
        return (
            <div className="edit"> 
                <form onSubmit={this.editContact}>
                    <input onChange={this.handleChange} name="firstName" placeholder="First" value={firstName} />
                    <input onChange={this.handleChange} name="lastName" placeholder="Last" value={lastName} />
                    <label> mobile </label> 
                    <input onChange={this.handleChange} name="mobile" placeholder="Phone" value={mobile} />
                    <label> email </label> 
                    <input onChange={this.handleChange} name="email" placeholder="Email" value={email} />
                    <label> birthday </label> 
                    <input onChange={this.handleChange} name="bDay" placeholder="month/day/year" value={bDay} />
                    <label> address </label> 
                    <input onChange={this.handleChange} name="address" placeholder="Address" value={address} />
                </form>
                <div className="footer">
                    <Link to="/add"> <button> + </button> </Link> 
                    <Link to="/detail"> <button onClick={this.editContact}> Done </button> </Link>
                    <Link to="/"> <button onClick={() => this.props.deletePerson(id)}> Delete </button> </Link> 
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);