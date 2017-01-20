import React, {Component} from 'react';

export default class NavToggle extends Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
        );
    }
}
