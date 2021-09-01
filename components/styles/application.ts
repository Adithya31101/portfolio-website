import styled from 'styled-components';
import { AppState } from '../types';

interface AppWindowStyleProps {
  left: string,
  appstate: number,
  width ?: string,
  height ?: string,
  zIndex: number,
  active: boolean
}

export const WindowContainer = styled.div<AppWindowStyleProps>`
   opacity: ${props => props.active? '1' : '0.75'};
   height: ${props => props.appstate === AppState.maximised? '100vh' : props.height };
   width: ${props => props.appstate === AppState.maximised? '100vw' : props.width };
   background-color: ${props => props.theme.bgAccent};
   position: absolute;
   top: ${props => props.appstate === AppState.maximised? '0!important' : '20rem'};
   left: ${props => props.appstate === AppState.maximised? '0!important' : props.left};
   border-radius: 5px;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
   z-index: ${props => props.active? '15' : props.zIndex};
   display: ${props => props.appstate === AppState.minimised? 'none' : 'block'};
   resize: both;
   border: solid 1px #121212;
   color: ${props => props.theme.fg};
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
      color: ${props => props.theme.fg};
   }
`;


export const Button = styled.div<{color: string}>`
   width: 1.1rem;
   height: 1.1rem;
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

      &:hover {
         opacity: 1;
      }
   }
`;

export const AppContainer = styled.div<{background: [string, string]}>`
   padding: 2rem;
   background: ${p => (p.theme.mode === 'dark') && (p.background)? p.background[0] : p.background[1]}
`;