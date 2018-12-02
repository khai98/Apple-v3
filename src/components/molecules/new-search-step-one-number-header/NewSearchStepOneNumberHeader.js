import React from 'react';
import NewSearchStepNumber from '../../atoms/labels/NewSearchStepNumber';
import NewSearchStepTitle from '../../atoms/labels/NewSearchStepTitle';
import styled, { css } from 'styled-components';

const NumberTitle = styled.div`
    padding-right: 15px;
    font-size: 15px;
    line-height: 19px;
    color: #373848;
    vertical-align: top;
    float: left;
    font-weight: 500;
`;
const NewSearchStepOneNumberHeader = (props) => {

    return (
        <NumberTitle>
            <NewSearchStepNumber
                label={props.labelNumber}
            />
            <NewSearchStepTitle
                label={props.labelTitle}
            />
        </NumberTitle>
    );
};

export default NewSearchStepOneNumberHeader;