import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    padding: 20px;
    border-radius: 3px;
    background-color: white;
    margin-bottom: 10px;
    grid-column: 1 / -1;
    & a:first-child {
        font-size: 1.5rem;
    }

    @media(min-width: 670px) {
        grid-column: span 6;
    }

    @media(min-width: 1270px) {
        grid-column: span 4;
    }
`;

const PostCard = props => {
    return <StyledCard>
        <a href={`/post/${props.slug}`}>{props.title}</a><br />
        <span className="t-small t-muted">{props.createdAt}</span><br />
        <span>{props.content}</span>
        <a href={`/post/${props.slug}`}> ...read more</a>
    </StyledCard>
}

export default PostCard;