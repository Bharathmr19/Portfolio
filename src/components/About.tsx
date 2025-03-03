import styled from 'styled-components';
// Add this import at the top
import profileImage from '../assets/Bharath.jpg';

const About = () => {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <ContentWrapper>
        <ProfileSection>
          <ProfileImage src={profileImage} alt="Bharath Gowda M R" />
          <SocialLinks>
            <SocialLink href="https://github.com/Bharathmr19" target="_blank">GitHub</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/bharath-gowda-m-r-159559229" target="_blank">LinkedIn</SocialLink>
          </SocialLinks>
        </ProfileSection>
        <BioSection>
          <Greeting>Hi, I'm Bharath Gowda</Greeting>
          <Role>AI & Machine Learning Enthusiast</Role>
          <Description>
            A final-year Computer Science student passionate about Artificial Intelligence 
            and Machine Learning. I've had the opportunity to work on exciting projects 
            like developing Large Language Models and Retrieval-Augmented Generation 
            during my internship at TestAIng.
          </Description>
          <Description>
            I enjoy creating innovative solutions, like GrammarGuard for grammar checking 
            and Cold Mail Generator for personalized email crafting. With skills in Python, 
            ML, GenAI, Data analytics and NLP, I'm eager to collaborate on meaningful tech 
            projects that make a real-world impact.
          </Description>
          <HighlightsList>
            <HighlightItem>🎓 Final Year CS Student</HighlightItem>
            <HighlightItem>💡 AI/ML Enthusiast</HighlightItem>
            <HighlightItem>🚀 Project Developer</HighlightItem>
            <HighlightItem>📊 Data Analytics</HighlightItem>
          </HighlightsList>
        </BioSection>
      </ContentWrapper>
    </Section>
  );
};

export default About;

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 3px solid ${props => props.theme.primary};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary};
    color: white;
  }
`;

const BioSection = styled.div`
  flex: 2;
`;

const Greeting = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const Role = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const HighlightItem = styled.li`
  background: ${props => props.theme.background};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.text};
`;
