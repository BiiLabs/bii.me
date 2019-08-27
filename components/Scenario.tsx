import React from 'react';
import { Col } from 'antd';

const Scenario: React.FC<{
  title: string;
  icon: string;
  style?: object;
}> = ({ title, style, icon }) => (
  <Col
    sm={8}
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
  >
    <h2
      style={{ color: 'white', fontSize: 36, marginTop: 56, marginBottom: 30 }}
    >
      {title}
    </h2>
    <img
      src={icon}
      style={{ height: '180px', width: '180px', marginBottom: '62px' }}
    />
  </Col>
);

export default Scenario;
