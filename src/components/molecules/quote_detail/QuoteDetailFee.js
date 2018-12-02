import React, {Component} from 'react';
import QuoteDetailFreeTitle from "../../atoms/quote_detail/quote_detail_title/QuoteDetailFreeTitle";
import QuoteDetailFreeTable from "../../atoms/quote_detail/quote_detail_colum/QuoteDetailFreeTable";


class QuoteDetailFee extends Component {
    render() {
        return (
            <div>
                <QuoteDetailFreeTitle/>
                <QuoteDetailFreeTable/>
            </div>
        );
    }
}

export default QuoteDetailFee;