import styled from "styled-components";
import { AppContainer } from "../styles/application";
import { memo, useState, useRef } from 'react';

const MessageForm = styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 3px;
   /* border: solid ${props => props.theme.fgAccent} 1px; */
   padding: 1rem;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 80%;
   max-width: 500px;
   margin: 0 auto;
`;

const EmailInput = styled.input<{background: [string, string]}>`
   border: none;
   font-size: 1rem;
   padding: 10px;
   color: ${props => props.theme.fg};
   background: ${p => p.theme.mode === "dark"? p.background[0] : p.background[1]};
   &::placeholder {
      font-family: 'Open Sans';
      color: ${props => props.theme.fg}; 
   }
`;

const MessageInput = styled(EmailInput)`
   
`;

const SendButton = styled.button`
   border: solid ${props => props.theme.fgAccent} 1px;
   font-size: 1rem;
   width: 20%;
   color: ${props => props.theme.fg};
   background: none;
`;

const Connect = () => {
   const [email, setEmail] = useState<string>('');   
   const messageRef = useRef<HTMLTextAreaElement>(null);

   const handleEmailInput = (email: string): void => {
      setEmail(email);
   }
   
   const handleSend = () => {
      console.log({
         email,
         message: messageRef.current.value
      })   
   } 

   return (
      <AppContainer background={["black", "#888"]}>
         <h1>Send me a message: </h1>
         <MessageForm>
            <Form>
               <EmailInput background={["#333", "#888"]} placeholder="Email 📧" type="email" name="email" onChange={e => handleEmailInput(e.target.value)}/>
               <span>Optional, but please enter incase you want me to revert back 🙂</span>
               <MessageInput as="textarea" background={["#333", "#888"]} placeholder="Write your thoughts 💭" ref={messageRef}></MessageInput>
               <SendButton onClick={handleSend}>Send</SendButton>
            </Form>
            <section>
               {/* Links to Social Media websites, linkedIn, Twitter, Github */}
            </section>
         </MessageForm>
      </AppContainer>
   );
}

export default memo(Connect);