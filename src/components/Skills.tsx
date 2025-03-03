import styled from 'styled-components';

const Skills = () => {
  return (
    <Section id="skills">
      <Title>Skills & Training</Title>
      
      <Container>
        <TrainingSection>
          <SubTitle>Professional Training</SubTitle>
          <Card>
            <CardTitle>Java Development Training at TNSIF</CardTitle>
            <List>
              <ListItem>Spring Boot</ListItem>
              <ListItem>PostgreSQL</ListItem>
              <ListItem>REST APIs</ListItem>
            </List>
          </Card>
        </TrainingSection>

        <SkillsSection>
          <SubTitle>Technical Skills</SubTitle>
          <SkillsGrid>
            <SkillCategory>
              <CategoryTitle>Programming Languages</CategoryTitle>
              <SkillTags>
                <SkillTag>Python</SkillTag>
                <SkillTag>Java</SkillTag>
              </SkillTags>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Frameworks & Libraries</CategoryTitle>
              <SkillTags>
                <SkillTag>Spring Boot</SkillTag>
                <SkillTag>LangChain</SkillTag>
                <SkillTag>OpenCV</SkillTag>
              </SkillTags>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Databases</CategoryTitle>
              <SkillTags>
                <SkillTag>PostgreSQL</SkillTag>
                <SkillTag>MySQL</SkillTag>
              </SkillTags>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Developer Tools</CategoryTitle>
              <SkillTags>
                <SkillTag>VS Code</SkillTag>
                <SkillTag>Eclipse</SkillTag>
                <SkillTag>Jupyter</SkillTag>
              </SkillTags>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>AI & ML</CategoryTitle>
              <SkillTags>
                <SkillTag>Prompt Engineering</SkillTag>
                <SkillTag>RAG</SkillTag>
              </SkillTags>
            </SkillCategory>
          </SkillsGrid>
        </SkillsSection>

        <ExperienceSection>
          <SubTitle>Additional Experience</SubTitle>
          <Card>
            <CardTitle>Let'sUpgrade - Student Ambassador</CardTitle>
            <List>
              <ListItem>Promoted Let'sUpgrade courses and events to increase participation and engagement.</ListItem>
              <ListItem>Organized outreach efforts, resulting in a higher attendance rate for tech webinars and workshops.</ListItem>
            </List>
          </Card>
        </ExperienceSection>
      </Container>
    </Section>
  );
};

export default Skills;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const Card = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const List = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: ${props => props.theme.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background: ${props => props.theme.background};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h4`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: ${props => props.theme.primary}20;
  color: ${props => props.theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const TrainingSection = styled.div``;
const SkillsSection = styled.div``;
const ExperienceSection = styled.div``;
