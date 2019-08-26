import styled from 'styled-components';

import { Col } from 'antd';

const Icon = styled.img`
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: white;
  font-size: 13.5px;
`;

const Title = styled.h2`
  color: white;
  font-size: 21.6px;
`;

const FeatureItem: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => (
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
    <Icon src="https://dummyimage.com/100x100.jpg?text=icon" />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Col>
);

export default FeatureItem;
