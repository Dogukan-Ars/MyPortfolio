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
padding: 0 15rem 0 15rem;
`

const Main = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
grid-template-rows: repeat(2, 1fr);
margin: 1rem;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
padding: 5rem;
width: 25rem;
line-height: 1.5;
font-family: 'Ubuntu Mono', monospace;

&:hover {
   color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
}
`

const Group = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
gap: 2rem;
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
                     <img src={Mail} alt="mail" width={70} /><a href="mailto:arss.dogukan@gmail.com" rel="noreferrer" style={{ fontSize: "2rem", textDecoration: "none", color: "inherit" }}>arss.dogukan@gmail.com</a>
                  </Group>
               </Main>

               <Main>
                  <Group>
                     <img src={Location} alt="location" width={70} /><span style={{ fontSize: "2rem" }}>Istanbul/TURKEY</span>
                  </Group>
               </Main>

               <Main>
                  <Group>
                     <img src={Phone} alt="phone-number" width={70} /><a href="tel:+905449450906" rel="noreferrer" style={{ fontSize: "2rem", textDecoration: "none", color: "inherit" }}>+905449450906</a>
                  </Group>
               </Main>

               <Main>
                  <Group>
                     <img src={Arrow} alt="arrow" width={70} /><a href="https://dogu-resume.netlify.app/" target="_blank" rel="noreferrer" style={{ fontSize: "2rem", textDecoration: "none", color: "inherit" }}>My Resume</a>
                  </Group>
               </Main>

               <BigTitle text="CONTACT" top='5%' left='25%' />
            </Box>
         </ThemeProvider>
      </>
   )
}

export default ContactPage