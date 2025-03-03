import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <ContactContainer>
        <ContactInfo>
          <ContactCard>
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <ContactText>
              <Label>Phone</Label>
              <Link href="tel:+917899657698">+91 7899657698</Link>
            </ContactText>
          </ContactCard>

          <ContactCard>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <ContactText>
              <Label>Email</Label>
              <Link href="mailto:bharathgowdrumr@gmail.com">
                bharathgowdrumr@gmail.com
              </Link>
            </ContactText>
          </ContactCard>

          <ContactCard>
            <IconWrapper>
              <FaGithub />
            </IconWrapper>
            <ContactText>
              <Label>GitHub</Label>
              <Link href="https://github.com/Bharathmr19" target="_blank">
                github.com/Bharathmr19
              </Link>
            </ContactText>
          </ContactCard>

          <ContactCard>
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
            <ContactText>
              <Label>LinkedIn</Label>
              <Link href="https://www.linkedin.com/in/bharath-gowda-m-r-159559229" target="_blank">
                Bharath Gowda M R
              </Link>
            </ContactText>
          </ContactCard>
        </ContactInfo>
      </ContactContainer>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.primary};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: ${props => props.theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.primary}10;
  border-radius: 50%;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 0.25rem;
`;

const Link = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;
