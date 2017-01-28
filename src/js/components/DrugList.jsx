import React, { Component, PropTypes } from 'react';

import Drug from './Drug';
import ButtonNextPrev from './ButtonNextPrev';


class DrugList extends Component {

  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.state = {
      visibleDrugOnSale: 0,

    }
  }

  onClickBtn (direction) {
    let currentVisibleDrug = this.state.visibleDrugOnSale;

    if (direction === 'left' && currentVisibleDrug !== 0)
      currentVisibleDrug -= 1;
    else if (direction === 'right')
      currentVisibleDrug += 1;

    this.setState({ visibleDrugOnSale: currentVisibleDrug });
  }

  makeDrugList (onSale, drugList) {
    let drugsToShow = drugList;

    if (onSale) {
      drugsToShow = drugList.filter((drug) => (drug.onSale))
    }



    drugsToShow = drugsToShow.map((drug) => <Drug key={ drug.id } { ...drug } />);

    return drugsToShow;
  }

  render () {
    const { visibleDrugOnSale } = this.state;
    const { drugs, showOnSale } = this.props;
    const selectedDrugs = this.makeDrugList(showOnSale, drugs);

    return (
      <div className="panel-group">
        <div className="row">

          <ButtonNextPrev direction="left" onClickBtn={ this.onClickBtn } />

          <div className="col-xs-10">
            { selectedDrugs[visibleDrugOnSale] }
          </div>

          <ButtonNextPrev direction="right" onClickBtn={ this.onClickBtn } />
        </div>
      </div>
    );
  }

}

export default DrugList;
