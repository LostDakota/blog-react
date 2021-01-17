import React, { Component } from 'react';
import styled from 'styled-components';
import Global from '../helpers/global-scripts';

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
                            <a title="Github" href="https://github.com/LostDakota">
                                <svg width="30" height="35">
                                    <use href="/icons/sprite.svg#github"></use>
                                </svg>
                            </a>
                        </StyledSocialIcons>
                        <StyledSocialIcons>
                            <a title="twitter" href="https://twitter.com/DrewMika">
                                <svg width="30" height="35">
                                    <use href="/icons/sprite.svg#twitter"></use>
                                </svg>
                            </a>
                        </StyledSocialIcons>
                        <StyledSocialIcons>
                            <a title="LinkedIn" href="https://www.linkedin.com/in/drewmika/">
                                <svg width="30" height="35">
                                    <use href="/icons/sprite.svg#linkedin"></use>
                                </svg>
                            </a>
                        </StyledSocialIcons>
                    </StyledSocial>
                    <StyledCopy>
                        &copy; {year} Drew Mika
                    </StyledCopy>
                </div>
                <svg width="40" height="40" id="dark-mode">
                    <use href="/icons/sprite.svg#lightbulb"></use>
                </svg>
            </StyledFooter>
        );
    };

    componentDidMount() {
        Global();
    }
}

export default Footer;