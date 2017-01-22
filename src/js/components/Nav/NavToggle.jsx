import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavToggle extends Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand hidden-sm">WebSiteName</Link>
            </div>
        );
    }
}
