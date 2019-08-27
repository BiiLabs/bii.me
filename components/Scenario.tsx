import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Scenario: React.FC<{
  title: string;
  icon: string;
}> = props => (
  <Container xs={12} sm={12} md={8} {...props}>
    <h2
      style={{ color: 'white', fontSize: 36, marginTop: 56, marginBottom: 30 }}
    >
      {props.title}
    </h2>
    <img
      src={props.icon}
      style={{ height: '180px', width: '180px', marginBottom: '62px' }}
    />
  </Container>
);

export default Scenario;
