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
            drugsPerPage: 4,
            drugFilter: null
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

    makeDrugList (onSale, drugList, drugsPerPage, drugFilter) {
        let drugsToShow = drugList;

        if (onSale) {
            drugsToShow = drugsToShow.filter(drug => drug.onSale);
        } else {
            if (this.state.drugFilter !== 'all')
                drugsToShow = drugsToShow.filter(drug => drug.drugCategory === drugFilter);
            drugsToShow = drugsToShow.slice(0, drugsPerPage);
        }

        return drugsToShow.map((drug) => <Drug key={drug.id} { ...drug }/>);
    }

    checkCurrentFilter (drugFilter, currDrugsPerPage) {
        return (this.state.drugFilter !== drugFilter) ? 4 : currDrugsPerPage;
    }

    setStateWithData (sale, revievedDrugs, drugsPerPage, drugFilter) {
        let setDrugsPerPage = this.checkCurrentFilter(drugFilter, drugsPerPage);
        let drugs = this.makeDrugList(sale, revievedDrugs, setDrugsPerPage, drugFilter);
        this.setState({
            drugsArray: drugs,
            drugsCount: drugs.length,
            drugsPerPage: setDrugsPerPage,
            drugFilter: drugFilter
        });
    }

    componentWillMount () {
        this.setStateWithData(this.props.showOnSale, this.props.drugs, this.props.drugsPage, this.props.drugFilter);
    }

    componentWillReceiveProps (nextProps) {
        this.setStateWithData(nextProps.showOnSale, nextProps.drugs, nextProps.drugsPage, nextProps.drugFilter);
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
