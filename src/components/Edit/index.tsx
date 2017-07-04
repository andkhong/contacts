import * as React from 'react';
import { connect } from 'react-redux';
// import * as listDispatch from '../../actions/listActions';

interface EditProps {
    selected: {
        id: number;
        firstName: string;
        lastName: string;
        mobile: string;
        email: string;
        bDay: string;
        address: string;
    };
    // handleChange?: () => void;
}

function Edit ({ selected }: EditProps) {
  if (selected) {
      let { firstName, lastName, mobile, email, bDay, address } = selected;
      return (
          <div className="edit"> 
              <input name="firstName" placeholder="First" value={firstName || ''} />
              <input name="lastName" placeholder="Last" value={lastName || ''} />
              <input name="mobile" placeholder="Phone" value={mobile || ''} />
              <input name="email" placeholder="Email" value={email || ''} />
              <input name="bDay" placeholder="month/day/year" value={bDay || ''} />
              <input name="address" placeholder="Address" value={address || ''} />
          </div>
      );
  }
  return <div />;
}

function mapStateToProps (state: any) {
    return {
        selected: state.list.selected
    };
}

// function mapDispatchToProps (dispatch: Dispatch<listDispatch.UpdateContact>) {
//     return {
//         handleChange: (e: any) => dispatch(listDispatch.updateContact(e))
//     };
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Edit);