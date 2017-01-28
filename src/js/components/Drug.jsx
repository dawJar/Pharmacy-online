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
            drugExpiration,
            drugName,
            drugPrice,
            fdaCode
        } = this.props;
        return (
            <div >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>{drugName}</h3>
                        <p>onsale: {(onSale) ? 'sale' : 'gtfo'}</p>
                        <p>company: {drugCompany}</p>
                        <p>price: {drugPrice}</p>
                        <p>fda-code: {fdaCode}</p>
                        <p>expiration: {drugExpiration}</p>
                        <p>description: {drugDescription}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Drug
