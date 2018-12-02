import React, {Component} from 'react';
import {Lang} from '../../utils';
import {Drawer} from 'antd';
import Rate from '../atoms/labels/Rate';
import BodyDrawer from './BodyDrawer';
import styled from "styled-components";

const VendorRow = styled.div`
    position: relative;
    min-width: 150px;
    max-width: 150px;
    padding-top: 15px;
    padding-left: 0;
    padding-right: 0;
    border-right: 1px solid #d8e5ef;
`;

const VendorLogo = styled.div`
    cursor: pointer;
    width: 100%;
    height: 66px;
    display: table;
`;

const VendorLogoContainer = styled.div`
    text-align: center;
    vertical-align: middle;
    display: table-cell;
`;

const Logo = styled.img`
    max-width: 75px;
    vertical-align: middle;
    border-style: none;
`;

const RatingCotainer = styled.div`
    text-align: center;
`;

const Review = styled.a`
    margin-top: 4px;
    cursor: pointer;
    color: #0093ee;
    font-size: 13px;
    text-decoration: underline;
`;

const ShipmentBadge1 = styled.div`
    text-align: center;
    cursor: pointer;
    padding: 8px 0 13px;
    font-size: 11px;
    color: #232537;
    font-weight: 400;
`;

class QuoteVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenDrawer: false
        }
    }

    toggleDrawer = () => {
        const {isOpenDrawer} = this.state;
        this.setState({isOpenDrawer: !isOpenDrawer})
    };

    render() {
        const {company} = this.props;
        const {isOpenDrawer} = this.state;

        return (
            <div id="quoteVendor">
                <VendorRow onClick={this.toggleDrawer}>
                    <div>
                        <VendorLogo>
                            <VendorLogoContainer>
                                <Logo src={company.url_logo}/>
                            </VendorLogoContainer>
                        </VendorLogo>
                        <RatingCotainer>
                            <Rate count={company.rate}/>
                            <Review>{`${company.count_review} ${Lang.trans("Reviews")}`}</Review>
                        </RatingCotainer>
                        <ShipmentBadge1>{`${company.count_order}+ ${Lang.trans("FinLogistic Shipments")}`}</ShipmentBadge1>
                    </div>
                </VendorRow>
                <Drawer
                    width="40%"
                    zIndex={8}
                    mask={false}
                    closable={true}
                    onClose={this.toggleDrawer}
                    visible={isOpenDrawer}
                    style={{height: '100%', padding: 0}}
                >
                    <BodyDrawer company={company}/>
                </Drawer>
            </div>
        );
    }
}

export default QuoteVendor;