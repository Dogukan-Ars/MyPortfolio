import { ThemeProvider, styled } from 'styled-components'
import { motion } from 'framer-motion'
import NavigationMenuIcons from '../subComponents/NavigationMenuIcons'
import { darkTheme } from './Themes'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import { Design, Develope, Technologies } from './AllSvgs'
import BigTitle from '../subComponents/BigTitle'
import { Icon } from '../data/IconData'
import LogoComponent from '../subComponents/LogoComponent'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100%;
min-height: 100vh;
position: fixed;
display: grid;
grid-template-columns: repeat(3, 1fr);
place-items: center;
z-index: 0;

&>*:nth-child(2) {
   background-color: ${props => props.theme.text};
   color: ${props => props.theme.body};
   z-index: 0;
}

&:last-child > *:nth-child(2) > *:first-child > *:first-child > *{
   width: 35px;
   height: 35px;
}

@media (max-width: 640px) {
      &:last-child > *:nth-child(2) > *:first-child > *:first-child > *{
      width: 25px;
      height: 25px;
   }
}

@media (min-width: 1024px) {
}
`

const Main = styled.div`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
font-family: 'Ubuntu Mono', monospace;
padding: 2rem;
width: 68%;
height: 77%;
line-height: 1.5;
z-index: 2;
cursor: pointer;

&:nth-child(2n-1) > *:first-child {
   fill: ${props => props.theme.text};
}

&:hover:nth-child(2n-1) {
   &>*{
      fill: ${props => props.theme.body};
   }
   color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
}

&:nth-child(2) {
   color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
}

&:hover:nth-child(2) {
   color: ${props => props.theme.text};
   background-color: ${props => props.theme.body};
}

&:nth-child(2) > *:first-child {
fill: ${props => props.theme.body};
}

&:hover:nth-child(2) > *:first-child {
fill: ${props => props.theme.text};
}

@media (max-width: 640px) {
   width: 78%;
   padding: .8rem;
}

@media (min-width: 1024px) {
   width: 83%;
   padding: 1.4rem;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(.7em + .6vw);

&>*:first-child {
   margin-right: 1rem;
   width: 40px;
   height: 40px;
}

@media (max-width: 640px) {
   font-size: calc(.7em + .6vw);

   &>*:first-child {
      margin-right: 1rem;
      width: 30px;
      height: 30px;
   }
}

@media (min-width: 1024px) {
   font-size: calc(1em + 1vw);
}
`

const Description = styled.div`
font-size: calc(0.4em + .8vw);
margin-top: 30px;

strong {
   text-transform: uppercase;
}
ul, p {
   margin-left: 2rem;
   margin-bottom: -1.5rem;
}

&>*:last-child {
   padding: 0.5rem 0;
}

@media (max-width: 640px) {
   padding: 0.1rem 0;
   margin-top: 30px;
   font-size: calc(.4em + .7vw);

   ul, p {
      margin-left: .6rem;
      margin-bottom: -.7rem;
   }
}

@media (min-width: 1024px) {
   font-size: calc(0.55em + .9vw);
}
`

const IconBox = styled(motion.div)`
display: grid;
grid-template-columns: repeat(3, 1fr);
place-items: center;
margin-top: 30px;
font-size: calc(0.5em + .8vw);
z-index: 1;


&>*:nth-child(n) {
   margin-right: .8rem;
   width: 6vw;
   height: 6vh;
   margin-bottom: 40px;
   text-align: center;
}

&>*:nth-child(n) > img {
   width: 50px;
   height: 50px;
}

@media (max-width: 640px) {
   font-size: calc(0.3em + .7vw);
   margin-top: 30px;

   &>*:nth-child(n) {
      margin-right: 1.2rem;
      width: 5vw;
      height: 5vh;
      margin-bottom: 35px;
      text-align: center;
   }
   &>*:nth-child(n) > img {
      width: 25px;
      height: 25px;
   }
}

@media (min-width: 1024px) {
   font-size: calc(0.8em + 1vw);
   &>*:nth-child(n) {
      width: 9vw;
      height: 9vh;
   }
}
`

const SkillsPage = () => {
   return (
      <ThemeProvider theme={darkTheme} >
         <LogoComponent theme='dark' />
         <NavigationMenuIcons theme='dark' />
         <SocialIcons theme='dark' />
         <PowerButton />
         <Box
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
         >

            <Main>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 2 }}
               >
                  <Title>
                     <Develope /> Frontend Developer
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
               </motion.div>
            </Main>

            <Main>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 2 }}
               >
                  <Title>
                     <Design /> Designer
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
               </motion.div>
            </Main>

            <Main>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 2 }}
               >
                  <Title>
                     <Technologies /> Technologies
                  </Title>
                  <IconBox>
                     {
                        Icon.map((data) => (
                           <div key={data.id} >
                              <img src={data.imgSrc} alt='techIcons' />
                              <p>{data.name}</p>
                           </div>
                        ))}
                  </IconBox>
               </motion.div>
            </Main>

            <BigTitle text="SKILLS" top='80%' right='35%' />
         </Box>
      </ThemeProvider >
   )
}

export default SkillsPage