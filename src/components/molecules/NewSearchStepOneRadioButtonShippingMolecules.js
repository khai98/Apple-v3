import React from 'react';
import NewSearchStepOneRadioButtonShipping from '../atoms/radio/NewSearchStepOneRadioButtonShipping';
import styled, { css } from 'styled-components';

const Label = styled.label`
    width: inherit;
    height: 17px;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.55;
    color: #717585;
    margin-left: 5px;
    margin-bottom: 4px;
    float:left;

`;
const NewSearchStepOneRadioButtonShippingMolecules = (props) => {
    return (
        <div style={{
            maxWidth:243.44,
            height:57,
            paddingRight:5
        }}>
            <Label>What are you shipping?</Label>
            <NewSearchStepOneRadioButtonShipping />
        </div>
    );
};

export default NewSearchStepOneRadioButtonShippingMolecules;