import React, {Component, PropTypes} from 'react';
import {Typeahead, Menu, MenuItem} from 'react-bootstrap-typeahead';

import NavLinkContainer from '../containers/NavLinkContainer';


const TypeaheadElement = ({ drugs }) => (
    <div>
        <Typeahead
            autoFocus={ true }
            clearButton={ true }
            maxResults={ 5 }
            minLength={ 3 }
            options={drugs}
            labelKey={option => `${option.drugName}`}
            renderMenu={(results, menuProps) => (
                    <Menu { ...menuProps }>
                        {results.map((result, index) => {

                            let resultData = {
                                linkPath: {
                                    pathname: '/search',
                                    query: { id: result.id - 1 }
                                },
                                linkFilter: "SHOW_ALL"
                            }

                            return (
                                <NavLinkContainer
                                    key={ index }
                                    addId={ result.id }
                                    data={ resultData }>
                                    { result.drugName }
                                </NavLinkContainer>
                            );

                        })}
                    </Menu>
            )
        }/>
    </div>
);

export default TypeaheadElement;
