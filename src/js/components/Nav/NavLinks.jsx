import React, {Component} from 'react';

import '../../../sass/componentStyles/shoppingCart.scss';

import NavLink from './NavLink';


export default class NavLinks extends Component {

    constructor(props) {
        super(props);
        this.onClickLink = this.onClickLink.bind(this);
        this.state = {
            activeLink: 0
        };
    }

    onClickLink(index) {
        this.setState({
            activeLink: index
        });
    }

    render() {
        const {activeLink} = this.state;
        const {temporary, shoppingCart} = this.props;
        const links = temporary.map((x, i) => {
            return <NavLink key={i} index={x.index} linkPath={x.linkPath} linkName={x.linkName}
                onClickLink={this.onClickLink} isActive={activeLink === x.index} />
        });
        // console.log(activeLink);
        // console.log(links);

        return (
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">

                    { links }

                    <NavLink key={Date.now()} index={shoppingCart.index}
                        linkPath={shoppingCart.linkPath} linkName={shoppingCart.linkName}
                        onClickLink={this.onClickLink} isActive={activeLink === shoppingCart.index}
                        activeClassName="active-glyph">
                        <span className="glyphicon glyphicon-shopping-cart shopping-cart"></span>
                        <span id="bucket">Bucket</span>
                    </NavLink>
                </ul>
            </div>
        );
    }
}
