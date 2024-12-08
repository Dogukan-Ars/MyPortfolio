import React from 'react'
import { ThemeProvider, keyframes, styled } from 'styled-components'
import { darkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import king from "../assets/Images/King.png"
import BigTitle from '../subComponents/BigTitle'
import NavigationMenuIcons from '../subComponents/NavigationMenuIcons'

const Box = styled.div`
background-color: ${props => props.theme.body};
background-size: cover;
width: 100vw;
min-height: 110vh;
overflow: hidden;
z-index: -1;

@media (max-width: 640px) {
   min-height: 110vh;
}
@media (min-width: 1024px) {
   min-height: 110vh;
}
`

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px)}
`

const King = styled.div`
position: absolute;
width: 6vw;
bottom: 10%;
right: 10%;
animation: ${float} 4s ease infinite;
z-index: 1;

img {
   max-width: 100%;
   transform: rotate(20deg);
}

@media (max-width: 640px) {
   width: 8vw;
}

@media (min-width: 1024px) {
   width: 7vw;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 1.5rem;
width: 60%;
min-height: 50vh;
z-index: 1;
line-height: 1.5;
overflow: hidden;

display: grid;
grid-template-columns: repeat(1, 1fr);
place-items: center;
gap: 2rem;
font-size: calc(0.8rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(2rem + 5vw);
top: 9rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;

@media (max-width: 640px) {
   font-size: calc(.6rem + .8vw);
   border: 1px solid ${props => props.theme.text};
   width: 65%;
   min-height: 50vh;
   padding: 1rem;
   top: 5.5rem;
   left: calc(2.8rem + 2vw);
}

@media (min-width: 1024px) {
   font-size: calc(0.5rem + .9vw);
   border: 1px solid ${props => props.theme.text};
   width: 60%;
   min-height: 50vh;
   padding: 1rem;
   top: 9rem;
   left: calc(2.6rem + 3vw);
}
`

const AboutPage = () => {
   return (
      <ThemeProvider theme={darkTheme} >

         <LogoComponent theme='dark' />
         <NavigationMenuIcons theme='dark' />
         <SocialIcons theme='dark' />
         <PowerButton />
         <Box>

            <King>
               <img src={king} alt='King' />
            </King>

            <Main>
               <div>
                  Hi, I'm Dogukan. I'm 28 and a self-taught front-end developer.
                  <br /> <br />
                  I graduated from Metallurgical & Materials Engineering.
                  <br /> <br />
                  I've always been into games when I was a child, and I wanted to build my own game someday. So I decided to become a software developer at that moment.
                  <br /> <br />
                  Therefore, my new journey started... I have been working on it with passion, curiosity, and a strong will.
                  <br /> <br />
                  I start my journey with frontend development, but I also enjoy creating games and exploring new opportunities while building great projects.
                  <br /> <br />
                  I like to play chess. Also playing piano and guitar makes me feel good.
               </div>
            </Main>

            <BigTitle text="ABOUT" top='5%' left='5%' />

         </Box>

      </ThemeProvider>
   )
}

export default AboutPage
