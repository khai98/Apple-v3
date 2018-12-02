import React, { Component } from 'react';
import NewSearchHeaderOrganisms from '../../organisms/NewSearchHeaderOrganisms';
import TabItemsNewSearchHeader from '../../molecules/search-tab-items-new-search-molecules/TabItemsNewSearchHeader';
import NewSearchNexStep from '../../atoms/button/NewSearchNexStep';
import './NewSearchTemplate.css';
import NewSearchStepOnePalletsBoxesCrates from '../../organisms/new-search-step-one-pallets-boxes-crates/NewSearchStepOnePalletsBoxesCrates';
import NewSearchStepOneRowShipping from '../../organisms/new-search-step-one-row-shipping/NewSearchStepOneRowShipping';
import NewSearchStepOnePalletsBoxesCratesInContainer from '../../organisms/new-search-step-one-pallets-boxes-crates-in-container/NewSearchStepOnePalletsBoxesCratesInContainer';
import NewSearchStepOneRowShippingInContainer from '../../organisms/new-search-step-one-row-shipping-in-container/NewSearchStepOneRowShippingInContainer';

class NewSearchTemplate extends Component {
    render() {
        const { tabs, onClick, step } = this.props;
        return (
            <div>
                <NewSearchHeaderOrganisms
                    {...this.props}
                />
                <div style={{
                    float: 'left',
                    width: '100%',
                    paddingTop: 70
                }}>
                    <div className='container-fingroup'>
                        <TabItemsNewSearchHeader
                            tabs={tabs}
                            onClick={onClick}
                        />
                        {tabs === 1 && <div className='new-search-tabs-content'>
                            <NewSearchStepOnePalletsBoxesCrates
                            />
                            <div style={{ color: '#627b93', padding: '15px',float:'left',width:'100%' }}>
                                <NewSearchStepOneRowShipping />
                            </div>
                        </div>}

                       {tabs === 2 && <div className='new-search-tabs-content'>
                            <NewSearchStepOnePalletsBoxesCratesInContainer
                            />
                            <div style={{ color: '#627b93', padding: '15px',float:'left',width:'100%' }}> 
                                <NewSearchStepOneRowShippingInContainer/>
                            </div>
                        </div>}

                        {step < 3 && <NewSearchNexStep
                            label='NEXT STEP'
                            value={step}
                            name='step'
                            onClick={onClick}
                        />}


                    </div>
                </div>

            </div>

        );
    }
}

export default NewSearchTemplate;