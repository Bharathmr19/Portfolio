import styled from 'styled-components';

const Experience = () => {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      
      <ExperienceCard>
        <CompanyHeader>
          <CompanyName>TestAIng</CompanyName>
          <Duration>Sep 2024 – Dec 2024</Duration>
        </CompanyHeader>
        <JobTitle>Machine Learning Intern</JobTitle>
        <ResponsibilitiesList>
          <ListItem>
            Collaborated with a team to develop and implement a Large Language Model (LLM) and 
            Retrieval-Augmented Generation (RAG) project.
          </ListItem>
          <ListItem>
            Gained hands-on experience with advanced machine learning techniques and their 
            applications.
          </ListItem>
        </ResponsibilitiesList>
      </ExperienceCard>

      <ExperienceCard>
        <CompanyHeader>
          <CompanyName>Hackveda</CompanyName>
          <Duration>May 2024 – Sep 2024</Duration>
        </CompanyHeader>
        <JobTitle>Python Intern</JobTitle>
        <ResponsibilitiesList>
          <ListItem>
            Independently completed Python programming tasks and projects assigned by Hackveda.
          </ListItem>
          <ListItem>
            Collaborated virtually with the team to report progress and seek feedback.
          </ListItem>
          <ListItem>
            Continuously learned new technologies and frameworks to stay current with industry 
            trends and enhance project outcomes.
          </ListItem>
        </ResponsibilitiesList>
      </ExperienceCard>
    </Section>
  );
};

export default Experience;

const Section = styled.section`
  min-height: 100vh;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.primary};
`;

const ExperienceCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CompanyName = styled.h3`
  color: ${props => props.theme.primary};
  margin: 0;
`;

const Duration = styled.span`
  color: ${props => props.theme.secondary};
`;

const JobTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const ResponsibilitiesList = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: ${props => props.theme.text};
`;
