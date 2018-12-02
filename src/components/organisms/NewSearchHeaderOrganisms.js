import React, { Component } from 'react';
import SearchPageHeader from '../molecules/search-page-header-new-search-molecules/SearchPageHeader';

class NewSearchHeaderOrganisms extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <SearchPageHeader
                    {...this.props}
                />
            </div>
        );
    }
}

export default NewSearchHeaderOrganisms;