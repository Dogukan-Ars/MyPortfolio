import { useState } from 'react'
import { keyframes, styled } from 'styled-components'
import { YinYang } from './AllSvgs'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'
import NavigationMenuIcons from '../subComponents/NavigationMenuIcons'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6 {
   font-family: 'Karla', sans-serif;
   font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;`

const rotate = keyframes`
from {
   transform: rotate(0);
}
to {
   transform: rotate(360deg);
}
`

const Center = styled.div`
position: absolute;
top: ${props => props.click ? "85%" : "50%"};
left: ${props => props.click ? "92%" : "50%"};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child {
   animation: ${rotate} infinite 1.5s linear;
}

&>:last-child {
   display: ${props => props.click ? "none" : "inline-block"};
   padding-top: 1rem;
}

@media (max-width: 640px) {
   width: 140px;
   height: 140px;
   font-size: calc(.4em + .4vw);

   &>:last-child {
      padding-top: .5rem;
   }
}

@media (min-width: 1024px) {
   font-size: calc(.6em + .5vw);
}
`

const DarkDiv = styled.div`
background-color: #000;
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

   const [click, setClick] = useState(true)

   const handleClick = () => setClick(!click)

   return (
      <MainContainer >
         <DarkDiv click={click} />
         <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' : 'light'} />
            <SocialIcons theme={click ? 'dark' : 'light'} />
            <NavigationMenuIcons theme={click ? 'dark' : 'light'} />

            <Center click={click}>
               <YinYang onClick={() => handleClick()} width={click ? 90 : 200} height={click ? 90 : 200} fill='currentColor' />
               <span>click here</span>
            </Center>

         </Container>
         {click ? <Intro click={click} /> : null}
      </MainContainer>
   )
}

export default Main