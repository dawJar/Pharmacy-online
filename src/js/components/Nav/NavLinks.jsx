import React, {Component} from 'react';

import '../../../sass/componentStyles/shoppingCart.scss';

import NavLink from './NavLink';


export default class NavLinks extends Component {

    constructor(props) {
        super(props);
        this.handleOnClickLink = this.handleOnClickLink.bind(this);

        const { navIndex } = this.props.navigation;
        this.state = {
            navIndex: navIndex
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.navIndex !== nextProps.navigation.navIndex;
    }

    componentWillUpdate(nextProps, nextState) {
        this.setState({
            navIndex: nextProps.navigation.navIndex
        });
    }

    handleOnClickLink(index) {
        this.props.actions.setIndex(index);
    }

    render() {
        const {navIndex} = this.state;
        const {temporary, shoppingCart} = this.props;
        const links = temporary.map((x, i) => {
            return <NavLink key={i} index={x.index} linkPath={x.linkPath} linkName={x.linkName}
                onClickLink={this.handleOnClickLink} isActive={navIndex === x.index} />
        });

        return (
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">

                    { links }

                    <NavLink key={Date.now()} index={shoppingCart.index}
                        linkPath={shoppingCart.linkPath} linkName={shoppingCart.linkName}
                        onClickLink={this.handleOnClickLink} isActive={navIndex === shoppingCart.index}
                        activeClassName="active-glyph">

                        <span className="glyphicon glyphicon-shopping-cart shopping-cart"></span>
                        <span id="bucket">Bucket</span>

                    </NavLink>
                    
                </ul>
            </div>
        );
    }
}
