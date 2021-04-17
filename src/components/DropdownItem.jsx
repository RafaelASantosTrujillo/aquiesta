import React from 'react';

const DropdownItem = (props) => {
    return (
        <li><a className="dropdown-item" href="https://google.com">{props.state}</a></li>
    )
}



export default DropdownItem;