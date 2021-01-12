import React, { Component } from 'react';
import NormalizePostSummary from '../helpers/normalization';

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
            <div>
                <div className="container">
                    <div className="full-width-card">
                        <h2>{this.state.post.title}</h2>
                        <div className="t-small t-muted">{this.state.post.createdAt}</div>
                        <div dangerouslySetInnerHTML={{ __html: this.state.post.raw }}></div>
                        {this.state.tags.map((tag, index) => {
                            return(<div key={index} className="tag"><img alt="Tag" src="/icons/tag.svg" width="10" height="10" /> {tag}</div>);
                        })}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        fetch(`https://api.mika.house/post/${params.slug}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ post: { ...NormalizePostSummary(data) }, tags: [...data.tags] });
            });
    }
}