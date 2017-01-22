import React, {Component} from 'react';
import {Link} from 'react-router';


export default class NavLink extends Component {

    constructor(props) {
        super(props);
        this.handleClickLink = this.handleClickLink.bind(this);
    }

    handleClickLink() {
        this.props.onClickLink(this.props.index);
    }

    render() {
        const {index, isActive, activeClassName, linkName, linkPath, children} = this.props;

        return (
            <li className={isActive ? activeClassName || "active" : ""}>
              <Link to={linkPath}
                  onClick={this.handleClickLink}>
                  {children || linkName}
              </Link>
            </li>
        );
    }
}
