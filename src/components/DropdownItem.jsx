import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DropdownItem = ({name}) => {
    return (
        <li><Link className="dropdown-item" to="/directory">{name}</Link></li>
    )
}

DropdownItem.propTypes = {
    name: PropTypes.string.isRequired
}

DropdownItem.defaultProps = {
    name: ''
}


export default DropdownItem;