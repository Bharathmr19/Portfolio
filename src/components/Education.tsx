import styled from 'styled-components';

const Education = () => {
  return (
    <Section id="education">
      <Title>Education</Title>
      
      <TimelineContainer>
        <EducationCard>
          <Institution>AMC Engineering College, Bengaluru</Institution>
          <Degree>Bachelor of Engineering (CSE-AIML)</Degree>
          <Duration>Dec 2021 - 2025</Duration>
          <Score>CGPA: 8.3</Score>
        </EducationCard>

        <EducationCard>
          <Institution>Mahesh PU College, Bengaluru</Institution>
          <Degree>Pre-University (PUC)</Degree>
          <Duration>Completed Jul 2021</Duration>
          <Score>Percentage: 93%</Score>
        </EducationCard>

        <EducationCard>
          <Institution>Sarvodaya English High School, Kunigal</Institution>
          <Degree>SSLC</Degree>
          <Duration>Completed Apr 2019</Duration>
          <Score>Percentage: 92%</Score>
        </EducationCard>
      </TimelineContainer>
    </Section>
  );
};

export default Education;

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${props => props.theme.primary};
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

const EducationCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
  position: relative;
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    left: -60px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin-left: 50px;
    
    &::before {
      left: -40px;
    }
  }
`;

const Institution = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const Degree = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Duration = styled.p`
  color: ${props => props.theme.secondary};
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Score = styled.p`
  color: ${props => props.theme.text};
  font-weight: bold;
  font-size: 1rem;
`;
