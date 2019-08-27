import styled from 'styled-components';
import { media } from '@/utils';

const Title = styled.h1<{
  color?: string;
  fontSize?: number;
  margin?: string;
}>`
  font-size: ${props => props.fontSize || 38}pt;
  color: ${props => props.color || 'rgb(255,255,255)'};
  margin: ${props => props.margin || '0'};

  ${media('tablet')} {
    font-size: 36px;
  }
`;

export default Title;
