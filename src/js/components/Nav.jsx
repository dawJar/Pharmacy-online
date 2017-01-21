import React, {Component} from 'react';

import '../../sass/componentStyles/nav.scss';

import NavToggle from './Nav/NavToggle';
import NavLinks from './Nav/NavLinks';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <NavToggle/>
                    <NavLinks/>
                </div>
            </nav>
        );
    }
}
