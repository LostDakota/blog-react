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
                <div className="container">
                    {this.state.posts.map((post, index) => {
                        return (<PostCard key={index}
                            content={post.content}
                            title={post.title}
                            slug={post.slug}
                            createdAt={post.createdAt}
                            tags={post.tags}></PostCard>);
                    })}
                </div>
            </div>
        )
    }

    componentDidMount() {
        let base = 'https://api.mika.house/';
        const { match: { params } } = this.props;

        if (params.tag) {
            base += `tags/${params.tag}`;
            document.title = `Posts tagged with ${params.tag}`;
        } else {
            base += 'posts';
            document.title = 'Mika House Blog';
        }

        fetch(base)
            .then(res => res.json())
            .then(data => {
                data.forEach(post => post = NormalizePostSummary(post));
                this.setState({ posts: data });
            });        
    }
}