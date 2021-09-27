import styled from 'styled-components';

export const Workspace = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(18, 1fr);
  height: calc(100vh - 2.3rem);
  padding: 2rem;
  gap: 0.8rem;
  background: ${props => props.theme.bgAccent};
  background-size: cover;
  grid-auto-flow: column;
  overflow-y: hidden;
  @media only screen and (max-width: 768px){
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    padding: 1.5rem;
    gap: 0.5rem;
  }
  @media only screen and (max-width: 350px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-height: 800px) {
    grid-template-rows: repeat(4, 1fr);
  }
`;

