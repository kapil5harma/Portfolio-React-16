import styled from 'styled-components';

export const Nav = styled.div.attrs({})`
  display: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(30, 30, 30, 0.4);
  color: #eee;
`;

export const Menu = styled.div.attrs({})`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Links = styled.div.attrs({})`
  padding: 0.5rem;
`;
