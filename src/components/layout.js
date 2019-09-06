import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
// import Simon from '../../static/Simon.jpg';
import Logos from '../components/Logos.js';

// const Avatar = styled.img`
//   float: left;
//   border-radius: 50%;
//   height: 100px;
//   width: 100px;
// `;

const Container = styled.div`
  // position: relative;
  margin: 30px auto;
  padding: 0 1rem;
  width: 100%;
  height: 50px;
`;

const ListLink = styled.div`
  display: inline-block;
`;
  
const LinkIcon = styled.div`
  margin-right: 15px;
  font-size: 30px;
`;

const List = styled.ul`
  float: left;
`;

// const Header = styled.div`
//   margin-bottom: 30px;
//   width: 100%;
// `;

const Layout = () => {
  return (
    <Container id="home">
        {/* <Avatar src={Simon} alt="me" /> */}
      <List>
        <ListLink>
          <Link to="/">
            <LinkIcon>Home</LinkIcon>
          </Link>  
        </ListLink>
        <ListLink>
          <Link to="/#projects">
            <LinkIcon>Projects</LinkIcon>
          </Link>
        </ListLink><ListLink>
          <Link to="/#contact">
            <LinkIcon>Contact</LinkIcon>
          </Link>  
        </ListLink><ListLink>
          <Link to="/resume/">
            <LinkIcon>Resume</LinkIcon>
          </Link>  
        </ListLink>
      </List>
      <Logos />
    </Container>
  )
}

export default Layout;