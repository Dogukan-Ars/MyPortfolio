import React from 'react'
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components'
import { lightTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BigTitle from '../subComponents/BigTitle'
import Mail from "../assets/Images/Mail-96.png"
import Location from "../assets/Images/Location-96.png"
import Phone from "../assets/Images/Phone-96.png"
import Arrow from "../assets/Images/Arrow-96.png"

const GlobalStyles = createGlobalStyle`
body {
   margin: 0;
   padding: 0;
   overflow: auto;
   background-color: ${props => props.theme.body};
   margin-top: 20%;
}
`

const Box = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 0 2rem;

@media (max-width: 768px) {
   padding: 0 1rem;
   margin-top: 1rem;
}
`

const Main = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
grid-template-rows: repeat(2, 1fr);
margin: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
padding: 3rem;
width: 100%;
line-height: 1.5;
font-family: 'Ubuntu Mono', monospace;

&:hover {
   color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
}

@media (max-width: 768px) {
   padding: 1rem;
   margin: .5rem;
   border: 1px solid ${props => props.theme.text};
   margin-top: 2rem;
}
`

const Group = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 1rem;
justify-content: center;

&>*:nth-child(n) {
   color: inherit;
   text-decoration: none;
   font-size: 2rem;
}
&>*:nth-child(1) {
   width: 70px;
}

@media (max-width: 768px) {
   padding: -1rem;
   margin: .5rem;

   &>*:nth-child(n) {
      font-size: 1rem;
   }
   &>*:nth-child(1) {
      width: 50px;
   }
}
`

const ContactPage = () => {
   return (
      <>
         <GlobalStyles />
         <ThemeProvider theme={lightTheme} >
            <Box>
               <LogoComponent theme='light' />
               <SocialIcons theme='light' />
               <PowerButton />
               <Main>
                  <Group>
                     <img src={Mail} alt="mail" /><a href="mailto:arss.dogukan@gmail.com" rel="noreferrer" >arss.dogukan@gmail.com</a>
                  </Group>
               </Main>

               <Main>
                  <Group>
                     <img src={Location} alt="location" /><span>Istanbul/TURKEY</span>
                  </Group>
               </Main>

               <Main>
                  <Group>
                     <img src={Phone} alt="phone-number" /><a href="tel:+905449450906" rel="noreferrer" >+905449450906</a>
                  </Group>
               </Main>

               <Main>
                  <Group>
                     <img src={Arrow} alt="arrow" /><a href="https://dogu-resume.netlify.app/" target="_blank" rel="noreferrer" >My Resume</a>
                  </Group>
               </Main>

               <BigTitle text="CONTACT" top='5%' left='25%' />
            </Box>
         </ThemeProvider>
      </>
   )
}

export default ContactPage