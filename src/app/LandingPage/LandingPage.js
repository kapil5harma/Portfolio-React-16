import React from 'react';
import { Container, Title, Main } from '../styled-components';
import SocialLinks from '../SocialLinks/SocialLinks';

const LandingPage = props => {
  return (
    <Container className="container">
      <Main>
        <Title className="name" fontSize="2.5rem">
          Kapil Sharma
        </Title>
        <Title className="tag-line" fontSize="2.5rem">
          Frontend Developer | JavaScript Enthusiast
        </Title>
        <SocialLinks className="social-links" />
      </Main>
    </Container>
  );
};

export default LandingPage;
