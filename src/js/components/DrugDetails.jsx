import React from 'react';

const DrugDetails = ({
    id,
    drugName,
    onSale,
    drugCategory
}) => {

    return (
      <div className="col-xs-7 col-sm-5 col-md-7">
          <h3>{ drugName }</h3>
          <p>onsale: { (onSale) ? 'sale' : 'not on sale' }</p>
          <p>id: { id }</p>
          {/* <p>company: { drugCompany }</p>
          <p>price: { drugPrice }</p> */}
          <p>category: { drugCategory }</p>
      </div>
    );
}

export default DrugDetails;
