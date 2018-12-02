import React, {Component} from 'react';

class QuoteDetailFreeTable extends Component {
    render() {
        return (
            <div className="remarks-and-bonds without-bonds">
                <div className="remarks">
                    <b>Main Air Freight Leg:</b>
                    <br/>• Transit times take into consideration business days, only.
                    <br/>• Rates do not cover hazardous or dangerous materials, and exclude handling sensitive
                    commodities.
                    <br/>• Rates exclude export declaration, customs exam (if required), and VAT, duties, and bond fees
                    at both ends (if any).
                    <br/>• If necessary, TCG Logistics can offer export declaration with extra costs, subject to HS
                    code.
                    <br/>
                    <br/><b>Origin Charges:</b>
                    <br/>• Other charges at cost per actual outlay.
                    <br/>
                    <br/><b>Destination Charges:</b>
                    <br/>• When consignee is an individual, an additional 20 USD will be added to the clearance fee.
                    <br/>
                    <br/>• Commodity that requires FDA will be additonal fee as follows :
                    <br/>
                    <br/>processing fee 75$
                    <br/>
                    <br/>The bond is calculated 3 times the value plus the cost of duties x 0.5% .
                    <br/>
                    <br/>
                    <br/><b>Delivery Leg:</b>
                    <br/>• Delivery location must have proper manpower and equipment for cargo unloading.
                    <br/>• Delivery rates do not include inside delivery.
                    <br/>• Rates are subject to change based on actual pieces, weight, and/or volume (dimensions of
                    cargo).
                    <br/>• MPF (Merchandise Processing Fees): 0.3464% of merchandise value. Min. 25 USD. Max. 485 USD.
                    <br/>• Driver Standby Charge: 1 hour fee. 85 USD per each additional hour, if applicable.
                    <br/>• Delivery to residential location will incur additional fees.
                    <br/>• Any additional cost that occurs due to VGM, fumigation, exams, trucker stop off or detention,
                    congestion or terminal delays, will be billed as per outlay.
                    <br/>• FBA shipments will incur an additonal charge of 35 USD.
                    <br/>
                </div>
                <div className="bonds"/>
            </div>
        );
    }
}

export default QuoteDetailFreeTable;