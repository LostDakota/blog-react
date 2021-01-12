import React, { Component } from 'react';
import PostCard from './post-summary-component';
import NormalizePostSummary from '../helpers/normalization';

export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map((post, index) => {
                    return(<PostCard key={index}
                        content={post.content}
                        title={post.title}
                        slug={post.slug}
                        createdAt={post.createdAt}></PostCard>);
                })}
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.mika.house/posts')
            .then(res => res.json())
            .then(data => {
                data.forEach(post => post = NormalizePostSummary(post));
                this.setState({ posts: data });
            });
    }
}