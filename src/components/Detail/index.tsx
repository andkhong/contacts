import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Detail(props: any) {
    const { selected } = props;
    const { firstName, lastName, email, bDay, mobile, address } = selected;
    return (
        <div className="detail"> 
            <div className="personalName"> {firstName || ''} {lastName || ''} </div> 
            <div className="personalDetail"> phone {mobile || ''} <hr /> </div>
            <div className="personalDetail"> email {email || ''}  <hr /> </div>
            <div className="personalDetail"> birthday {bDay || ''}  <hr /> </div>
            <div className="personalDetail"> address {address || ''} </div>
            <div className="footer">
                <Link to="/add"> <button> + </button> </Link>
                <Link to="/edit"> <button> Edit </button> </Link>
            </div>
        </div>
    );
}

function mapStateToProps (state: any) {
  return {
    selected: state.list.selected
  };
}

export default connect(
    mapStateToProps
)(Detail);
