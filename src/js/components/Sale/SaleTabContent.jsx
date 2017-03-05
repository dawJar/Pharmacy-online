import React from 'react';

import '../../../sass/componentStyles/saleTabContent.scss';

import SaleTabParagraph from './SaleTabParagraph';


const SaleTabContent = ({
    bottomContainers,
    defaultLorem
}) => {

    let renderBottomContainers = bottomContainers.map((container, i) =>
        <SaleTabParagraph key={ i }
            containerHeading={ container.containerHeading }
            iconGlyph={ container.iconGlyph }
            lastContainerStyle={ container.lastContainerStyle }
            paragraphText={ defaultLorem }
        />
    );

    return (
        <div className="container-fluid">
            <div className="row">
                { renderBottomContainers }
            </div>
        </div>
    );
}

SaleTabContent.defaultProps = {
    bottomContainers: [
        {
            containerHeading: 'Fast delivery!',
            iconGlyph: 'send',
            lastContainerStyle: false
        },
        {
            containerHeading: 'Lowest prices!',
            iconGlyph: 'usd',
            lastContainerStyle: false
        },
        {
            containerHeading: 'Any questions? Contact us!',
            iconGlyph: 'question-sign',
            lastContainerStyle: true
        },
    ],
    defaultLorem: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
};

export default SaleTabContent;
