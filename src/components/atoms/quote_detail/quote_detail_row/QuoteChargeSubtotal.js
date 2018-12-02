import React, {Component} from 'react';
import '../css/Style.css';

class QuoteChargeSubtotal extends Component {
    render() {
        return (
            <div className="subtotal-row">
                <span className="subtotal">
                    <span className="subtotal-label"> Subtotal </span>
                    <span className="subtotal-amount">
                        <span className="formatted-price">
                            <span className="symbol">USD</span>
                            {/*{listDataQuotes}*/}

                            <span className="value">{this.props.dataQuotes.Subtotal}</span>
                        </span>
                    </span>
                </span>
            </div>
        );
    }
}

export default QuoteChargeSubtotal;