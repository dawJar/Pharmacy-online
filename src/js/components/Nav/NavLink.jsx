import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavLink extends Component {

    constructor(props) {
        super(props);
        this.handleClickLink = this.handleClickLink.bind(this);
    }

    handleClickLink() {
        // console.log(this.props.index);
        this.props.onClickLink(this.props.index);
    }

    render() {
        const {index, linkName, linkPath, isActive} = this.props;
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={linkPath}
                    onClick={this.handleClickLink}>
                    {linkName}
                </Link>
            </li>
        );
    }
}
