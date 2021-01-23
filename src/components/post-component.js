import React, { Component } from 'react';
import styled from 'styled-components';
import NormalizePostSummary from '../helpers/normalization';
import ShowCards from '../helpers/show-cards';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

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
                                <div key={index} className="tag">
                                    <svg alt="Tag" width="10" height="10">
                                        <use href="/icons/sprite.svg#tag"></use>
                                    </svg> {tag}
                                </div>
                            </a>);
                        })}
                    </div>
                    <div className="full-width-card card" id="disqus_thread"></div>
                    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered byDisqus.</a></noscript>
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
            })
            .finally(() => {
                ShowCards();
                this.loadDisqus();
            });
    }

    componentDidUpdate() {
        import(`highlight.js/styles/a11y-${localStorage.getItem('mode')}.css`);
        this.highlight();
    }

    highlight = () => document.querySelectorAll('pre').forEach(node => hljs.highlightBlock(node));

    loadDisqus() {
        setTimeout(() => {
          var d = document, s = d.createElement('script');
    
              s.src = '//mika-house.disqus.com/embed.js';
    
              s.setAttribute('data-timestamp', new Date().toString());
              if (document.querySelector('#disqus_thread')) {
                (d.head || d.body).appendChild(s);
              }
        }, 600);
      }
}