import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NavLink extends Component {

    constructor (props) {
        super(props);
        this.handleClickLink = this.handleClickLink.bind(this);
    }

    handleClickLink () {
        this.props.onClickLink(this.props.index);
    }

    render () {
        const { data, linkActiveStyle, children } = this.props;
        const { index, linkName, linkPath } = data;
        // console.log(linkActiveStyle);

        return (
            <li>
              <Link to={ linkPath } activeStyle={ linkActiveStyle }
                  onClick={this.handleClickLink}>
                  { children || linkName }
              </Link>
            </li>
        );
    }
}
