import React, {Component} from 'react';

class QuoteDetailSubtotal extends Component {
    render() {
        return (
            <div className="total">
               <span className="total">
                   <span className="subtotal-label"> Total </span>
                   <span className="total-amount">
                       <span className="formatted-price">
                           <span className="symbol">USD</span>
                           <span className="value">290.00</span></span>
                      </span>
                    </span>
            </div>
        );
    }
}

export default QuoteDetailSubtotal ;