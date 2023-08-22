import { styled } from 'styled-components'


const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color: ${props => `rgba(${props.theme.textRgba}, 0.1)`};
font-size: calc(3rem + 3.5vw);
user-select: none;
z-index: 0;

@media (max-width: 640px) {
   font-size: calc(1.5rem + 3vw);
}

@media (min-width: 1024px) {
   font-size: calc(5rem + 5vw);
}
`

const BigTitle = (props) => {
   return (
      <Text top={props.top} left={props.left} right={props.right}>
         {props.text}
      </Text>
   )
}

export default BigTitle