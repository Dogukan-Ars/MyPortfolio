import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import Me from "../assets/Images/Profile-photo.png"
import Typewriter from 'typewriter-effect'


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height: 55vh;
display: flex;

background: linear-gradient(
   to right,
   ${props => props.theme.body} 50%,
   ${props => props.theme.text} 50%) bottom,
   linear-gradient(
   to right,
   ${props => props.theme.body} 50%,
   ${props => props.theme.text} 50%) top;

background-repeat: no-repeat;
background-size: 100% 2px;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
z-index: 1;
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic {
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translate(-50%, 0%);
   width: 100%;
   height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
user-select: none;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
   color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
   font-size: calc(0.5rem + 1.5vw);
   font-weight: 300;
}
`

const stringsToRender = [
   " Dogukan.",
   " a front-end developer.",
   " also an engineer.",
   " a music fan.",
];

const Intro = () => {
   return (
      <Box
         initial={{ height: 0 }}
         animate={{ height: '55vh' }}
         transition={{ type: 'spring', duration: 2, delay: 1 }}
      >
         <SubBox>
            <Text>
               <h1>Hi,</h1>
               <h3 style={{ display: "flex", flexWrap: "wrap", whiteSpace: "pre-wrap" }}>
                  I am
                  <Typewriter typeSpeed={60} backSpeed={50} onInit={(typewriter) => {
                     for (let i = 0; i < stringsToRender.length; i++) {
                        typewriter = typewriter.typeString(stringsToRender[i])
                           .pauseFor(2000)
                           .deleteAll()
                     }
                     typewriter.typeString(stringsToRender[0])
                     typewriter.start()

                  }} animate="infinite" />
               </h3>
               <h6>I love to learn every kind of information, especially coding and design.</h6>
            </Text>
         </SubBox>

         <SubBox>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 2, delay: 2 }}
            >
               <img src={Me} alt="pp" className="pic" style={{ marginBottom: "2px" }} />
            </motion.div>
         </SubBox>
      </Box>
   )
}

export default Intro