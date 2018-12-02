import React, { Component } from 'react';
import './SearchPageHeader.css';

class SearchPageHeader extends Component {
    render() {
        const {collapsed}= this.props
        return (
            <div
                style={!collapsed?{paddingLeft:200}:{paddingLeft:50}}
                className='search-page-header-fix'
            >
                <div className='search-page-header'>
                    <div className='search-page-header-iteam'>
                        <div className="search-page-header-iteam-message">Smooth shipping on the online freight marketplace</div>
                        <div className="search-page-header-iteam-sub-message">Transparent pricing. Instant comparisons. 24/7 support.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPageHeader;