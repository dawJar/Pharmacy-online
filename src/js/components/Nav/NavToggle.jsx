import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ToggleBtn from './ToggleBtn';

const NavToggle = () => (
    <div className="navbar-header">
        <ToggleBtn/>
        <Link to="/" className="navbar-brand hidden-sm">
            WebSiteName
        </Link>
    </div>
);

export default NavToggle;

// NavToggle.propTypes = {
//     actions: PropTypes.object.isRequired
// }
