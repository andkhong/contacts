import * as React from 'react';

function Footer(props: any) {
    console.log("Footer", props);
    return (
        <div className="footer">
            <button> + </button>
            <button> Add </button>
        </div>
    );
}

export default Footer;
