import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDefaultCard = styled.div`
    background-color: white;
    grid-column: 1 / -1;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .05);
    padding: 1rem;
    text-align: center;
    margin-bottom: 10px;
    transition: .5s ease-in-out;
    opacity: 0;
    overflow: hidden;

    &:hover {
        box-shadow: 1px 8px 10px rgba(0, 0, 0, .1);
    }
`;

class DefaultCard extends Component {
    render() {
        return (
            <StyledDefaultCard className="card">
                <h2>{this.props.title}</h2>
                <div dangerouslySetInnerHTML={{__html: this.props.copy}}></div>
            </StyledDefaultCard>
        )
    }
}

export default DefaultCard;