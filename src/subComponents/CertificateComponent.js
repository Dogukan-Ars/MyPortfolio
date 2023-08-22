import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'


const Container = styled(motion.div)`
display: grid;
grid-template-columns: repeat(2, 2fr);
align-items: center;
gap: 2rem;
min-height: 35vh;

@media (max-width: 640px) {
   grid-template-columns: repeat(1, 2fr);
   min-height: 30vh;
}

@media (min-width: 1024px) {
   min-height: 40vh;
   gap: 3rem;
}
`

const Box = styled(motion(NavLink))`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
margin: 2rem 0 0 0;

display: flex;
flex-direction: column;
z-index: 2;

&:hover {
   color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
   transition: all 0.3s ease;
}

@media (max-width: 640px) {
   display: grid;
   grid-auto-rows: calc(6rem + 5vw);
   min-height: 15vh;
}

@media (min-width: 1024px) {
   height: 25rem;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 90%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;

${Box}:hover &{
   border: 1px solid ${props => props.theme.body};
}

@media (max-width: 640px) {
   height: 100%;
}

@media (min-width: 1024px) {
   height: 100%;
}
`

const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};
display: flex;
align-items:center;

${Box}:hover &{
   border-bottom: 1px solid ${props => props.theme.body};
}

@media (max-width: 640px) {
   font-size: calc(.8em + .7vw);
   max-height: 3rem;
}

@media (min-width: 1024px) {
   font-size: calc(.8em + .7vw);
   max-height: 4rem;
}
`

const HashTags = styled.div`
padding: 0.5rem 0;
display: flex;
flex-wrap: wrap;
margin-top: .5rem;
max-height: 1rem;

@media (max-width: 640px) {
   margin-top: -2rem;
   max-height: 2rem;
}

@media (min-width: 1024px) {
   margin-top: 1rem;
   max-height: 2rem;
}
`

const Tag = styled.span`
padding-right: 0.5rem;
font-size: calc(.6em + .6vw);
`

const Date = styled.span`
padding: 0.5rem 0;
height: 2rem;
margin-top: 1rem;

@media (max-width: 640px) {
   height: 1.2rem;
   margin-top: -5.2rem;
}

@media (min-width: 1024px) {
   height: 1rem;
   margin-top: 1rem;
}
`



// Framer-motion configuration
const Item = {
   hidden: {
      scale: 0,
   },

   show: {
      scale: 1,

      transition: {
         type: 'string',
         duration: 0.5,
      }
   }
}

const CertificateComponent = (props) => {
   const { name, tags, date, imgSrc, link } = props.certificate;
   return (
      <Container
         variants={Item}
      >
         <Box to={link} target="_blank">
            <Image img={imgSrc} />
            <Title>{name}</Title>
            <HashTags>
               {
                  tags.map((t, id) => {
                     return <Tag key={id}>#{t}</Tag>
                  })
               }
            </HashTags>
            <Date>{date}</Date>
         </Box>
      </Container>
   )
}

export default CertificateComponent