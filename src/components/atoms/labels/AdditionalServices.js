/**
 * props: additional_services : array [{name, value} , ....]
 * 
 */
import React from 'react';
import styled from 'styled-components';
import {Lang} from '../../../utils'

const Wrapper = styled.div`
    display: block;
    font-size: 11px;
    padding-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.5em;
`;
const Label = styled.span`
    font-weight: 700;
`;

const Item = styled.span`
    :not(:last-child)::after {
        content: " /";
    }
`;

const Value = styled.span`
    padding: 2px;
`;


const AdditionalServices = (props) => (
    <Wrapper>
        <Label>{Lang.trans("Additional services:")}</Label>
        <span>
            {props.additional_services ? props.additional_services.map((e, i) => (
                <Item key={i}>
                    <Value>{Lang.trans(e.name)}</Value>
                    <Value>{e.value}</Value>
                </Item>
            )) : null}
        </span>
    </Wrapper>
);

export default AdditionalServices;