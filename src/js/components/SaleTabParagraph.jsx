import React from 'react';


const SaleTabParagraph = ({
    containerHeading,
    iconGlyph,
    lastContainerStyle,
    paragraphText
}) => {
    let newGlyphStyle = `glyphicon glyphicon-${iconGlyph} sale-content-glyph`;
    let newContainerStyle = (lastContainerStyle) ?
                                'col-xs-12 col-sm-12 col-md-4' :
                                'col-xs-12 col-sm-6 col-md-4';
    return (
        <div className={ newContainerStyle } >
            <span className={ newGlyphStyle } ></span>
            <h3 className="sale-content-heading">{ containerHeading }</h3>
            <p className="sale-content-paragraph">
                { paragraphText }
            </p>
            <div className="underscore-element-sale pull-right"></div>
        </div>
    );
}

export default SaleTabParagraph;
