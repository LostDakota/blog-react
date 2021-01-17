import React, { Component } from 'react';
import styled from 'styled-components';

const FullWidth = styled.div`
    background-color: white;
    padding: 1rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .05);
    border-radius: 3px;
    grid-column: 1 / -1;
`;

const bioPicStyle = {
    width: '200px',
    float: 'left',
    margin: '0 20px 5px 0'
}

class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <FullWidth className="card">
                        <div>
                            <h2>About me</h2>
                            <picture style={bioPicStyle}>
                                <source srcSet="/drew.webp" type="image/webp"></source>
                                <img src="/drew.jpg" alt="Drew Mika" />
                            </picture>

                            {/* <p><a href="/assets/resume" target="_blank" style="margin-bottom: 1rem; color: #6ea9a9;"><i class="fas fa-file" style="margin-right: .5rem;"></i>My Resume</a></p> */}
                            <p>My name is Drew Mika. I hail from a suburb of Youngstown, Ohio.</p>
                            <p>
                                I graduated from the Youngstown State University in 2006 with a bachelor's in graphic design.
                                How did I get into application development, you might ask.
                                Well, let me tell you a story, as my mom would say.
</p>
                            <p>
                                My glorious first generation iMac broke (corrupted os) around the time of graduation and I wasn't able to shell out the money for a new machine and I lost the disc to do a reinstall.
                                So I took to the internet for a solution.
                                I found Linux!
                                I know, I know. WTF? No one cares about that, but it's important to the story.
                                I installed Ubuntu and realized that there was a whole new world out there that I wasn't privy to.
</p>
                            <p>
                                In high school, and college, I learned html and css.
                                There was also image slicing and Dreamweaver, ugh.
                                But I never learned any other higher level programming languages.
                                Enter bash (not *necessarily* a "real" programming language), javascript and php...
                                We all have to start somewhere.
</p>
                            <p>
                                I started writing a site for home automation.
                                Nothing fancy, really.
                                Just something I could check in on the various cameras I had set up around the house and open the garage door with a raspberry pi.
                                NBD.
                                I kept at it and then I had a relatively polished website.
                                With ajax and haptic feedback and responsiveness, oh my.
</p>
                            <p>
                                I took my shiny website (then webapp) and applied as a Developer I at Hyland Software a couple of years ago.
                                Never in a million years would I have thought I could land that type of gig.
                                I did.
                                So cool.
                                I love my job.
                                I'll write a blog post about what we're working on at a later date.
</p>
                            <p>
                                Anyway.
                                This is what I do now full time.
                                My passion is javascript and node, but I make the donuts with C#.
                                I love learning new things and I don't ever want to stop.
</p>
                            <p>
                                Thanks for visiting my site!
</p>
                        </div>
                    </FullWidth>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.title = 'About';

        setTimeout(() => {
            [...document.getElementsByClassName('card')].forEach(card => card.style.opacity = "1");
        }, 300);
    }
}

export default About;