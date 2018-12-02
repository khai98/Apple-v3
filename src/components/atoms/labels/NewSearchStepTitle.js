import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.div`
    float: left;
    float: left;
    padding-top: 7.5px;
    padding-left: 6px;
`;

const NewSearchStepTitle = (props) => {
    return (
        <Title>{props.label}</Title>
    );
};

export default NewSearchStepTitle;