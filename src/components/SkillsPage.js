import React from 'react'
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import { Icon } from "../data/IconData"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BigTitle from '../subComponents/BigTitle'
import IconComponent from '../subComponents/Icons'

const GlobalStyles = createGlobalStyle`
body {
   margin: 0;
   padding: 0;
   overflow: hidden;
}
`

const IconBox = styled(motion.div)`
&>*:nth-child(1) {
   position: absolute;
   top: 3%;
   left: 5%;
   opacity: 0.4;
   z-index: 1;
}
&>*:nth-child(1):hover {
   opacity: 1;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(2) {
   position: absolute;
   top: 3%;
   left: 85%;
   opacity: 0.4;
   z-index: 1;
}
&>*:nth-child(2):hover {
   opacity: 1;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(3) {
   position: absolute;
   top: 3%;
   left: 60%;
   opacity: 0.4;
   z-index: 1;
}
&>*:nth-child(3):hover {
   opacity: 1;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(4) {
   position: absolute;
   top: 85%;
   left: 60%;
   opacity: 0.4;
   z-index: 1;
}
&>*:nth-child(4):hover {
   opacity: 1;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(5) {
   position: absolute;
   top: 85%;
   left: 30%;
   opacity: 0.4;
   transform: rotate(10deg);
   z-index: 1;
}
&>*:nth-child(5):hover {
   opacity: 0.8;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(6) {
   position: absolute;
   top: 30%;
   left: 5%;
   transform: rotate(30deg);
   opacity: 0.4;
   z-index: 1;
}
&>*:nth-child(6):hover {
   opacity: 1;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(7) {
   position: absolute;
   top: 60%;
   left: 5%;
   transform: rotate(30deg);
   opacity: 0.4;
   z-index: 1;
}
&>*:nth-child(7):hover {
   opacity: 0.8;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(8) {
   position: absolute;
   top: -20%;
   left: -15%;
   opacity: 0.1;
   width: 1200px;
   height: 1200px;
   z-index: 0;
}
&>*:nth-child(8):hover {
   opacity: 0.3;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(9) {
   position: absolute;
   top: 85%;
   left: 5%;
   opacity: 0.4;
}
&>*:nth-child(9):hover {
   opacity: 1;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(10) {
   position: absolute;
   top: 3%;
   left: 30%;
   opacity: 0.4;
}
&>*:nth-child(10):hover {
   opacity: 0.8;
   transition: opacity 0.4s ease-in-out;
}

&>*:nth-child(11) {
   position: absolute;
   top: 85%;
   left: 85%;
   opacity: 0.4;
}
&>*:nth-child(11):hover {
   opacity: 1;
   transition: opacity 0.4s ease-in-out;
}

`

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100%;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover {
   color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
   &>*{
      fill: ${props => props.theme.body};
   }
}

&>*:first-child {
   margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

strong {
   margin-bottom: 1rem;
   text-transform: uppercase;
}
ul, p {
   margin-left: 2rem;
}

${Main}:hover &{
   color: ${props => props.theme.body};
}
`

const SkillsPage = () => {
   return (
      <>
         <GlobalStyles />
         <ThemeProvider theme={lightTheme} >
            <Box>

               <LogoComponent theme='light' />
               <SocialIcons theme='light' />
               <PowerButton />
               <motion.div
                  initial={{
                     opacity: 0,
                  }}
                  animate={{
                     opacity: 1,
                  }}
                  transition={{
                     type: 'spring', duration: 4, delay: 1
                  }}

               >
                  <IconBox>
                     {
                        Icon.map((data) => (
                           <IconComponent key={data.id} src={data.imgSrc} size={150} />
                        ))}
                  </IconBox>
               </motion.div>

               <Main>
                  <Title>
                     <Develope width={40} height={40} /> Frontend Developer
                  </Title>
                  <Description>
                     I enjoy learning various new methods to create products from my perspective in this area. Therefore I have limitless enthusiasm and ambition to do it.
                  </Description>
                  <Description>
                     <strong>Skills</strong>
                     <p>
                        HTML, CSS, JavaScript, TypeScript, React, Redux, SASS, Bootstrap, jQuery, Java
                     </p>
                  </Description>
                  <Description>
                     <strong>Tools</strong>
                     <p>GIT, VS Code</p>
                  </Description>
               </Main>

               <Main>
                  <Title>
                     <Design width={40} height={40} /> Designer
                  </Title>
                  <Description>
                     I love to create design which speaks, Keep it clean, minimal and simple.
                  </Description>
                  <Description>
                     <strong>I like to Design</strong>
                     <ul>
                        <li>Web Design</li>
                        <li>App Design</li>
                     </ul>
                  </Description>
                  <Description>
                     <strong>Tools</strong>
                     <ul>
                        <li>Figma</li>
                     </ul>
                  </Description>
               </Main>


               <BigTitle text="SKILLS" top='80%' right='35%' />
            </Box>
         </ThemeProvider>
      </>
   )
}

export default SkillsPage