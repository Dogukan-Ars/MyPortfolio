import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Github } from '../components/AllSvgs';
import { motion } from 'framer-motion';

const Box = styled(motion.li)`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 30vw;
height: 90%;
padding: 1.2rem 1.3rem;
margin: -8rem 5rem 0 0;
color:  ${props => props.theme.body};
background-color: ${props => props.theme.text};
border-radius: 0 40px 0 40px;
transition: all 0.2s ease;
cursor: pointer;

&:hover {
   background-color: ${props => props.theme.body};
   color:  ${props => props.theme.text};
}

@media (max-width: 640px) {
   width: 35vw;
   height: 90%;
   padding: 1rem 1rem;
   margin: -8rem 4rem 0 0;
   border-radius: 0 30px 0 30px;
}

@media (min-width: 1024px) {
   padding: 2rem 1.6rem;
   margin: 1rem 6rem 0 0;
   height: 50vh;
   width: 22vw;
}
`

const Title = styled.h2`
font-size: calc(.8em + .7vw);
margin-bottom: 0.5rem;

@media (max-width: 640px) {
   font-size: calc(.7em + .6vw);
}

@media (min-width: 1024px) {
   font-size:calc(1em + 0.5vw);
}
`

const Images = styled.div`
background-image: ${props => `url(${props.img})`};
background-position: center center;
background-size: cover;
width: 100%;
height: 100%;
border: 1px solid transparent;
border-radius: 0 30px 0 30px;

${Box}:hover &{
   border: 1px solid ${props => props.theme.body};
}

@media (max-width: 640px) {
   border-radius: 0 20px 0 20px;
   height: 60%;

   ${Box}:hover &{
      border: .4px solid ${props => props.theme.body};
   }
}

@media (min-width: 1024px) {
   border-radius: 0 40px 0 40px;
   height: 90%;

   ${Box}:hover &{
      border: 1px solid ${props => props.theme.body};
   }
}
`

const Description = styled.h2`
font-size:calc(0.7em + 0.4vw);
font-family: 'Karla', sans-serif;
font-weight: 500;
margin-top: .6rem;

@media (max-width: 640px) {
   display: none;
}

@media (min-width: 1024px) {
   font-size:calc(0.7em + 0.4vw);
}
`

const Tags = styled.div`
border-top: 1px solid ${props => props.theme.body};
padding-top: 0.4rem;
display: flex;
flex-wrap: wrap;

&{
   margin: .7rem 0;
}

${Box}:hover &{
   border-top: 1px solid ${props => props.theme.text};
}

@media (max-width: 640px) {
   border-top: 1px solid ${props => props.theme.body};

   ${Box}:hover &{
      border-top: 1px solid ${props => props.theme.text};
   }
}

@media (min-width: 1024px) {
   border-top: 2px solid ${props => props.theme.body};

   ${Box}:hover &{
      border-top: 2px solid ${props => props.theme.text};
   }
}
`

const Tag = styled.span`
margin-right: .6rem;
font-size: calc(0.5em + 0.5vw);
font-weight: 600;

@media (max-width: 640px) {
   font-size: calc(.6em + .6vw)
}
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
`

const Link = styled(NavLink)`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding: 0.5rem calc(1.9rem + 1.8vw);
font-size: calc(.8em + 0.6vw);
border-radius: 0 0 0 30px;

${Box}:hover &{
   background-color: ${props => props.theme.text};
   color: ${props => props.theme.body};
}

@media (max-width: 640px) {
   padding: 0.4rem calc(.9rem + .8vw);
   font-size: calc(.7em + 0.5vw);
   border-radius: 0 0 0 20px;
}

@media (min-width: 1024px) {
   padding: 0.6rem calc(1.9rem + 1.8vw);
   font-size: calc(.8em + 0.6vw);
   border-radius: 0 0 0 40px;
}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;

${Box}:hover &{
   &>*{
      fill: ${props => props.theme.text};
   }
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

const Card = (props) => {
   const { id, name, description, tags, img, demo, github } = props.data;
   return (
      <Box key={id} variants={Item}>
         <Title>{name}</Title>
         <Images img={img} />
         <Description>
            {description}
         </Description>
         <Tags>
            {
               tags.map((t, id) => {
                  return <Tag key={id}>#{t}</Tag>
               })
            }
         </Tags>

         <Footer>
            <Link to={demo} target='_blank' >
               View demo
            </Link>
            <Git to={github} target='_blank' >
               <Github width={30} height={30} />
            </Git>
         </Footer>
      </Box>
   )
}

export default Card