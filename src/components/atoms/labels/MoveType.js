import React from 'react';
import ArrowRight from '../icons/arrow-right';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
    border-radius: 4px;
    background-color: rgba(216,229,239,.4);
    display: inline-flex;
    border: 1px solid #d8e5ef;
    flex: 0 0 auto;
    align-self: center;
`;

const Content = styled.span`
    text-transform: uppercase;
    font-weight: 700;
    color: #232537;
`;

const MoveType = (props) => (
    <Wrapper>
        <Content>
            <span>
                {props.from + " "} 
                <ArrowRight />
                {" " + props.to}
            </span>
        </Content>
    </Wrapper>
)

export default MoveType;