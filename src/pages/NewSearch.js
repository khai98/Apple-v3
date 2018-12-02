import React, { Component } from 'react';
import MasterLayout from '../components/layouts/MasterLayout';
import NewSearchTemplate from '../components/templates/new-search-template/NewSearchTemplate'

class NewSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: 1,
            step: 1
        }
    }
    
    render() {
        const { tabs, step } = this.state
        return (
            <NewSearchTemplate
                tabs={tabs}
                step={step}
                {...this.props}
                onClick={this.onClick}
            />
        );
    }

    onClick = (name, value) => {
        switch (name) {
            case 'step':
                if (value + 1 >= 3) {
                    value = 3;
                } else {
                    value = value + 1;
                }
                break;
        }
        this.setState({
            [name]: value
        })
    }
}

export default MasterLayout(NewSearch);