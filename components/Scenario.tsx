import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
import { media } from '@/utils';

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Col)`
  color: #fff;
  font-size: 36px;
  margin-top: 56px;
  margin-bottom: 30px;

  ${media('md')} {
    font-size: 28px;
  }
`;

const Img = styled.img`
  hight: 180px;
  width: 180px;
  margin-bottom: 62px;

  ${media('md')} {
    width: 90%;
  }
`;

const Scenario: React.FC<{
  title: string;
  icon: string;
}> = props => (
  <Container xs={12} sm={12} md={8} {...props}>
    <Title>{props.title}</Title>
    <Img src={props.icon} />
  </Container>
);

export default Scenario;
