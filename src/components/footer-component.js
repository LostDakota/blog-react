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
`;

const year = new Date().getFullYear();

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div className="container">
                    <StyledSocial>
                        <StyledSocialIcons>
                            <img alt="Github" src="/icons/github.svg" width="30" height="35"></img>
                        </StyledSocialIcons>
                        <StyledSocialIcons>
                            <img alt="Twitter" src="/icons/twitter.svg" width="30" height="35"></img>
                        </StyledSocialIcons>
                        <StyledSocialIcons>
                            <img alt="LinkedIn" src="/icons/linkedin.svg" width="30" height="35"></img>
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