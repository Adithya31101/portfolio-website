import { memo } from "react";
import styled from "styled-components";

const DockContainer = styled.div`
   position: absolute;
   z-index: 2;
   background-color: ${props => props.theme.fg};
   opacity: 0.4;
   height: 5rem;
   bottom: 0.4rem;
   width: 50%;
   transform: translateX(50%);
   border-radius: 5px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   @media screen and (max-width: 480px){
     width: 90%;
     transform: translateX(6%);
     height: 4rem;
   }
`;

const Statusbar = memo(() => {
  return <DockContainer>
    
  </DockContainer>
});

export default Statusbar;