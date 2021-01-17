import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    padding: 20px;
    border-radius: 3px;
    background-color: white;
    margin-bottom: 10px;
    grid-column: 1 / -1;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
    transition: .5s ease-in-out;
    min-height: 256px;
    opacity: 0;

    &:hover {
        box-shadow: 1px 8px 10px rgba(0, 0, 0, 0.1);
    }
    
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
    return <StyledCard className="card">
        <a href={`/post/${props.slug}`}>{props.title}</a><br />
        <span className="t-small t-muted">{props.createdAt}</span><br />
        <span>{props.content}</span>
        <a href={`/post/${props.slug}`}> ...read more</a>
        <div className="tags">
            {props.tags.map((tag, index) => {
                return (
                    <a key={index} href={`/blog/${tag}`}>
                        <div className="tag"><svg alt="tag" width="10" height="10"><use href="/icons/sprite.svg#tag"></use></svg> {tag}</div>
                    </a>
                )
            })}
        </div>
    </StyledCard>
}

export default PostCard;