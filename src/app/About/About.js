import React from 'react';
import { Container, Title, Content, Main } from '../styled-components';

const About = () => {
  return (
    <Container className="container">
      <Main className="main" textAlign="justify">
        <Title className="about" fontSize="2.5rem">
          About
        </Title>
        <Content className="content">
          Software Engineer with a Masters degree from Delhi University,
          currently living in New Delhi, working as a Software Engineer at
          Beebom. Before this I worked with Appster for 14 months. I enjoy
          building hybrid mobile apps, web apps using JavaScript and
          continuously learning alongside.
        </Content>
      </Main>
    </Container>
  );
};

export default About;
