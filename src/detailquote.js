import React, { Component } from 'react';
import './App.css';
import  DataQuote from './DataQuote'
import  QuoteDetail from "./components/organisms/quote_detail/QuoteDetail";
class Detailquote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : DataQuote
        };
    }

    render() {
        const DataQuote = this.state.data;
        return (
            <div className="leg-table">
                <QuoteDetail data = {DataQuote}/>
            </div>
        );
    }
}

export default Detailquote;
