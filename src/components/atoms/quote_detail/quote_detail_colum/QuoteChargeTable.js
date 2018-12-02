import React, {Component} from 'react';
import '../css/Style.css';

class QuoteChargeTable extends Component {
    render() {
        return (
            <table className="leg-fees-table">
                <thead  className="table-th">
                    <th className= "th" >Fee code</th>
                    <th className= "th">Fee name</th>
                    <th className= "th">Comment</th>
                    <th className= "th">Units</th>
                    <th className= "th">Unit price</th>
                    <th className= "th">Amount</th>
                    <th className= "th">Final Amount</th>
                </thead>
                <tbody>
                    <tr className="table-td" >
                        <td className= "th">  {this.props.dataQuotes.FeeCode}</td>
                        <td className= "th">  {this.props.dataQuotes.FeeName}</td>
                        <td className= "th">  {this.props.dataQuotes.Comment}</td>
                        <td className= "th">  {this.props.dataQuotes.Units}</td>
                        <td className= "th">  {this.props.dataQuotes.UnitPrice}</td>
                        <td className= "th">  {this.props.dataQuotes.Amount}</td>
                        <td className= "th">  {this.props.dataQuotes.FinalAmount}</td>
                    </tr>
                </tbody>
            </table>

        )
    }
}

export default QuoteChargeTable;