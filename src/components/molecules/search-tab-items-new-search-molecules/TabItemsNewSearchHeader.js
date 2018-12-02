import React from 'react';
import './TabItemsNewSearchHeader.css';
import TabsNewSearchHeader from '../../atoms/labels/TabsNewSearchHeader';

const TabItemsNewSearchHeader = (props) => {
    return (
        <div className='tabl-new-search'>
            <div className='tabl-new-search-header'>
                <TabsNewSearchHeader onClick={props.onClick} keys={1} onClick={props.onClick} lable='PALLETS / BOXES / CRATES' name='palletsBoxesCrates' activate={props.tabs === 1} />
                <TabsNewSearchHeader onClick={props.onClick} keys={2} onClick={props.onClick} lable='CONTAINERS' name='containers' activate={props.tabs === 2} />
                
            </div>
            
            <em className="tabl-new-search-header-highlighter" style={props.tabs === 1 ?{
                    width: 192, marginLeft: 0
                    }:{width: 95, marginLeft: 215}}></em>
        </div>
    );
}

export default TabItemsNewSearchHeader;