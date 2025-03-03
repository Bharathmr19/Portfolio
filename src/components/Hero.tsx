import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Greeting>Hello, I'm</Greeting>
          <Name>Bharath Gowda M R</Name>
          <Role>AI & Machine Learning Enthusiast</Role>
          <Description>Building innovative solutions with artificial intelligence</Description>
          <CTAButtons>
            <PrimaryButton href="#projects">View Projects</PrimaryButton>
            <SecondaryButton href="#contact">Contact Me</SecondaryButton>
          </CTAButtons>
        </motion.div>
      </HeroContent>
      <ScrollIndicator>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.gradient};
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Greeting = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.background};
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${props => props.theme.background};
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Role = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.background};
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.background};
  margin-bottom: 2rem;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }
`;

const PrimaryButton = styled(Button)`
  background: ${props => props.theme.background};
  color: ${props => props.theme.primary};
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.background};
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  font-size: 2rem;
  color: ${props => props.theme.background};
`;
