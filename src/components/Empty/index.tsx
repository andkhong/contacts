import * as React from 'react';
import { Link } from 'react-router-dom';

function Empty() {
    return (
        <div> 
            <div className="footer">
                <Link to="/add"> <button> Add </button> </Link>
            </div>
        </div>
    );
}

export default Empty;