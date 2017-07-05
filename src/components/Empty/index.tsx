import * as React from 'react';
import { Link } from 'react-router-dom';

function Empty() {
    return (
        <div className="container"> 
            <div className="footer">
                <div className="addBtn"> <Link to="/add"> <button> + </button> </Link> </div>
            </div>
        </div>
    );
}

export default Empty;