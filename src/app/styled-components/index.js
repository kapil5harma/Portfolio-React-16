import styled from 'styled-components';

export const Nav = styled.div.attrs({})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const Menu = styled.div.attrs({})`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Container = styled.div.attrs({})`
  box-sizing: border-box;
  /* padding: 4rem 1rem 4rem 1rem; */
  padding: 0.5rem;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.div.attrs({
  size: props => props.fontSize,
  weight: props => props.fontWeight,
  family: props => props.fontFamily,
  color: props => props.color
})`
  font-family: ${props => props.family};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`;

export const Content = styled.div.attrs({
  className: 'Content',
  size: props => props.fontSize || '1.125rem',
  weight: props => props.fontWeight || 'normal',
  family: props => props.fontFamily || 'Poppins',
  lineheight: props => props.lineheight || '2rem',
  color: props => props.color
})`
  font-family: ${props => props.family};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  line-height: ${props => props.lineheight};
  color: ${props => props.color};
  p:first-of-type {
    margin-top: 0;
  }
`;

export const Links = styled.div.attrs({})`
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  a {
    text-decoration: none;
    font-size: 4rem;
    padding: 0.5rem 0.75rem;
  }
`;
