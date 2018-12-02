import React, {Component} from 'react';
import {Lang} from "../../utils";
import {Button, Icon, Tooltip} from 'antd';

import FormattedPrice from '../atoms/labels/FormattedPrice';
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    min-width: 140px;
    max-width: 140px;
    position: relative;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    text-rendering: optimizeLegibility;
`;

const Content = styled.div`
    margin: auto;
`;

const BestValue = styled.span`
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    color: #14b158;
    text-rendering: optimizeLegibility;
`;

const SelectButton = styled(Button)`
    height: 26px;
    padding: 0px 20px;
    font-size: 15px;
    margin-bottom: 5px;
    color: #fff;
    background-color: #0093ee;
    border-color: #0093ee;
    box-shadow: none;
`;

const SaveButton = styled.a`
    font-size: 11px;
    margin-bottom: 5px;
    outline: none!important;
    position: relative;
    font-weight: 400;
    color: #0093ee;
    border-radius: 0;
    display: inline-block;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
`;

const Toggle = styled.span`
    color: #0093ee;
    cursor: pointer;
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 10px;
    display: none;
    ${Container}:hover & {
        display: block;
    }
`;

const BreakDown = styled.span`
    font-size: 9px;
    vertical-align: top;
    line-height: 13px;
`;

class QuotePrice extends Component {
    render() {
        const {price, onClickSaveButton, onClickBreakDownButton} = this.props;
        return (
            <Container>
                <Content>
                    <BestValue>{Lang.trans("Best Value")}</BestValue>
                    <FormattedPrice price={price}/>
                    <SelectButton type="primary">{Lang.trans("Select")}</SelectButton>
                    <SaveButton onClick={onClickSaveButton}>{Lang.trans("Save quote")}</SaveButton>
                    <Toggle onClick={onClickBreakDownButton}>
                        <BreakDown>{Lang.trans("Price breakdown")}</BreakDown>
                        <Icon style={{fontSize: '9px'}} type="caret-down"/>
                    </Toggle>
                </Content>
            </Container>
        );
    }
}

export default QuotePrice;