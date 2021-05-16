import styled from 'styled-components';

export const Workspace = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(18, 1fr);
  height: 87vh;
  padding: 2rem;
  gap: 0.8rem;
  resize: both;
  background: ${props => props.theme.bgAccent};
  background-size: cover;
  grid-auto-flow: column;
  overflow: hidden;
  @media only screen and (max-width: 480px){
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-height: 800px) {
    grid-template-rows: repeat(4, 1fr);
  }
`;

