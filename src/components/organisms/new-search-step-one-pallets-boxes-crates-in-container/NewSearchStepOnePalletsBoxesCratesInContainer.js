import React from 'react';
import { Lang } from '../../../utils';
import NewSearchStepOneNumberHeader from '../../molecules/new-search-step-one-number-header/NewSearchStepOneNumberHeader';
import styled, { css } from 'styled-components';

const Header = styled.div`
    float: left;
    width:100%;
    height: 35px;
    background: #fafbfc;
    border-bottom: 1px solid #d8e5ef;
`;

const NewSearchStepOnePalletsBoxesCrates = (props) => {
    return (
        <Header>
            <NewSearchStepOneNumberHeader
                labelNumber={1}
                labelTitle={Lang.trans('What are you shipping?')}
            />
        </Header>
    );
};

export default NewSearchStepOnePalletsBoxesCrates;