import React, { Component, lazy } from 'react';
import NormalizePostSummary from '../helpers/normalization';

const PostCard = lazy(() => import('./post-summary-component'));

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

    componentWillMount() {
        let base = 'https://api.mika.house';

        const script = document.createElement('link');
        script.rel = 'preconnect';
        script.src = base;
        document.head.appendChild(script);

        const { match: { params } } = this.props;

        if (params.tag) {
            base += `/tags/${params.tag}`;
            document.title = `Posts tagged with ${params.tag}`;
        } else {
            base += '/posts';
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