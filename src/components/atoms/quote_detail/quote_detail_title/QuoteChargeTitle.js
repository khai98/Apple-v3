import React, {Component} from 'react';
import '../css/Style.css';

class QuoteChargeTitle extends Component {
    render() {

        return (
            <div className="leg-route">
                <span>
                     <span className="from">
                         <span className="localtion">
                             <span className="port">{this.props.dataQuotes.port}</span>, <span className="city">{this.props.dataQuotes.cityFrom} </span>
                         </span>
                     </span>
                     <span className="sep"> &gt;</span>
                     <span className="to">
                         <span className="localtion">
                             <span className="port">{this.props.dataQuotes.door}</span>, <span className="city">{this.props.dataQuotes.cityTo}</span>
                         </span>
                     </span>
                 </span>
            </div>
        );
    }
}

export default QuoteChargeTitle;