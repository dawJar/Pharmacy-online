import React, {Component, PropTypes} from 'react';

class Drug extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            onSale,
            drugCompany,
            drugDescription,
            drugCategory,
            drugExpiration,
            drugName,
            drugPrice,
            fdaCode,
            addClassNames
        } = this.props;
        return (
            <div className={ addClassNames }>
                <h3>{drugName}</h3>
                <p>onsale: {(onSale) ? 'sale' : 'gtfo'}</p>
                <p>company: {drugCompany}</p>
                <p>price: {drugPrice}</p>
                <p>category: {drugCategory}</p>
            </div>

        );
    }
}

export default Drug
