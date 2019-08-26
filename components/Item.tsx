import styled from 'styled-components';

import { Col } from 'antd';

const Icon = styled.img`
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Description = styled.p<{ color: string }>`
  color: ${props => props.color};
  font-size: 13.5px;
`;

const Title = styled.h2<{ color: string }>`
  color: ${props => props.color};
  font-size: 21.6px;
`;

const Item: React.FC<{
  title: string;
  description: string;
  icon?: string;
  color?: string;
}> = ({ title, description, icon, color = 'white' }) => (
  <Col
    sm={6}
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 18px',
    }}
  >
    {icon && <Icon src={icon} />}
    <Title color={color}>{title}</Title>
    <Description color={color}>{description}</Description>
  </Col>
);

export default Item;
