import React from 'react'
import { styled } from 'styled-components'
import { darkTheme } from '../components/Themes'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family: 'Shadows Into Light', cursive;

position: fixed;
left: 1.5rem;
top: 1rem;
z-index: 3;
font-size: calc(1.5rem + 1vw);

@media (max-width: 640px) {
  font-size: calc(1rem + 1vw);
  left: 1rem;
  top: .7rem;
}

@media (min-width: 1024px) {
  left: 2rem;
  top: 1.4rem;
  font-size: calc(2rem + 1vw);
}
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      {/* Site name initials */}
      DA
    </Logo>
  )
}

export default LogoComponent