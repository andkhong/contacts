import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';

class Edit extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = props.selected;
        this.handleChange = this.handleChange.bind(this);
        this.editContact = this.editContact.bind(this);
    }

    handleChange(e: any) {
        this.setState({ [e.target.name]: e.target.value });
    }

    editContact(): void {
        this.props.updateContact(this.state);
    }

    render() {
        const { firstName, lastName, mobile, email, bDay, address } = this.state;
        return (
            <div className="edit"> 
                <input onChange={this.handleChange} name="firstName" placeholder="First" value={firstName} />
                <input onChange={this.handleChange} name="lastName" placeholder="Last" value={lastName} />
                <input onChange={this.handleChange} name="mobile" placeholder="Phone" value={mobile} />
                <input onChange={this.handleChange} name="email" placeholder="Email" value={email} />
                <input onChange={this.handleChange} name="bDay" placeholder="month/day/year" value={bDay} />
                <input onChange={this.handleChange} name="address" placeholder="Address" value={address} />
                <div className="footer">
                    <Link to="/add"> <button> + </button> </Link>
                    <Link to="/detail"> <button onClick={this.editContact}> Done </button> </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state: any) {
    return {
        selected: state.list.selected
    };
}

const mapDispatchToProps = (dispatch: Dispatch<listDispatch.UpdateContact>) => {
    return {
        updateContact: (list: any) => dispatch(listDispatch.updateContact(list))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);
