import React from 'react'
import { Github, Instagram, Linkedin } from '../components/AllSvgs'
import { styled } from 'styled-components'
import { darkTheme } from "../components/Themes"
import { motion } from 'framer-motion'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 0 -.4rem;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child) {
   margin: 0.3rem 0;
}
&>*>a>:nth-child(n):hover {
  transform: scale(1.3);
}

a>*:last-child {
   width: 2rem;
   height: 2rem;
}

@media (max-width: 640px) {
   margin: 0 -.4rem;

   &>*:not(:last-child) {
      margin: 0.1rem 0;
   }

   a>*:last-child {
      width: 1.3rem;
      height: 1.3rem;
   }
}

@media (min-width: 1024px) {
   margin: 0 .5rem;

   &>*:not(:last-child) {
      margin: 0.5rem 0;
   }

   a>*:last-child {
      width: 2.3rem;
      height: 2.3rem;
   }
}
`

const Line = styled(motion.span)`
width: 2px;
max-height: 2.6rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

@media (max-width: 640px) {
   max-height: 2.2rem;
}

@media (min-width: 1024px) {
   max-height: 4rem;
}
`

const SocialIcons = (props) => {
   return (
      <Icons>
         <motion.div
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.2 }}
         >
            <a style={{ color: "inherit" }} target="_blank" href= "https://github.com/Drynwhyll" rel="noreferrer" >
               <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </a>
         </motion.div>

         <motion.div
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.4 }}
         >
            <a style={{ color: "inherit" }} target="_blank" href= "https://linkedin.com/in/dogukan-ars/" rel="noreferrer" >
               <Linkedin width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </a>
         </motion.div>

         <motion.div
            animate={{ scale: [0, 1, 1.5, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.6 }}
         >
            <a style={{ color: "inherit" }} target="_blank" href= "https://www.instagram.com/thee_damned/" rel="noreferrer" >
               <Instagram width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </a>
         </motion.div>

         <Line color={props.theme}

            initial={{
               height: 0,
            }}
            animate={{
               height: '8rem',
            }}
            transition={{
               type: 'spring', duration: 1, delay: 0.8
            }}
         />
      </Icons>
   )
}

export default SocialIcons