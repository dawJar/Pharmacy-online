import React, {Component} from 'react';

export default class NavLinks extends Component {
    render() {
        return (
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
        );
    }
}
