import React, { Component, PropTypes } from 'react';

import Drug from './Drug';
import ButtonNextPrev from './ButtonNextPrev';


class DrugList extends Component {

  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.state = {
      drugsArray: [],
      visibleDrugOnSale: 0,
      drugsCount: 0,
    }
  }

  onClickBtn (direction) {
    let currentDrug = this.state.visibleDrugOnSale;
    let count = this.state.drugsCount - 1;

    if (direction === 'left' && currentDrug > 0)
      currentDrug -= 1;
    else if (direction === 'right' && currentDrug < count)
      currentDrug += 1;

    this.setState({
      visibleDrugOnSale: currentDrug
    });
  }

  makeDrugList (onSale, drugList) {
    let drugsToShow = drugList;

    if (onSale)
      drugsToShow = drugList.filter((drug) => (drug.onSale))

    return drugsToShow.map((drug) => <Drug key={ drug.id } { ...drug } />);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillReceiveProps(nextProps) {
    let drugs = this.makeDrugList(nextProps.showOnSale, nextProps.drugs);
    this.setState({
      drugsArray: drugs,
      drugsCount: drugs.length
    });
  }

  render () {
    const { visibleDrugOnSale, drugsArray } = this.state;
    const { drugs, showOnSale } = this.props;

    return (
      <div className="panel-group">
        <div className="row">

          <ButtonNextPrev direction="left" onClickBtn={ this.onClickBtn } />

          <div className="col-xs-10">
            { drugsArray[visibleDrugOnSale] }
          </div>

          <ButtonNextPrev direction="right" onClickBtn={ this.onClickBtn } />
        </div>
      </div>
    );
  }

}

export default DrugList;
