import React from 'react'
import { ThemeProvider, keyframes, styled } from 'styled-components'
import { darkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import king from "../assets/Images/King.png"
import piano from "../assets/Images/Piano.jpg"
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
z-index: -1;
`

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px)}
`

const King = styled.div`
position: absolute;
top: 8%;
right: 15%;
width: 7vw;
animation: ${float} 4s ease infinite;
z-index: 2;

img {
   width: 100%;
   height: auto;
   transform: rotate(-20deg);
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50%;
min-height: 60vh;
z-index: 2;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(10rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
`

const Piano = styled.div`
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
position: absolute;
top: 5%;
left: 5%;
z-index: -1;
filter: blur(3px);
`

const AboutPage = () => {
   return (
      <ThemeProvider theme={darkTheme} >

            <LogoComponent theme='dark' />
            <SocialIcons theme='dark' />
            <PowerButton />
         <Box>

            <King>
               <img src={king} alt='King' />
            </King>

            <Main>
               Hi, I'm Dogukan. I'm 27 and self-taught Frontend Developer.
               <br /> <br />
               I graduated from Metallurgical & Materials Engineering. Unless I don't want to follow that path and quit from my job.
               <br /> <br />
               Becoming a programmer has always been my dream job. Therefore, my new journey started... I have been working on it with passion, curiosity and a strong will.
               <br /> <br />
               I'm interested in the whole frontend stack like trying new things and building great projects.
               <br /> <br />
               I like to play piano and guitar. Playing chess is also makes me feel good and calm.
            </Main>

            <BigTitle text="ABOUT" top='5%' left='5%' />

            <Piano>
               <img src={piano} alt="Piano" />
            </Piano>
         </Box>
      </ThemeProvider>

   )
}

export default AboutPage