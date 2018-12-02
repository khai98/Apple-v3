import React, {Component} from 'react';
import styled from "styled-components";

const RateContainer = styled.div`
    text-align: center;
`;

const Star = styled.span`
    font-size: 18px;
    color: #f5a213;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
`;

class Rate extends Component {
    render() {
        const arr = [0, 0, 0, 0, 0];
        const {count, size} = this.props;
        const Rating = arr.map((val, index) => {
            if (index < count) return <Star key={index} style={{fontSize: size || ""}} className="icon icon-star-full"/>;
            else return <Star key={index} style={{fontSize: size || ""}} className="icon icon-star-empty"/>;
        });

        return (
            <RateContainer>
                {Rating}
            </RateContainer>
        );
    }
}

export default Rate;