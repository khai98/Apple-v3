import React, {Component} from 'react';
import {Lang} from "../../utils";
import {Tooltip} from 'antd';
import styled from "styled-components";
import FreightForwarderTitle from '../atoms/titles/FreightForwarderTitle';

const Container = styled.div`
    flex-grow: 2;
    position: relative;
    padding: 15px 10px 12px 15px;
    border-right: 1px solid #d8e5ef;
    cursor: pointer;
    text-rendering: optimizeLegibility
`;

const TransitTime = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: #232537;
    margin: 7px 0;
    text-transform: uppercase;
    text-decoration: underline;
`;

const PortTT = styled.div`
    margin-bottom: 3px;
    font-size: 11px;
    .label{
        font-weight: 400;
        color: #717585;
        padding-right: 5px;
    }
    .estimated-tt{
        color: #232537;
        text-transform: uppercase;
        text-decoration: none;
    }
    .estimated-tt:hover{
        text-decoration: underline;
    }
`;

const Route = styled.div`
    display: block;
    margin-bottom: 3px;
    font-size: 11px;
    .label{
        display: inline;
        text-transform: none;
        font-weight: 400;
        color: #717585;
        padding-right: 5px;
    }
    .value{
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 385px;
        text-transform: uppercase;
    }
`;

const ValidDate = styled.div`
    display: block;
    margin-bottom: 8px;
    font-size: 11px;
    .label{
        display: inline;
        text-transform: none;
        font-weight: 400;
        color: #717585;
        padding-right: 5px;
    }
    .value{
        color: #232537;
    }
`;

const Policy = styled.div`
    display: block;
    font-size: 11px;
    .label{
        display: inline;
        text-transform: none;
        font-weight: 400;
        color: #717585;
        padding-right: 5px;
    }
    .value{
        color: #028a3d;
        font-weight: 700;
        font-style: italic;
    }
`;

class QuoteSummary extends Component {
    render() {
        const {data} = this.props;
        return (
            <Container>
                <FreightForwarderTitle
                    freightMethod={data.transport_type}
                    title={data.name}
                />
                <TransitTime>
                    <span>{data.transit_time}</span>
                </TransitTime>
                <PortTT>
                    <span className="label">{Lang.trans("Port to port transit time:")}</span>
                    <span className="estimated-tt">{data.port_to_port_transit_time}</span>
                </PortTT>
                <Route>
                    <span className="label">{Lang.trans("Route:")}</span>
                    <span className="value">{data.router}</span>
                </Route>
                <ValidDate>
                    <span className="label">{Lang.trans("Valid until:")}</span>
                    <span className="value">Dec 28, 2018</span>
                </ValidDate>
                <Policy>
                    <span className="label">{Lang.trans("Cancellation Policy:")}</span>
                    <span className="value">
                        <Tooltip
                            title={Lang.trans("Shipments may be cancelled with no additional charge before the Seller has processed your shipment. Otherwise, you will be charged for any direct costs. Learn more")}>
                        STANDARD
                        </Tooltip>
                    </span>
                </Policy>
            </Container>
        );
    }
}

export default QuoteSummary;