import React from 'react';
import { Container, Title } from '../styled-components';
import SocialLinks from '../SocialLinks/SocialLinks';

const LandingPage = props => {
  return (
    <Container className="container">
      <main>
        <Title className="name" fontSize="2.5rem">
          Kapil Sharma
        </Title>
        <Title className="tag-line" fontSize="2.5rem">
          Frontend Developer | JavaScript Enthusiast
        </Title>
        <SocialLinks className="social-links" />
      </main>
    </Container>
  );
};

export default LandingPage;
