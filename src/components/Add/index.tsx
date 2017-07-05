import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';

function mapStateToProps (state: any) {
    return {};
}

const mapDispatchToProps = (dispatch: Dispatch<listDispatch.AddContact>) => {
    return {
        addPerson: (index: number) => dispatch(listDispatch.addContact(index))
    };
};

class Add extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            bDay: '',
            address: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { addPerson } = this.props;
        return (
            <div className="Add"> 
                <input onChange={this.handleChange} name="firstName" placeholder="First" />
                <input onChange={this.handleChange} name="lastName" placeholder="Last" />
                <input onChange={this.handleChange} name="mobile" placeholder="Phone" />
                <input onChange={this.handleChange} name="email" placeholder="Email" />
                <input onChange={this.handleChange} name="bDay" placeholder="month/day/year" />
                <input onChange={this.handleChange} name="address" placeholder="Address" />
                <div className="footer">
                    <Link to="/"> <button onClick={() => addPerson(this.state)}> Done </button> </Link>
                </div>
            </div>
            );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);
