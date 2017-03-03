import React from 'react';

const DrugDetailsSelected = ({
    drugCategory,
    drugCompany,
    drugPrice,
    drugCurrency,
    onSale,
    saleTab
}) => (
    <table className="table-details">
        <tbody>
            {
              (saleTab) ?
                  <tr>
                      <th className="table-details-header">category:</th>
                      <td className="table-details-data">{ drugCategory }</td>
                  </tr> : null
            }
            {
              (!saleTab) ?
                  <tr>
                      <th className="table-details-header">company:</th>
                      <td className="table-details-data">{ drugCompany }</td>
                  </tr> : null
            }
            <tr>
                <th className="table-details-header">price:</th>
                <td className="table-details-data">{ `${drugPrice} ${drugCurrency}` }</td>
            </tr>
        </tbody>
    </table>
);

export default DrugDetailsSelected;
