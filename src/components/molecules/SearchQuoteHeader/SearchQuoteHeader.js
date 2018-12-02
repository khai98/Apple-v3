/**
 * props:
 * additional_services : [{name, value}...]
 * from: move type
 * to: move type
 * load: load infomation
 * goods_ready: goods ready date
 * origin: pickup address
 * destination: delivery address
 */

import React from 'react';
import styled from 'styled-components';
import PageHeader from '../page-header';
import MoveType from '../../atoms/labels/MoveType';
import AdditionalServices from '../../atoms/labels/AdditionalServices';
import {Lang} from '../../../utils'
import QuoteRouteHeader from '../QuoteRouteHeader';
import StickyHeader from '../sticky-header';
import AnimateHeight from 'react-animate-height';

const Field = styled.span`
    color: #8dabc4;
    display: block;
    line-height: 1.64;
    font-size: 11px;
    text-transform: capitalize;
    flex: 0 0 auto;
`;

const Value = styled.div`
    display: block;
    line-height: 1.38;
`

const Info = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-self: center;

    :first-child {
        border-right: 1px solid #d8e5ef;
    }
`
const Summary = styled.div`
    display: flex;
    
`

const SummaryWrap = styled.div`
    padding: 16px 0;
    max-height: 98px;
    overflow: hidden;
    color: #232537;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
    margin: 0 auto;
    @media (min-width: 544px) {
        max-width: 576px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }
    
    @media (min-width: 992px) {
        max-width: 930px;
    }
`

const InfoWrap = styled.div`
    display: inline-flex;
`

const SearchQuoteHeaderTmp = (props) => (
    <PageHeader>
        <AnimateHeight
            duration={ 500 }
            height={ props.height }
        >
            <SummaryWrap id="search-quote-header">
                    <Summary>
                        <MoveType from={props.from} to={props.to} />
                        <InfoWrap>
                            <Info>
                                <Field>{Lang.trans("Load")}</Field>
                                <Value>{props.load}</Value>
                            </Info>
                            <Info>
                                <Field>{Lang.trans("Goods Ready")}</Field>
                                <Value>{props.goods_ready}</Value>
                            </Info>
                        </InfoWrap>
                    </Summary>
                    <AdditionalServices additional_services={props.additional_services}/>
            </SummaryWrap>
        </AnimateHeight>
        <StickyHeader>
            <QuoteRouteHeader origin={props.origin} destination={props.destination} />
        </StickyHeader>
    </PageHeader>
)

class SearchQuoteHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            in: true,
            height: 98
        }
    }

    componentDidMount() {
        let s = this

        window.addEventListener("scroll", function (e) {
            if(document.documentElement.scrollTop > 98) {
                if(s.state.height === 98) {
                    s.setState({height: 0});
                }
            }

            if(document.documentElement.scrollTop < 10) {
                if(s.state.height === 0) {
                    s.setState({height: 98});
                }
            }
        })
    }

    click = () => {
        this.setState({
            in: !this.state.show
        })
    }

    render() {
        return (
            <SearchQuoteHeaderTmp {...this.props} in={this.state.in} height={this.state.height} />
        )
    }
}

export default SearchQuoteHeader;