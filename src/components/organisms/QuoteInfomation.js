import React, {Component} from 'react';
import QuoteVendor from '../molecules/QuoteVendor';
import QuoteSummary from '../molecules/QuoteSummary';
import QuotePrice from '../molecules/QuotePrice';
import MasterLayout from '../layouts/MasterLayout';

import styled from "styled-components";

const MasterRow = styled.div`
    position: relative;
    height: auto;
    width: 50%;
    top: 50px;
    margin-bottom: 10px;
    margin: auto;
    background: #fffcea;
    background-clip: padding-box;
    border: 1px solid #d8e5ef;
    border-radius: 0;
`;

const SummaryRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    width: 100%;
    background: #fff;
`;

class QuoteInfomation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        let data =
            {
                company: {
                    'url_logo': 'http://media.sohuutritue.net.vn/files/lephuong/2017/02/28/bi-an-dang-sau-logo-nhung-thuong-hieu-noi-tieng-1-1029.jpg',
                    'name': 'FinLogistic',
                    'rate': 3,
                    'url_website': 'https://finlogistics.vn',
                    'count_order': 5000,
                    'count_review': 231,
                    'service': "Express, Air, FBA",
                    'detail': 'ITD Global is an established international logistics and express courier specialist with offices all over the world. They have teams on the ground on all the major commercial continents so they can liaise directly with your factories and suppliers.'
                },
                transport_type: 4,
                transit_time: '3 - 6 DAYS',
                port_to_port_transit_time: '2 - 3 DAYS',
                name: 'ITD Global',
                router: '427100, ZHANGJIAJIE>EXPRESS>NEW YORK, NY',
                valid_until: '2018-12-30',
                total_price: 45.84,
                pricing_group: [
                    {
                        'name': '427100, Zhangjiajie > New York, NY',
                        'detail': [
                            {
                                'price': 123.5,
                                'fee_code': 'EXPRESS',
                                'fee_name': 'Express Door to Door Rate',
                                'comment': 'comment',
                                'unit': 1,
                                'unit_price': 123.5,
                                'rate': 1,
                                'system_currency': 'VN',
                                'currency': 'VN'
                            },
                            {
                                'price': 123.5,
                                'fee_code': 'EXPRESS',
                                'fee_name': 'Express Door to Door Rate',
                                'comment': 'comment',
                                'unit': 1,
                                'unit_price': 123.5,
                                'rate': 1,
                                'system_currency': 'VN',
                                'currency': 'VN'
                            }
                        ]
                    },
                    {
                        'name': '427100, Zhangjiajie 2 > New York, NY 3',
                        'detail': [
                            {
                                'price': 123.5,
                                'fee_code': 'EXPRESS',
                                'fee_name': 'Express Door to Door Rate',
                                'comment': 'comment',
                                'unit': 1,
                                'unit_price': 123.5,
                                'rate': 1,
                                'system_currency': 'VN',
                                'currency': 'VN'
                            },
                            {
                                'price': 123.5,
                                'fee_code': 'EXPRESS',
                                'fee_name': 'Express Door to Door Rate',
                                'comment': 'comment',
                                'unit': 1,
                                'unit_price': 123.5,
                                'rate': 1,
                                'system_currency': 'VN',
                                'currency': 'VN'
                            }
                        ]
                    },
                ]
            };
        this.setState({data});
    }

    render() {
        const {data} = this.state;
        return (
            <MasterRow>
                <SummaryRow>
                    <QuoteVendor company={data.company ? data.company : {}}/>
                    <QuoteSummary data={data}/>
                    <QuotePrice price={data.total_price}/>
                </SummaryRow>
            </MasterRow>
        );
    }
}

export default MasterLayout(QuoteInfomation);