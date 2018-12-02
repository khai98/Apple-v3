import React from 'react';

const TabsNewSearchHeader = (props) => {
    return (<div className='tabl-new-search-header-wrapper'>
        <div onClick={()=>props.onClick('tabs',props.keys)} className={props.activate ? 'tabl-new-search-header-wrapper-title tabl-new-search-header-wrapper-title-activate' : 'tabl-new-search-header-wrapper-title'}>{props.lable}</div>
    </div>);
}

export default TabsNewSearchHeader;