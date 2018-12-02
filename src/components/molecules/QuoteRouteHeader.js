/**
 * props: 
 * origin : string
 * destionation: string
 */
import React from 'react';
import styled from 'styled-components';
import ArrowRight from '../atoms/icons/arrow-right';
import { Button } from 'antd';
import {Lang} from '../../utils'

const RouteRow = styled.div`
    padding: 5px 0 4px;
    display: inline-flex;
    align-items: center;
    line-height: 13px;
    height: 36px;

    @media (min-width: 900px) {
        max-width: 80%;
    }

    @media (min-width: 1140px) {
        max-width: 84%;
    }
`

const Point = styled.div`
    font-size: 13px;
    color: #373848;
    text-transform: uppercase;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: normal;
    vertical-align: bottom;
    max-width: none;
    font-weight: 600;
`

const Arrow = styled.span`
    margin: 0 10px;
`

const EditSearch = styled(Button).attrs({
    size: "small",
})`
    background: #27d974;
    border-color: #27d974;
    color: #fff;
    font-size:12px;
    margin-left: 15px;
    outline: none!important;
    position: relative;
    padding: 4px 10px;
    line-height: 12px;

    :hover, :focus, :active {
        color: #fff;
        background: #028a3d;
        border-color: #028a3d;
    }
`

const SumaryInfo = styled.div`
    font-size: 11px;
    float: right;
    position: relative;
    right: 0;
    width: 116px;
`

const Info = styled.button`
    padding: 2px 0 0;
    font-size: 12px;
    border-color: transparent;
    box-shadow: none;
    font-weight: 400;
    color: #0093ee;
    border-radius: 0;
    background-color: transparent;
    line-height: 12px;
    height: 18px;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;

const QuoteRouteHeader = (props) => (
    <React.Fragment>
        <RouteRow>
            <Point>{props.origin}</Point>
            <Arrow><ArrowRight /></Arrow>
            <Point>{props.destination}</Point>
            <EditSearch 
                onClick={props.onClick}>
                {Lang.trans("Edit Search")}
            </EditSearch>
        </RouteRow>
        <SumaryInfo>
            <Info>{Lang.trans("Pricing Policy")}</Info>
            <Info>{Lang.trans("Transit time info")}</Info>
        </SumaryInfo>
    </React.Fragment>
)

export default QuoteRouteHeader