import React, { Component, PropTypes } from 'react'
import Drug from './Drug';

class DrugList extends Component {
  render () {
    const { drugs } = this.props;
    const items =  drugs.map((drug) => <Drug key={ drug.id } { ...drug } />);
    return (
      <div className="panel-group">
        { items }
      </div>
    );
  }
}

export default DrugList;
