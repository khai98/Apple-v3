import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    font-size: 17px;
    color: #0093ee;
    vertical-align: text-bottom;
    zoom: 85%;
    line-height: 18px;
`;

const ArrowRight = (props) => (
    <Wrapper className="icon icon-arrow-right2" />
)

export default ArrowRight;