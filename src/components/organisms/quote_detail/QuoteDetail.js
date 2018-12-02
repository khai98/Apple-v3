/**
 * props:
 * data:[{name, value}...]
 */
import React, {Component} from 'react';
import QuoteChargeList from "../../molecules/quote_detail/QuoteChargeList";
import QuoteDetailFee from "../../molecules/quote_detail/QuoteDetailFee";
import QuoteDetailSummary from "../../molecules/quote_detail/QuoteDetailSummary";

const QuoteDetail =(props)=>{
    return (
        <div>
            <QuoteChargeList dataQuotes = {props.data}/>
            <QuoteDetailFee dataQuotes = {props.data}/>
            <QuoteDetailSummary dataQuotes = {props.data}/>
        </div>
    );
};

export default QuoteDetail;