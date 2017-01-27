import React, {Component, PropTypes} from 'react';

class Drug extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            drugId,
            drugCompany,
            drugDescription,
            drugExpiration,
            drugName,
            drugPrice,
            drugProcedure,
            fdaCode
        } = this.props;
        return (
            <div >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>{drugName}</h3>
                        <p>company: {drugCompany}</p>
                        <p>price: {drugPrice}</p>
                        <p className="panel-title">
                            <a data-toggle="collapse pull-right" href={"#collapse"+drugId}>more...</a>
                        </p>
                    </div>
                    <div id={"collapse"+drugId} className="panel-collapse collapse">
                        <p>fda-code: {fdaCode}</p>
                        <p>expiration: {drugExpiration}</p>
                        <p>description: {drugDescription}</p>
                        <p>usage: {drugProcedure}</p>
                        <div className="panel-footer">Footer</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Drug
