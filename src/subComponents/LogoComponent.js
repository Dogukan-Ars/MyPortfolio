import React from 'react'
import { styled } from 'styled-components'
import { darkTheme } from '../components/Themes'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body };
font-family: 'Dancing Script', cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;

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