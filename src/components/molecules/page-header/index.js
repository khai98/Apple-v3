import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    background: #fff;
    box-shadow: 0 1px 2px 2px rgba(55,56,72,.04);
    width: 100%;
    z-index: 3;
`;

const Container = styled.div`
    background: #fff;
    z-index: 2;
    position: relative;
    border-bottom: 1px solid rgba(216,229,239,.8);
    box-shadow: 0 5px 10px rgba(0,0,0,.08);
`;



const PageHeader = (props) => (
    <Wrapper>
        <Container>
            {props.children}
        </Container>
    </Wrapper>
)

export default PageHeader;