import React, { useEffect, useRef } from 'react'
import { ThemeProvider, styled } from 'styled-components'
import { motion } from 'framer-motion'
import { darkTheme } from './Themes'
import { Project } from '../data/ProjectData'
import { YinYang } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import Card from '../subComponents/Card'
import BigTitle from '../subComponents/BigTitle'
import BackgroundImage from "../assets/Images/TrustMe.png"
import NavigationMenuIcons from '../subComponents/NavigationMenuIcons'


const Box = styled.div`
background-color: ${props => props.theme.body};
background-image: url(${BackgroundImage});
background-repeat: repeat;
background-size: 2000px;
height: 500vh;
position: relative;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 640px) {
   background-image: url(...);
}
`

const Main = styled(motion.ul)`
position: fixed;
top: 11rem;
left: calc(10rem + 15vw);
height: 45vh;
display: flex;
justify-content: center;
align-items: center;
color: white;
z-index: 1;

@media (max-width: 640px) {
   top: 9rem;
}
`

const Rotate = styled.span`
position: fixed;
right: 1rem;
bottom: 1.5rem;
width: 45px;
height: 45px;
z-index: 1;

@media (max-width: 640px) {
   bottom: 1rem;
   width: 30px;
   height: 30px;
   
   &>*:first-child {
      width: 100%;
   }
}

@media (min-width: 1024px) {
   width: 60px;
   height: 60px;

   &>*:first-child {
      width: 100%;
   }
}
`

// Framer-motion Configuration
const container = {

   hidden: { opacity: 0 },
   show: {
      opacity: 1,

      transition: {
         staggerChildren: 0.5,
         duration: 0.5,
      }
   }
}

const ProjectPage = () => {
   const ref = useRef(null);
   const yinyang = useRef(null);

   useEffect(() => {
      let element = ref.current;

      const rotate = () => {
         element.style.transform = `translateX(${-window.scrollY}px)`
         yinyang.current.style.transform = `rotate(${-window.scrollY}deg)`
      }

      window.addEventListener('scroll', rotate)

      return () => window.removeEventListener('scroll', rotate)

   }, [])


   return (
      <ThemeProvider theme={darkTheme} >
         <LogoComponent theme='dark' />
         <NavigationMenuIcons theme='dark' />
         <SocialIcons theme='dark' />
         <PowerButton />
         <Box>

            <Main ref={ref} variants={container} initial='hidden' animate='show' >
               {
                  Project.map(d =>
                     <Card key={d.id} data={d} />
                  )
               }
            </Main>

            <Rotate ref={yinyang}>
               <YinYang fill={darkTheme.text} />
            </Rotate>

            <BigTitle text="PROJECT" top='5%' right='20%' />
         </Box>
      </ThemeProvider>

   )
}

export default ProjectPage