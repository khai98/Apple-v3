import React from 'react';
import styled, { css } from 'styled-components'

const Button = styled.button`
    display: inline-block;
    font-size: 0.8rem;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    background-color: #0093ee;
    border-color: #0093ee;
    box-shadow: none;
    padding: .6rem 1rem;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
    :hover{
        color: #fff;
        background-color: #0074bb;
        border-color: #006db1;
    };
    :focus{
        border-color: #006db1;
        border-radius: 4px;
    }
`;

const NewSearchNexStep = (props) => {
    return (
        <Button onClick={() => props.onClick(props.name, props.value)}>{props.label}</Button>
    );
};

export default NewSearchNexStep;