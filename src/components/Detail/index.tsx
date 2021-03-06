import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';
import { Contact } from './../../data/';

interface DetailProps {
    id: number;
    selected: Contact;
    deletePerson: (id: number) => void;
}

interface DetailState {
    list: { 
        id: number ,
        selected: Contact
    };
}

function mapStateToProps (state: DetailState) {
    return {
        selected: state.list.selected,
        id: state.list.id
    };
}

const mapDispatchToProps = (dispatch: Dispatch<listDispatch.DeleteContact>) => {
    return {
        deletePerson: (index: number) => dispatch(listDispatch.deleteContact(index))
    };
};

function Detail({ selected, deletePerson, id }: DetailProps) {
    const { firstName, lastName, email, bDay, mobile, address } = selected;
    return (
        <div className="container"> 
            <div className="detail">
                <div className="personalName"> {firstName || ''} {lastName || ''} </div> 
                <div className="personalDetail"> mobile: {mobile || ''} <hr /> </div>
                <div className="personalDetail"> email: {email || ''}  <hr /> </div>
                <div className="personalDetail"> birthday: {bDay || ''}  <hr /> </div>
                <div className="personalDetail"> address: {address || ''} </div>
            </div>
            <div className="footer">
                <div className="addBtn"> <Link to="/add"> <button> + </button> </Link> </div>
                <div className="edtBtn"> <Link to="/edit"> <button> Edit </button> </Link> </div>
                <div className="dltBtn"> 
                    <Link to="/"> <button onClick={() => deletePerson(id)}> Delete </button> </Link>  
                </div>
            </div>
        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);