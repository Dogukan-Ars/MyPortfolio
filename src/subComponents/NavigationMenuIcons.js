import { Certificate, Contact, Projects, Skills, User } from '../components/AllSvgs'
import { styled } from 'styled-components'
import { darkTheme } from "../components/Themes"
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Icons = styled.div`
display: grid;
grid-template-columns: 3rem 3rem 3rem 3rem 3rem auto;
justify-content: end;
align-items: center;
color: inherit;
z-index: 3;
position: fixed;
right: 4rem;
top: 1rem;

@media (max-width: 640px) {
   grid-template-columns: 2rem 2rem 2rem 2rem 2rem auto;
   top: 1rem;
   right: 3rem;
}

@media (min-width: 1024px) {
   grid-template-columns: 3.7rem 3.7rem 3.7rem 3.7rem 3.7rem auto;
   right: 6rem;
}
`

const Line = styled(motion.span)`
width: 2px;
transform: rotate(90deg);
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
position: fixed;
right: 0;

@media (max-width: 640px) {
   right: -1rem;
}

@media (min-width: 1024px) {
   right: 2rem;
}
`

const NavLinkStyled = styled(NavLink)`
position: relative;
z-index: 2;
text-decoration: none;

&>*:hover > :nth-child(n) {
   visibility: visible;
   opacity: 1;
}

@media (max-width: 640px) {
}

@media (min-width: 1024px) {
}
`

const IconContainer = styled(motion.div)`
display: grid;
grid-auto-rows: 1.2rem 1rem;
justify-content: center;

&>*:first-child {
   align-items: center;
   width: 3.5vw;
   height: 2rem;
   z-index: 3;
}

&>*:last-child {
   align-items: start;
   width: max-content;
   height: max-content;
   z-index: 2;
}

&>*:nth-child(2n-1):hover {
   transform: scale(1.2);
}

@media (max-width: 640px) {
   grid-auto-rows: .4rem 1rem;

   &>*:first-child {
      width: 3.5vw;
      height: 1.4rem;
   }
}


@media (min-width: 1024px) {
grid-auto-rows: 2.5rem 1rem;

   &>*:first-child {
      max-width: 2.2vw;
      height: 3.2rem;
   }
}
`

const NavLinkStyledWithTitle = styled(NavLinkStyled)`
color: ${props => props.theme === 'dark' ? darkTheme.text : darkTheme.body};
background-color: ${props => props.theme === 'dark' ? darkTheme.body : darkTheme.text};
border-radius: 11px;
padding-inline: 22px;
visibility: ${props => props.isActive ? 'visible' : 'hidden'};
opacity: ${props => props.isActive ? 1 : 0};
transition: visibility 0.3s, opacity 0.3s;
display: flex;
align-items: center;
justify-content: center;
writing-mode: vertical-rl;
text-orientation: upright;
font-size: calc(.5em + .4vw);
margin: 0 auto;
z-index: 2;

&:hover {
   color:  ${props => props.theme === 'dark' ? darkTheme.body : darkTheme.text};
   background-color: ${props => props.theme === 'dark' ? darkTheme.text : darkTheme.body};
   text-decoration: none;
}
   
@media (max-width: 640px) {
   border-radius: 6px;
   font-size: calc(.4em + .3vw);
}

@media (min-width: 1024px) {
   border-radius: 33px;
   font-size: calc(.6em + .8vw);
}
`

const CONTACT = styled(NavLinkStyled)`
`

const CERTIFICATE = styled(NavLinkStyled)`
`

const PROJECT = styled(NavLinkStyled)`
`

const ABOUT = styled(NavLinkStyled)`

`

const SKILLS = styled(NavLinkStyled)`
`

const NavigationMenuIcons = (props) => {
   const [activeIcon, setActiveIcon] = useState(null);

   const handleIconClick = (iconName) => {
      if (activeIcon === iconName) {
         setActiveIcon(null);
      } else {
         setActiveIcon(iconName);
      }
   };

   return (
      <Icons>

         <ABOUT to="/about" className={activeIcon === 'about' ? "nav-name active-nav" : "nav-name"}
            onClick={() => handleIconClick('about')}>
            <IconContainer
               animate={{ scale: [0, 1, 1.5, 1] }}
               transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
               <User className="nav-icons" fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
               <NavLinkStyledWithTitle to="/about" isActive={activeIcon === 'about'} fill={props.theme === "dark" ? darkTheme.body : darkTheme.text}>
                  ABOUT
               </NavLinkStyledWithTitle>
            </IconContainer>
         </ABOUT>


         <PROJECT to="/project" className={activeIcon === 'project' ? "nav-name active-nav" : "nav-name"}
            onClick={() => handleIconClick('project')}>
            <IconContainer
               animate={{ scale: [0, 1, 1.5, 1] }}
               transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
               <Projects className="nav-icons" fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
               <NavLinkStyledWithTitle to="/project" isActive={activeIcon === 'project'}>
                  PROJECT
               </NavLinkStyledWithTitle>
            </IconContainer>
         </PROJECT>

         <SKILLS to="/skills" className={activeIcon === 'skills' ? "nav-name active-nav" : "nav-name"}
            onClick={() => handleIconClick('skills')}>
            <IconContainer
               animate={{ scale: [0, 1, 1.5, 1] }}
               transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
               <Skills className="nav-icons" fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
               <NavLinkStyledWithTitle to="/skills" isActive={activeIcon === 'skills'}>
                  SKILLS
               </NavLinkStyledWithTitle>
            </IconContainer>
         </SKILLS>

         <CERTIFICATE to="/certificate" className={activeIcon === 'certificate' ? "nav-name active-nav" : "nav-name"}
            onClick={() => handleIconClick('certificate')}>
            <IconContainer
               animate={{ scale: [0, 1, 1.5, 1] }}
               transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
               <Certificate className="nav-icons" fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
               <NavLinkStyledWithTitle to="/certificate" isActive={activeIcon === 'certificate'}>
                  CERTIFICATE
               </NavLinkStyledWithTitle>
            </IconContainer>
         </CERTIFICATE>

         <CONTACT to="/contact" className={activeIcon === 'contact' ? "nav-name active-nav" : "nav-name"}
            onClick={() => handleIconClick('contact')}>
            <IconContainer
               animate={{ scale: [0, 1, 1.5, 1] }}
               transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
               <Contact className="nav-icons" fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
               <NavLinkStyledWithTitle to="/contact" isActive={activeIcon === 'contact'}>
                  CONTACT
               </NavLinkStyledWithTitle>
            </IconContainer>
         </CONTACT>

         <Line color={props.theme}

            initial={{
               height: 0,
            }}
            animate={{
               height: '8rem',
            }}
            transition={{
               type: 'spring', duration: 1, delay: 0.8,
            }}
         />
      </Icons >
   )
}

export default NavigationMenuIcons