import styled from 'styled-components';

interface AppWindowStyleProps {
  left: string,
  appstate: number
}

export const WindowContainer = styled.div<AppWindowStyleProps>`
   height: 50rem;
   width: 50rem;
   background-color: #fff;
   position: absolute;
   top: 20rem;
   left: ${props => props.left};
   border-radius: 5px;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const TitleBar = styled.div`
   border-radius: inherit;
   width: 100%;
   background-color: ${props => props.theme.bg};
   box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
   padding: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   
   > div {
      display: flex;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1rem;
   }
   > span {
      user-select: none;
   }
`;


export const Button = styled.div<{color: string}>`
   width: 1.2rem;
   height: 1.2rem;
   display: grid;
   margin-left: 0.8rem;
   background-color: ${p => p.color};
   border-radius: 50%;
   place-items: center;
   cursor: pointer;
   > img {
      opacity: 0;
      width: 80%;
      height: 80%;
      transition: opacity 100ms ease-in-out;

      :hover {
         opacity: 1;
      }
   }
`;

