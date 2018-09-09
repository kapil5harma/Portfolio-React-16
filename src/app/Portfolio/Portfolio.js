import React from 'react';
import { Container, Title, Content, Main } from '../styled-components';

const Portfolio = () => {
  return (
    <Container className="container">
      <Main className="main" textAlign="justify">
        <Title className="portfolio" fontSize="2.5rem">
          Portfolio
        </Title>
        <Content className="content">
          Developer Connect - A social network for Developers
          <br /> Technologies used: JavaScript, React.js, Redux, MongoDB,
          Express.js, Node.js, Mongoose.js, Passport.js
          <br /> Description: A social network built using MERN stack while in
          the process of brushing up JavaScript skills while learning React,
          Redux.
        </Content>
      </Main>
    </Container>
  );
};

export default Portfolio;
