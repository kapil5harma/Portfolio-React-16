import React from 'react';
import { Links } from '../styled-components';

const SocialLinks = props => {
  return (
    <Links className="links">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kapil5harma/"
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/kapil5harma"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/story/kapil5harma"
      >
        <i className="fab fa-stack-overflow" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/kapilsharma1994/"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@kapilsharmajmps"
      >
        <i className="fab fa-medium" />
      </a>
    </Links>
  );
};

export default SocialLinks;
