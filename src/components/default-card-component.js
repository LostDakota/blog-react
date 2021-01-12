import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDefaultCard = styled.div`
    background-color: white;
    grid-column: 1 / -1;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .05);
    padding: .5rem;
    text-align: center;
    margin-bottom: 10px;
`;

class DefaultCard extends Component {
    render() {
        return (
            <StyledDefaultCard>
                <h2>{this.props.title}</h2>
                <p>{this.props.copy}</p>
            </StyledDefaultCard>
        )
    }
}

export default DefaultCard;