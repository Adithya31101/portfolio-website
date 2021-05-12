import styled from "styled-components";

const StatusBarContainer = styled.div`
  height: 4vh;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export default function Statusbar() {
  return <StatusBarContainer>
    <span>Hello</span>
  </StatusBarContainer>
}