import styled from "styled-components";
import { memo } from 'react';

const StatusBarContainer = styled.div`
  height: 4vh;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Statusbar = memo(() => {
  return <StatusBarContainer>
    <span>Hello</span>
  </StatusBarContainer>
})

export default Statusbar;