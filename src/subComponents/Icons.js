// IconComponent.js
import React from 'react';
import { styled } from 'styled-components';

const IconBox = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    /* Add hover styles if needed */
  }
`;

const IconComponent = ({ src, size }) => {
  return (
    <IconBox size={size} style={{ backgroundImage: `url(${src})` }} />
  );
};

export default IconComponent;