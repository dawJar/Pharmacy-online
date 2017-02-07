import React, {Component, PropTypes} from 'react';

import Drug from './Drug';
import ButtonNextPrev from './ButtonNextPrev';

export default class DrugList extends Component {

    constructor (props) {
        super(props);
        // this.onClickBtn = this.onClickBtn.bind(this);
        this.state = {
            drugsPerPage: 4,
        }
    }

    // onClickBtn (direction) {
    //     let currentDrug = this.state.visibleDrugOnSale;
    //     let count = this.state.drugsCount - 1;
    //
    //     if (direction === 'left' && currentDrug > 0)
    //         currentDrug -= 1;
    //     else if (direction === 'right' && currentDrug < count)
    //         currentDrug += 1;
    //
    //     this.setState({visibleDrugOnSale: currentDrug});
    // }

    // makeDrugList (onSale, drugList, drugsPerPage, currentFilter) {
    //     let drugsToShow = drugList;
    //
    //     if (onSale) {
    //         drugsToShow = drugsToShow.filter(drug => drug.onSale);
    //     } else {
    //         if (currentFilter !== 'on_sale')
    //             drugsToShow = drugsToShow.filter(drug => drug.drugCategory === currentFilter);
    //         drugsToShow = drugsToShow.slice(0, drugsPerPage);
    //     }
    //
    //     return drugsToShow.map((drug) => <Drug key={drug.id} { ...drug }/>);
    // }

    // checkCurrentFilter (currentFilter, currDrugsPerPage) {
    //     return (currentFilter !== currentFilter) ? 4 : currDrugsPerPage;
    // }

    // setStateWithData (sale, revievedDrugs, drugsPerPage, currentFilter) {
    //     let setDrugsPerPage = this.checkCurrentFilter(currentFilter, drugsPerPage);
    //     let drugs = this.makeDrugList(sale, revievedDrugs, setDrugsPerPage, currentFilter);
    //     // console.log('rec:' + receivedDrugs);
    //     // console.log('drugs:' + drugs);
    //     this.setState({
    //         drugsArray: drugs,
    //         drugsCount: drugs.length,
    //         drugsPerPage: setDrugsPerPage,
    //     });
    // }
    //
    // componentWillMount () {
    //     let { showOnSale, drugs, drugsPage, currentFilter } = this.props;
    //     this.setStateWithData(showOnSale, drugs, drugsPage, currentFilter);
    // }
    //
    // componentWillReceiveProps (nextProps) {
    //     let { showOnSale, drugs, drugsPage, currentFilter } = nextProps;
    //     this.setStateWithData(showOnSale, drugs, drugsPage, currentFilter);
    // }

    render() {
        let { visibleDrugOnSale } = this.state;
        let { drugs, showOnSale, drugIndex, onClickPrevNext } = this.props;
        let drugsToShow = drugs.map((drug) => <Drug key={drug.id} { ...drug }/>)

        return (
            <div className="panel-group">
                <div className="row">

                    { (showOnSale) ? <ButtonNextPrev direction="left" onClickPrevNext={ onClickPrevNext } /> : null }

                    <div className={ showOnSale ? "col-xs-10" : "col-xs-12"}>
                        { (showOnSale) ?
                            drugsToShow[drugIndex] :
                            drugsToShow
                        }
                    </div>

                    { (showOnSale) ? <ButtonNextPrev direction="right" onClickPrevNext={ onClickPrevNext } /> : null }
                </div>
            </div>
        );
    }

}
