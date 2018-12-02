import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-top: 1px solid #d8e5ef;
    color: #232537;
    background-color: #fafbfc;
`

const Container = styled.div`
    padding: 7px 0;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 544px) {
        max-width: 576px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }
    
    @media (min-width: 992px) {
        max-width: 930px;
    }
`

const StickyHeader = (props) => (
    <Wrapper>
        <Container>
            {props.children}
        </Container>
    </Wrapper>
)

export default StickyHeader