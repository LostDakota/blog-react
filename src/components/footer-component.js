import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #235e71;
    text-align: center;
    color: white;
    padding: .5rem 0;
    grid-column: 1 / -1;
`;

const StyledCopy = styled.div`
    grid-column: 1 / -1;
    font-size: .75rem;
`;

const StyledSocial = styled.div`
    grid-column: 1 / -1;
    text-align: center;
`;

const StyledSocialIcons = styled.div`
    margin: 0 2rem;
    display: inline-block;
    transition: transform .4s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const year = new Date().getFullYear();

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div className="container">
                    <StyledSocial>
                        <StyledSocialIcons>
                            <a href="https://github.com/LostDakota">
                                <img alt="Github" src="/icons/github.svg" width="30" height="35"></img>
                            </a>
                        </StyledSocialIcons>
                        <StyledSocialIcons>
                            <a href="https://twitter.com/DrewMika">
                                <img alt="Twitter" src="/icons/twitter.svg" width="30" height="35"></img>
                            </a>
                        </StyledSocialIcons>
                        <StyledSocialIcons>
                            <a href="https://www.linkedin.com/in/drewmika/">
                                <img alt="LinkedIn" src="/icons/linkedin.svg" width="30" height="35"></img>
                            </a>
                        </StyledSocialIcons >
                    </StyledSocial>
                    <StyledCopy>
                        &copy; {year} Drew Mika
                </StyledCopy>
                </div>
            </StyledFooter>
        );
    };
}

export default Footer;