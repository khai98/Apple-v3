import React, {Component} from 'react';
import QuoteChargeTitle from "../../atoms/quote_detail/quote_detail_title/QuoteChargeTitle";
import QuoteChargeTable from "../../atoms/quote_detail/quote_detail_colum/QuoteChargeTable";
import QuoteChargeSubtotal from "../../atoms/quote_detail/quote_detail_row/QuoteChargeSubtotal";

class QuoteChargeList extends Component {

    render() {
       let dataQuotes = this.props.dataQuotes;
       return(
       dataQuotes.map(value =>
            <div>
                <QuoteChargeTitle dataQuotes = {value}/>
                <QuoteChargeTable dataQuotes = {value}/>
                <QuoteChargeSubtotal dataQuotes = {value}/>
            </div>
       ));
    }
}

export default QuoteChargeList;