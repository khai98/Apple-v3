import React from 'react';
import styled, { css } from 'styled-components';

const Number = styled.div`
    float: left;
    width: 34px;
    height: 34px;
    border-radius: 3px 0 0 0;
    background-color: #0093ee;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 2.2;
    letter-spacing: normal;
    color: #fff;
`;

const NewSearchStepNumber = (props) => {
    return (
        <Number>{props.label}</Number>
    );
};

export default NewSearchStepNumber;