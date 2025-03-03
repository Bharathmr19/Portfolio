import styled from 'styled-components';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Chillcuppa</ProjectTitle>
          <ProjectDescription>
            <ProjectList>
              <ListItem>
                Developed under the IBM Winter Certification Program using Prompt Engineering.
              </ListItem>
              <ListItem>
                Designed the product idea, prototype, and website, and created an investor pitch using 
                AI-generated prompts.
              </ListItem>
              <ListItem>
                Applied Generative AI techniques for content creation, business planning, and design 
                structuring.
              </ListItem>
            </ProjectList>
          </ProjectDescription>
          <TechTags>
            <Tag>Prompt Engineering</Tag>
            <Tag>Generative AI</Tag>
            <Tag>Business Planning</Tag>
          </TechTags>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Infin AI Hub</ProjectTitle>
          <ProjectDescription>
            <ProjectList>
              <ListItem>
                Built an AI-powered tool integrating Email Generation, Hand Gesture Recognition, and 
                RAG-based Document Retrieval.
              </ListItem>
              <ListItem>
                Developed NLP-based email drafting, real-time gesture recognition using Mediapipe, and 
                FAISS-powered document search.
              </ListItem>
              <ListItem>
                Improved document retrieval speed by 40% using optimized AI models.
              </ListItem>
            </ProjectList>
          </ProjectDescription>
          <TechTags>
            <Tag>NLP</Tag>
            <Tag>Mediapipe</Tag>
            <Tag>FAISS</Tag>
            <Tag>AI</Tag>
          </TechTags>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Shopping Mall Management System</ProjectTitle>
          <ProjectDescription>
            <ProjectList>
              <ListItem>
                Designed the Admin Module using Java Spring Boot and PostgreSQL.
              </ListItem>
              <ListItem>
                Implemented CRUD operations for shop management and user data handling via REST 
                APIs.
              </ListItem>
              <ListItem>
                Enhanced database efficiency by 30% with optimized queries.
              </ListItem>
            </ProjectList>
          </ProjectDescription>
          <TechTags>
            <Tag>Spring Boot</Tag>
            <Tag>PostgreSQL</Tag>
            <Tag>REST API</Tag>
            <Tag>Java</Tag>
          </TechTags>
        </ProjectCard>
      </ProjectsGrid>
    </Section>
  );
};

export default Projects;

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.background};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.div`
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
`;

const ProjectList = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: ${props => props.theme.text};
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: ${props => props.theme.primary}20;
  color: ${props => props.theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
`;
