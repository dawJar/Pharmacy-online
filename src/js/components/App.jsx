import React, {Component} from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../sass/style.scss';

import Nav from './Nav.jsx';


export default class App extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <Nav />
                { children }
            </div>
        );
    }
}
