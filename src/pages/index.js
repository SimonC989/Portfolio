import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Logos from "../components/Logos.js";
import GitHubLogo from '../../static/GitHub.png';
// import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 

const Main = styled.div`
  scroll-behavior: smooth;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  color: #70ffc3;
  margin: 5px;
  font-size: 80px;
`;

const Text = styled.div`
  color: skyblue;
  margin: 5px;
  font-size: 40px;
`;

const IntroBox = styled.section`
  // background-image: url("https://source.unsplash.com/WvM3RQSElRc/");
  background-image: url("https://source.unsplash.com/PIYtJ6Wj2Nk/");
  // background-image: url("https://source.unsplash.com/TlW_c7i2n58/");
  background-size: cover;
  background-position: right;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
  
const ProjectSection = styled.div`
  display: flex;
  // justify-content: space-evenly;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10%;
  margin-bottom: 10%;
`;

const ProjectContainer = styled(ProjectSection)`
  margin: 20px;
`;

const ProjectTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const ProjectAWS = styled.div`
//   font-size: 20px;
//   color: #0053a6; 
// `;

const ProjectTitle = styled.div`
  font-size: 60px;
  color: #0053a6;
  border-bottom: solid #0053a6;
`;

const Project = styled.div`
  background-size: cover;
  height: 35vh;
  width: 28vw;
  margin: 20px;
`;

const Project1 = styled(Project)`
  background-image: url('Description.png');
`;

const Project2 = styled(Project)`
  background-image: url('Nav.png');
`;

const Project3 = styled(Project)`
  background-image: url('Abodely.png');
`;

const Project4 = styled(Project)`
  background-image: url('BoardNite.png');
`;

const Project5 = styled(Project)`
  background-image: url('Portfolio.png');
`;

const ProjTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  padding: 10px;
  height: 35vh;
  width: 28vw;

  box-shadow: 0 5px 15px rgba(0,0,0,0);
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.9);
    transition: all 0.3s ease-in-out;
  }
`;

const ProjTitle1 = styled(ProjTitle)`
  background-color: #ff9778;
`;

const ProjTitle2 = styled(ProjTitle)`
  background-color: #b554ff;
`;

const ProjTitle3 = styled(ProjTitle)`
  background-color: #f78902;
`;

const ProjTitle4 = styled(ProjTitle)`
  background-color: #70bf60;
`;

const ProjTitle5 = styled(ProjTitle)`
  background-color: #ffdd19;
`;


const ProjText = styled.div`
  font-size: 20px;
`;

const LogoSize = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const LogoLink = styled.a`
  background-image: none;
`;

const ContactContainer = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Talk = styled.div`
  color: #0053a6;
  font-size: 30px;
  margin: 10px;
`;

const Email = styled.a`
  color: teal;
  font-size: 25px;
  margin: 10px;
`;


const EmailText = styled.div`
color: #0053a6;
display: flex;
align-items: center;
width: 60%;
margin: 10px;
`;

const TopButton = styled.div`
  // transition: all .25s ease-in-out;
  // font-size: 100px;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  color: black;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  background-image: url('UpArrow.png');
  background-size: cover;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      project1: false,
      project2: false,
      project3: false,
      project4: false,
      project5: false,
      ScrollButton: false,
    }
  }
  
  BlastOff () {
    document.querySelector('#home').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  render () {
    const state = this.state;

    return (
      <Main>
        <Layout>
        </Layout>
        <IntroBox>
          <NameContainer>
            <Name>Simon Chan</Name>
            <Text>Software Engineer</Text>
          </NameContainer>
        </IntroBox>
        <ProjectSection id="projects">
          <ProjectTitleBox>
            <ProjectTitle>Projects</ProjectTitle>
            {/* <ProjectAWS>All projects were deployed and tested on AWS</ProjectAWS> */}
          </ProjectTitleBox>
          <ProjectContainer>
            <Project1 onMouseEnter={() => this.setState({ project1: true })} onMouseLeave={() => this.setState({ project1: false })}>
              {state.project1 ? 
                <ProjTitle1>
                  Lodge.io - Home Description
                  <ProjText>Microservice for a lodging application</ProjText>
                  <ProjText>made with React.</ProjText>
                  <LogoLink href="https://github.com/lodge-io/description-module">
                    <LogoSize src={GitHubLogo} alt="GitHub Logo" />
                  </LogoLink>
                </ProjTitle1>
              : null}
            </Project1>
            <Project2 onMouseEnter={() => this.setState({ project2: true })} onMouseLeave={() => this.setState({ project2: false })}>
              {state.project2 ? 
                <ProjTitle2>
                  Lodge.io - Navigation Bar
                  <ProjText>Microservice for a lodging application</ProjText>
                  <ProjText>made with React.</ProjText>
                  <ProjText></ProjText>
                  <LogoLink href="https://github.com/lodge-io/nav-module">
                    <LogoSize src={GitHubLogo} alt="GitHub Logo" />
                  </LogoLink>
                </ProjTitle2>
              : null}
            </Project2>
            <Project3 onMouseEnter={() => this.setState({ project3: true })} onMouseLeave={() => this.setState({ project3: false })}>
              {state.project3 ? 
                <ProjTitle3>
                  Abodely
                  <ProjText>Scaled a service to meet production-level</ProjText>
                  <ProjText>traffic with PostgreSQL</ProjText>
                  <LogoLink href="https://github.com/abodely/similar-homes-module">
                    <LogoSize src={GitHubLogo} alt="GitHub Logo" />
                  </LogoLink>
                </ProjTitle3>
              : null}
              </Project3>
            <Project4 onMouseEnter={() => this.setState({ project4: true })} onMouseLeave={() => this.setState({ project4: false })}>
              {state.project4 ? 
                <ProjTitle4>
                  BoardNite!
                  <ProjText>Scoreboard for all the boardgames that</ProjText>
                  <ProjText>my friends and I enjoy!</ProjText>
                  <LogoLink href="https://github.com/SimonC989/MVP">
                    <LogoSize src={GitHubLogo} alt="GitHub Logo" />
                  </LogoLink>
                </ProjTitle4>
              : null}
            </Project4>
            <Project5 onMouseEnter={() => this.setState({ project5: true })} onMouseLeave={() => this.setState({ project5: false })}>
              {state.project5 ? 
                <ProjTitle5>
                  Portfolio
                  <ProjText>This website! Made using React and</ProjText>
                  <ProjText>Gatsby. Deployed with Surge.</ProjText>
                  <LogoLink href="https://github.com/SimonC989">
                    <LogoSize src={GitHubLogo} alt="GitHub Logo" />
                  </LogoLink>
                </ProjTitle5>
              : null}
            </Project5>
          </ProjectContainer>
        </ProjectSection>
        <ContactContainer id="contact">
            <Talk>I'd love to talk! Email me at the address below and let me know your favorite board game!</Talk>
            <Email href="mailto:simonchan989@gmail.com">
              simonchan989@gmail.com        
            </Email> 
            <EmailText>
              Or learn more about me at
              <Logos />
            </EmailText>
        </ContactContainer>
        <TopButton id="ToTop" onClick={() => this.BlastOff()} />
      </Main>
    )
  }
}

export default Home;