import React, { Component } from 'react';
import DefaultCard from './default-card-component';

class About extends Component {
    render() {
        return (
            <div className="container">
                <DefaultCard title='Mika House Development' copy='This website is dedicated to web and application development, technology and other geeky stuff that all your cool friends (or spouse, in my case) will roll their eyes about.'></DefaultCard>
                <DefaultCard title='Mika House Development' copy='This website is dedicated to web and application development, technology and other geeky stuff that all your cool friends (or spouse, in my case) will roll their eyes about.'></DefaultCard>
            </div>
        )
    }

    componentDidMount() {
        document.title = 'About';
    }
}

export default About;