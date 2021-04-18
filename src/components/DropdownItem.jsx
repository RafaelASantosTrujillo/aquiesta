import React from 'react';
import { Link } from 'react-router-dom';

const DropdownItem = (props) => {
    return (
        <li><Link className="dropdown-item" to="/directory">{props.state}</Link></li>
    )
}



export default DropdownItem;