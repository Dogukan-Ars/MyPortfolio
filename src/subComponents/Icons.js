// IconComponent.js
import { styled } from 'styled-components';

const IconBox = styled.div`
width: ${props => props.size}px;
height: ${props => props.size}px;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
transition: background-color 0.3s ease;

@media (max-width: 768px) {
  width: ${props => props.size * 0.8}px; 
  height: ${props => props.size * 0.8}px;
}
`;

const IconComponent = ({ src, size }) => {
  return (
    <IconBox size={size} style={{ backgroundImage: `url(${src})` }} />
  );
};

export default IconComponent;