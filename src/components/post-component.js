import React, { Component } from 'react';
import styled from 'styled-components';
import NormalizePostSummary from '../helpers/normalization';

const StyledPost = styled.div`
    margin-bottom: 1rem;
    
    & pre {
        padding: .5rem;
        background-color: #333;
        color: white;
    }
`;

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            tags: []
        }
    }

    render() {
        return (
            <StyledPost>
                <div className="container">
                    <div className="full-width-card">
                        <h2>{this.state.post.title}</h2>
                        <div className="t-small t-muted">{this.state.post.createdAt}</div>
                        <div dangerouslySetInnerHTML={{ __html: this.state.post.raw }}></div>
                        {this.state.tags.map((tag, index) => {
                            return (<a key={index} href={`/blog/${tag}`}>
                                <div key={index} className="tag"><img alt="Tag" src="/icons/tag.svg" width="10" height="10" /> {tag}</div>
                            </a>);
                        })}
                    </div>
                </div>
            </StyledPost>
        )
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        fetch(`https://api.mika.house/post/${params.slug}`)
            .then(res => res.json())
            .then(data => {
                document.title = data.title;
                this.setState({ post: { ...NormalizePostSummary(data) }, tags: [...data.tags] });
            });
    }
}