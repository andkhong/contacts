import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as listDispatch from '../../actions/listActions';
import { SelectedProps } from './../../interfaces/';

interface DetailProps {
    selected: SelectedProps;
    deletePerson: (id: number) => void;
}

interface DetailState {
    list: { selected: SelectedProps; };
}

function mapStateToProps (state: DetailState) {
  return {
    selected: state.list.selected
  };
}

const mapDispatchToProps = (dispatch: Dispatch<listDispatch.DeleteContact>) => {
    return {
        deletePerson: (index: number) => dispatch(listDispatch.deleteContact(index))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);

function Detail({ selected, deletePerson }: DetailProps) {
    const { id, firstName, lastName, email, bDay, mobile, address } = selected;
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
                <Link to="/"> <button onClick={() => deletePerson(id)}> Delete </button> </Link>
            </div>
        </div>
    );
}