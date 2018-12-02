import React from 'react';
import MoveType from '../components/atoms/labels/MoveType'
import SearchQuoteHeader from '../components/molecules/SearchQuoteHeader'

const Atoms = (props) => (
    <div>
        <SearchQuoteHeader 
            additional_services={[
                {name: "Customs Brokerage", value: "(1 Commodity)"},
                {name: "Single Entry Bond", value: ""}
            ]}

            from="port"
            to="port"
            origin="CNBHY BEIHAI, GUANGXI ZHUANG, CHINA"
            destination="NEW YORK, NY, USA"
            load="20' Container"
            goods_ready="Dec 25, 2018"
        />

        <div id="id" style={{height: "9000px"}}></div>
    </div>
)

export default Atoms;