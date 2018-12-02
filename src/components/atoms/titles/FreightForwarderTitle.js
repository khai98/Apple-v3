import React, {Component} from 'react';
import * as CONST from '../../../config/constant';
import {Icon} from 'antd';
import styled from "styled-components";

const MasterTitle = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: #717585;
`;

const FreightMethodIcon = styled.span`
    vertical-align: middle;
    font-size: 20px!important;
    margin-left: 0!important;
    color: #717585!important;
    margin-right: 7px;
    cursor: pointer;
`;

const DirectIcon = styled(Icon)`
    position: absolute;
    top: 15px;
    right: 15px;
    max-width: 15px;
    margin-left: 5px;
    vertical-align: middle;
    border-style: none;
`;

const FloatLeft = styled.div`
    float: left;
`;

const FloatRight = styled.div`
    float: right;
`;

class FreightForwarderTitle extends Component {

    Freight = (freightMethod) => {
        switch (freightMethod) {
            case CONST.SEA_FCL:
            case CONST.SEA_LCL:
                return <FreightMethodIcon className="icon icon-rocket"/>;
                break;
            case CONST.AIR:
                return <FreightMethodIcon className="icon icon-airplane"/>;
                break;
            case CONST.ROAD:
                return <FreightMethodIcon className="icon icon-truck"/>;
                break;
        }
    };

    render() {
        const {freightMethod, title} = this.props;
        return (
            <MasterTitle>
                <FloatLeft>{this.Freight(freightMethod)}</FloatLeft>
                <FloatLeft>
                    <Title>{title}</Title>
                </FloatLeft>
                <FloatRight>
                    <DirectIcon type="right-square" theme="filled"/>
                </FloatRight>
            </MasterTitle>
        );
    }
}

export default FreightForwarderTitle;