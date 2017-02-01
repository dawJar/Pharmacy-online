import React, { Component, PropTypes } from 'react';

import '../../../sass/componentStyles/shoppingCart.scss';

import NavLink from './NavLink';
import Basket from '../Basket';


export default class NavLinks extends Component {

    constructor(props) {
        super(props);
        // this.handleOnClickLink = this.handleOnClickLink.bind(this);

        // const { navIndex } = this.props.navigation;
        // this.state = {
        //     navIndex: navIndex
        // };
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.navIndex !== nextProps.navigation.navIndex;
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //     this.setState({
    //         navIndex: nextProps.navigation.navIndex
    //     });
    // }

    // handleOnClickLink(index) {
    //     this.props.actions.setIndex(index);
    // }

    render() {
        // const { navIndex } = this.state;
        const { showAsSidebar, showBasket, linksData, linkActiveStyle, basket } = this.props;

        const links = linksData.map((link, i) => {
            return <NavLink key={i} data={ link } linkActiveStyle={ linkActiveStyle } />
        });

        return (
            <div className={ (showAsSidebar) ? "sidebar-wrapper" : "collapse navbar-collapse" } id="myNavbar">
                <ul className={ (showAsSidebar) ? "sidebar-nav" : "nav navbar-nav"}>

                    { links }

                    { (showBasket) ? <Basket data={ basket } linkActiveStyle={ linkActiveStyle } /> : null }


                </ul>
            </div>
        );
    }
}

// NavLinks.propTypes = {
//   navigation: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired
// }
