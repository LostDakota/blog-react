import React, { Component, lazy } from 'react';
import NormalizePostSummary from '../helpers/normalization';
import ShowCards from '../helpers/show-cards';

const DefaultCard = lazy(() => import('./default-card-component'));
const PostCard = lazy(() => import('./post-summary-component'));

export default class Home extends Component {
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
                    <DefaultCard title="Welcome to Mika House Web Development"
                        copy="This website is dedicated to web and application development, technology and other geeky stuff that all your cool friends will roll their eyes about."></DefaultCard>
                    {this.state.posts.map((post, index) => (
                        <PostCard key={index}
                            content={post.content}
                            title={post.title}
                            slug={post.slug}
                            createdAt={post.createdAt}
                            tags={post.tags}></PostCard>
                    ))}
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.mika.house/latest/3')
            .then(res => res.json())
            .then(data => {
                data.forEach(i => {
                    i = NormalizePostSummary(i)
                });
                this.setState({ posts: data });
            })
            .finally(() => ShowCards());

        document.title = 'Mika House Web Development';
    }
}