import styled from 'styled-components';

import { Col } from 'antd';
import { media } from '@/utils';

export const Icon = styled.img`
  z-index: 1;
  border-radius: 50%;
  margin-bottom: 15px;
  position: relative;
  width: 112px;
`;

export const Description = styled.p<{ color: string }>`
  color: ${props => props.color};
  font-size: 18px;
  max-width: 220px;
  margin: 0;

  ${media('md')} {
    max-width: initial;
  }
`;

export const Title = styled.h2<{ color: string }>`
  color: ${props => props.color};
  font-size: 28px;
  margin: 0 0 10px;
`;

const Container = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 18px;
  ${media('md')} {
    margin-top: 60px;
  }
`;

const Item: React.FC<{
  title: string;
  description: string;
  icon?: string;
  color?: string;
  iconStyle?: object;
}> = ({ title, description, icon, iconStyle, color = 'white' }) => (
  <Container md={6} sm={12}>
    {icon && <Icon src={icon} style={iconStyle} />}
    <Title color={color}>{title}</Title>
    <Description color={color}>{description}</Description>
  </Container>
);

export default Item;
