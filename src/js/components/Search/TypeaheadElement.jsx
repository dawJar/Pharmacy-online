import React, { PropTypes } from 'react';
import { Typeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';

import ItemContainer from '../../containers/ItemContainer';


const TypeaheadElement = ({ drugs }) => (
    <div>
        <Typeahead
            autoFocus={ true }
            // clearButton={ true }
            maxResults={ 5 }
            minLength={ 3 }
            options={ drugs }
            labelKey={option => `${option.drugName}`}
            renderMenuItemChildren={ option => {
                let { drugName, id } = option;
                let newID = id - 1;

                return (
                    <ItemContainer productID={ newID }>
                        { drugName }
                    </ItemContainer>
                );
            }}
        />
    </div>
);

TypeaheadElement.PropTypes = {
    drugs: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default TypeaheadElement;
