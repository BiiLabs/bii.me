import React from 'react';
import { Col } from 'antd';

const Scenario: React.FC<{
  style: object;
}> = ({ style }) => (
  <Col
    xs={8}
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
  >
    <h2 style={{ color: 'white' }}>Certificates</h2>
    <img
      src="https://dummyimage.com/100x100.jpg?text=icon"
      style={{ height: '160px', width: '160px', marginBottom: '30px' }}
    />
  </Col>
);

export default Scenario;
