import React, { Component } from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route
} from "react-router-dom";

import Home from './home-component';
import Blog from './blog-component';
import About from './about-component';
import Post from './post-component';
import Contact from './contact-component';

const StyledHeader = styled.header`
    width: 100%;
    background-color: #235e71;
    color: white;
    text-align: center;
    margin-bottom: 10px;
    grid-column: 1 / -1;
`;

const StyledTitle = styled.h1`
    grid-column: 1 / -1;
    padding: .5rem;
`

const activeClassName = 'acitve';

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
    padding: .25rem 0 .5rem;
    transition: background-color .2s ease-in-out;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom: 2px solid #235e71;
    color: white;
    grid-column: span 3;

    &:hover, &.${activeClassName} {
        background-color: #FAFAFA;
        border-bottom: 2px solid #add8e6;
        color: #235e71;
    }
`

class Header extends Component {
    render() {
        return (
            <Router>
                <StyledHeader>
                    <div className={'container'}>
                        <StyledTitle>Mika House</StyledTitle>
                        <StyledNavLink exact to="/">Home</StyledNavLink>
                        <StyledNavLink to="/blog">Blog</StyledNavLink>
                        <StyledNavLink to="/about">About</StyledNavLink>
                        <StyledNavLink to="/contact">Contact</StyledNavLink>
                    </div>
                </StyledHeader>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/blog" component={Blog}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/post/:slug" component={Post}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Header;