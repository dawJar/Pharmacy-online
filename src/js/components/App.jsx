import React, {Component} from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../sass/style.scss';

import Nav from './Nav.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
            </div>
        );
    }
}
