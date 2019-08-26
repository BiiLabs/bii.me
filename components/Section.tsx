import React from 'react';
import styled from 'styled-components';
interface ISectionProps {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  background: string;
}

interface IProps {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  title?: string;
  desc?: string[];
  background: string;
}

const StyledSection = styled.section<ISectionProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignItems};
  text-align: ${props => props.textAlign};
  height: ${props => (props.fullscreen ? '100vh' : 'initial')};
  box-sizing: ${props => (props.fullscreen ? ' border-box' : 'initial')};
  background: ${props => props.background};
`;

const Section: React.FunctionComponent<IProps> = ({
  children,
  fullscreen = false,
  textAlign = 'left',
  first = false,
  alignItems = 'center',
  background,
}) => (
  <StyledSection
    fullscreen={fullscreen}
    textAlign={textAlign}
    first={first}
    alignItems={alignItems}
    background={background}
  >
    {children}
  </StyledSection>
);

export default Section;
