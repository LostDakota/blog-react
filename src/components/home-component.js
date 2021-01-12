import React, { Component } from 'react';
import DefaultCard from './default-card-component';
import PostCard from './post-summary-component';
import NormalizePostSummary from '../helpers/normalization';

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
                        copy="This website is dedicated to web and application development, technology and other geeky stuff that all your cool friends (or spouse, in my case) will roll their eyes about."></DefaultCard>
                    {this.state.posts.map((post, index) => (
                        <PostCard key={index}
                            content={post.content}
                            title={post.title}
                            slug={post.slug}
                            createdAt={post.createdAt}></PostCard>
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
            });
    }
}