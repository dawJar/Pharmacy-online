import React from 'react';

const DrugDetailsSelected = ({
    drugCategory,
    drugCompany,
    drugPrice,
    drugCurrency,
    onSale,
    saleTab
}) => {

    return (
        <table className="table-details">
            <tbody>
                {
                  (saleTab) ?
                      <tr className="table-details-row">
                          <th className="table-details-header">category:</th>
                          <td className="table-details-data">{ drugCategory }</td>
                      </tr> : null
                }
                {
                  (!saleTab) ?
                      <tr className="table-details-row">
                          <th className="table-details-header">company:</th>
                          <td className="table-details-data">{ drugCompany }</td>
                      </tr> : null
                }
                <tr className="table-details-row">
                    <th className="table-details-header">price:</th>
                    <td className="table-details-data">{ `${drugPrice} ${drugCurrency}` }</td>
                </tr>
            </tbody>
        </table>
    );
}

export default DrugDetailsSelected;
