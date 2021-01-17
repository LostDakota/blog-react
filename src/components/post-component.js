import React, { Component, lazy } from 'react';
import styled from 'styled-components';
import NormalizePostSummary from '../helpers/normalization';
import '../hljs.css';

const hljs = lazy(() => import('highlight.js/lib/highlight'));
const javascript = lazy(() => import('highlight.js/lib/languages/javascript'));

const StyledPost = styled.div`
    margin-bottom: 1rem;
`;

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            tags: []
        }

        hljs.registerLanguage('javascript', javascript);
    }

    render() {
        return (
            <StyledPost>
                <div className="container">
                    <div className="full-width-card card">
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
                this.highlight();
            });
    }

    componentDidUpdate() {
        console.log('here');
        this.highlight();
    }

    highlight = () => document.querySelectorAll('pre').forEach(node => hljs.highlightBlock(node));
}