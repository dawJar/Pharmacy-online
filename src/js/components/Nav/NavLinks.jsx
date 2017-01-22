import React, {Component} from 'react';

import ShoppingCart from './ShoppingCart';
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
        const links = this.props.default.map((x, i) => {
            return <NavLink key={i} index={x.index} linkPath={x.linkPath} linkName={x.linkName}
                onClickLink={this.onClickLink} isActive={activeLink === i} />
        });
        // console.log(activeLink);
        // console.log(links);

        return (
            <div className="collapse navbar-collapse" id="myNavbar">
                <ShoppingCart />
                <ul className="nav navbar-nav">
                    { links }
                </ul>
            </div>
        );
    }
}

NavLinks.defaultProps = {
    default: [{
        index: 0,
        linkPath: "/",
        linkName: "Sale!"
    },
    {
        index: 1,
        linkPath: "/categories",
        linkName: "Categories"
    },
    {
        index: 2,
        linkPath: "/search",
        linkName: "Search"
    },
    {
        index: 3,
        linkPath: "/about",
        linkName: "About"
    },]
}
