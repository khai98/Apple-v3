import React, {Component} from 'react';
import {Lang} from "../../utils";
import styled from "styled-components";
import './BodyDrawer.css';

import Rate from '../atoms/labels/Rate';

const LogoContainer = styled.div`
    width: 100%;
    height: 56px;
    display: table;
    margin-top: 26px;
    margin-bottom: 6px;
`;

const LogoWrapper = styled.div`
    text-align: center;
    vertical-align: middle;
    display: table-cell;
`;

const Logo = styled.img`
    max-width: 75px;
    vertical-align: middle;
`;

const CompanyName = styled.div`
    font-size: 23px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    color: #2c405a;
    text-align: center;
`;

const Address = styled.div`
    position: relative;
    text-align: center;
    color: #91929b;
    padding: 10px 20px 0;
`;

const SellerHomepage = styled.div`
    text-align: center;
    a{
        color: #0093ee;
        text-decoration: underline;
    }
`;

const ShipmentBadge = styled.div`
    border: 1px solid #0093ee;
    border-radius: 10px;
    text-align: center;
    margin: 10px 30px;
    color: #0093ee;
    font-size: 11px;
    padding: 0;
`;

const ProfileLine = styled.div`
    border-top: 1px solid #d8e5ef;
    margin: 20px -15px;
    margin-bottom: 0;
    height: 1px;
`;

const ProfileHeading = styled.div`
    color: #373848;
    font-weight: 600;
    margin-top: 15px;
`;

const ProfileDesc = styled.div`
    color: #717585;
`;

const InfoBox = styled.div`
    border: 1px solid #27d974;
    background-color: #dbf9e8;
    padding: 10px;
    margin: 15px 0;
    display: flex;
    flex-wrap: nowrap;
    border-radius: 5px;
    margin-top: 22px;
`;

const IconInfoBox = styled.img`
    margin-right: 14px;
    margin-left: 5px;
    a{
        vertical-align: middle;
        border-style: none;
    }
`;

const Title = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #373848;
    margin-bottom: 0;
`;

const SubTitle = styled.p`
    margin-bottom: 0;
    font-size: 11px;
    color: #373848;
`;

const ReviewSummary = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 20px 0;
`;

const NumberReview = styled.div`
    display: flex;
    flex-wrap: nowrap;
    font-size: 11px;
    color: #8dabc4;
    margin-right: 5px;
    padding-top: 2px;
`;

const Content = styled.div`
    height: calc(100% - 70px - 68px);
    position: relative;
    overflow-y: visible;
`;

class BodyDrawer extends Component {
    render() {
        const {company} = this.props;

        return (
            <div style={{height: '100%'}}>
                <div className="left-container">
                    <LogoContainer>
                        <LogoWrapper>
                            <Logo src={company.url_logo}/>
                        </LogoWrapper>
                    </LogoContainer>
                    <CompanyName>{company.name}</CompanyName>
                    <Address>{company.address}</Address>
                    <SellerHomepage>
                        <a href={company.url_website}
                           target="_blank">{company.url_website.replace('https://', '')}
                        </a>
                    </SellerHomepage>
                    <ShipmentBadge>{`${company.count_order}+ ${Lang.trans("FinLogistic Shipments")}`}</ShipmentBadge>
                    <ProfileLine/>
                    <div>
                        <ProfileHeading>{Lang.trans("Background")}</ProfileHeading>
                        <ProfileDesc>{company.detail}</ProfileDesc>
                    </div>
                    <div>
                        <ProfileHeading>{Lang.trans("Services")}</ProfileHeading>
                        <ProfileDesc>{company.service}</ProfileDesc>
                    </div>
                </div>
                <div className="review-container">
                    <InfoBox>
                        <IconInfoBox
                            src="https://ship.freightos.com/propera/7c419daea102f85b4e75fd0c1f97df00bbb8b55d/072f678b2655ce2bc86ac7bcb3d3b459.svg"/>
                        <div>
                            <Title>{Lang.trans("Verified Reviews")}</Title>
                            <SubTitle>{Lang.trans("From real FinLogistic customers")}</SubTitle>
                        </div>
                    </InfoBox>
                    <ReviewSummary>
                        <div style={{fontSize: '16px', fontWeight: '600'}}>
                            {Lang.trans("Customer reviews")}
                        </div>
                        <div style={{marginLeft: 'auto', display: 'flex', marginTop: '3px'}}>
                            <NumberReview>{`(${company.count_review} Reviews)`}</NumberReview>
                            <Rate count={company.rate} size="13px"/>
                        </div>
                    </ReviewSummary>
                    <Content>

                    </Content>
                </div>
                <div className="footer-container">
                    <img style={{margin: '5px 12px 0 7px'}}
                         src="https://ship.freightos.com/propera/7c419daea102f85b4e75fd0c1f97df00bbb8b55d/5dc74003a33844565558c1d4de3ae1e6.svg"
                         alt/>
                    <span>
                        <b>{Lang.trans("Why book through FinLogistic? ")}</b>
                        <span>{Lang.trans("Booking through Freightos guarantees exclusive prices, secure payment processing with escrow, credit terms, digital management tools, track-n-trace, and more.")}</span>
                    </span>
                </div>
            </div>
        );
    }
}

export default BodyDrawer;