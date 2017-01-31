import React, {Component, PropTypes} from 'react';

import Drug from './Drug';
import ButtonNextPrev from './ButtonNextPrev';

export default class DrugList extends Component {

    constructor (props) {
        super(props);
        this.onClickBtn = this.onClickBtn.bind(this);
        this.state = {
            drugsArray: [],
            visibleDrugOnSale: 0,
            drugsCount: 0,
            drugsPerPage: 4
        }
    }

    onClickBtn (direction) {
        let currentDrug = this.state.visibleDrugOnSale;
        let count = this.state.drugsCount - 1;

        if (direction === 'left' && currentDrug > 0)
            currentDrug -= 1;
        else if (direction === 'right' && currentDrug < count)
            currentDrug += 1;

        this.setState({visibleDrugOnSale: currentDrug});
    }

    makeDrugList (onSale, drugList, drugsPerPage) {
        let drugsToShow = drugList;

        if (onSale) {
            drugsToShow = drugList.filter((drug) => (drug.onSale));
        }
        else {
            drugsToShow = drugList.slice(0, drugsPerPage);
        }

        return drugsToShow.map((drug) => <Drug key={drug.id} { ...drug }/>);
    }

    setStateWithData (sale, revievedDrugs, drugsPerPage) {
        let drugs = this.makeDrugList(sale, revievedDrugs, drugsPerPage);
        this.setState({
            drugsArray: drugs,
            drugsCount: drugs.length,
            drugsPerPage: drugsPerPage
        });
    }

    componentWillMount () {
        this.setStateWithData(this.props.showOnSale, this.props.drugs, this.props.drugsPage);
    }

    componentWillReceiveProps (nextProps) {
        this.setStateWithData(nextProps.showOnSale, nextProps.drugs, nextProps.drugsPage);
    }

    render() {
        const { visibleDrugOnSale, drugsArray } = this.state;
        const { drugs, showOnSale, drugsPage } = this.props;

        return (
            <div className="panel-group">
                <div className="row">

                    { (showOnSale) ? <ButtonNextPrev direction="left" onClickBtn={this.onClickBtn}/> : null }

                    <div className={ showOnSale ? "col-xs-10" : "col-xs-12"}>
                        { (showOnSale) ? drugsArray[visibleDrugOnSale] :
                            drugsArray
                        }
                    </div>

                    { (showOnSale) ? <ButtonNextPrev direction="right" onClickBtn={this.onClickBtn}/> : null }
                </div>
            </div>
        );
    }

}
