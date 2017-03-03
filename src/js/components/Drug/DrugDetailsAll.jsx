import React, { PropTypes } from 'react';


const DrugDetailsAll = ({
    drugCategory,
    drugCompany,
    drugPrice,
    drugCurrency,
    fdaCode,
    drugExpiration,
    drugDescription,
    drugHowToUse
}) => (
    <table className="table-details">
        <tbody>
            <tr>
                <th className="table-details-header">category:</th>
                <td className="table-details-data">{ drugCategory }</td>
            </tr>
            <tr>
                <th className="table-details-header">company:</th>
                <td className="table-details-data">{ drugCompany }</td>
            </tr>
            <tr>
                <th className="table-details-header">price:</th>
                <td className="table-details-data">{ `${drugPrice} ${drugCurrency}` }</td>
            </tr>
            <tr>
                <th className="table-details-header">fda-code:</th>
                <td className="table-details-data">{ fdaCode }</td>
            </tr>
            <tr>
                <th className="table-details-header">expiration:</th>
                <td className="table-details-data">{ drugExpiration }</td>
            </tr>
            <tr>
                <th className="table-details-header">description:</th>
                <td className="table-details-data">{ drugDescription }</td>
            </tr>
            <tr>
                <th className="table-details-header">how to use:</th>
                <td className="table-details-data">{ drugHowToUse }</td>
            </tr>
        </tbody>
    </table>
);

export default DrugDetailsAll;
