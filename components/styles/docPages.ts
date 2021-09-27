import styled from "styled-components";

interface IconButtonProps {
  iconSrc: string,
  bgColor: string,
  textColor: string,
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled.button<IconButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 1.2rem; 
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  > span.icon {    
    margin-right: 0.4rem;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: url(${props => props.iconSrc});
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem auto;
`;

export const PDFEmbed = styled.embed`
  width: 100%;
  height: 80vh;
  margin-top: 2rem; 
`;