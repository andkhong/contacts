import * as React from 'react';
import { connect } from 'react-redux';

function Detail(props: any){
    let { selected } = props;
    if (selected) {
        const { firstName, lastName, email, bDay, mobile, address } = selected;
        return (
            <div className="detail"> 
                <div className="personalName"> {firstName || ''} {lastName || ''} </div> 
                <div className="personalDetail"> phone {mobile || ''} <hr /> </div>
                <div className="personalDetail"> email {email || ''}  <hr /> </div>
                <div className="personalDetail"> birthday {bDay || ''}  <hr /> </div>
                <div className="personalDetail"> address {address || ''} </div>
            </div>
        );
    } 
    return <div />;
}

function mapStateToProps (state: any) {
  return {
    selected: state.list.selected
  }
}

export default connect(
    mapStateToProps
)(Detail);