import { ReactNode } from 'react';
import styled from 'styled-components';

type DescriptionProps = {
  children: ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return (
    <StyledDescription>{ children }</StyledDescription>
  )
};

export default Description;

const StyledDescription = styled.h3`
  font-weight: 400;
  font-size: 14px;
  color: #999999;
`;