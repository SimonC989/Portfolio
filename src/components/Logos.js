import React from "react";
import styled from 'styled-components';
import GitHubLogo from '../../static/GitHub.png';
import LinkedInLogo from '../../static/LinkedIn.png'

const LogoBox = styled.div`
  display: flex;
  float: right;
  margin-left: 5px;
`;

const LogoSize = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const LogoLink = styled.a`
  background-image: none;
`;

const Logos = () => (
  <LogoBox>
    <LogoLink href="https://www.linkedin.com/in/simonc989/">
      <LogoSize src={LinkedInLogo} alt="LinkedIn Logo" />
    </LogoLink>
    <LogoLink href="https://github.com/SimonC989">
      <LogoSize src={GitHubLogo} alt="GitHub Logo" />
    </LogoLink>
  </LogoBox>
)

export default Logos;