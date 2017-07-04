import * as React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class Add extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e: any) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
        <div className="Add"> 
            <input onChange={this.handleChange} name="firstName" placeholder="First" />
            <input onChange={this.handleChange} name="lastName" placeholder="Last" />
            <input onChange={this.handleChange} name="mobile" placeholder="Phone" />
            <input onChange={this.handleChange} name="email" placeholder="Email" />
            <input onChange={this.handleChange} name="bDay" placeholder="month/day/year" />
            <input onChange={this.handleChange} name="address" placeholder="Address" />

            <div className="footer">
                <Link to="/add"> <button> + </button> </Link>
                <Link to="/detail"> <button> Done </button> </Link>
            </div>
        </div>
        );
    }
}

// function mapStateToProps (state: any) {

// }

// export default connect(
//     mapStateToProps
// )(Add);
