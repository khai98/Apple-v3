import React, {Component} from 'react';
import {Tooltip} from 'antd';
import styled from "styled-components";

const Container = styled(Tooltip)`
    color: #373848;
    margin: 4px 0 7px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const BoldText = styled.span`
    font-size: 17px;
    font-weight: 700;
`;

const Decimals = styled.span`
    font-size: 11px;
    vertical-align: super;
    padding-left: 2px;
`;

class FormattedPrice extends Component {
    render() {
        const {price} = this.props;
        const format_price = [
            (price > 0) ? Math.floor(price) : Math.ceil(price),
            Math.round((price % 1) * 100)
        ];

        return (
            <Container title={price}>
                <BoldText>$</BoldText>
                <BoldText>{format_price[0]}</BoldText>
                <Decimals>{format_price[1]}</Decimals>
            </Container>
        );
    }
}

export default FormattedPrice;