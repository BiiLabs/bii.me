import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import Section from '@/components/Section';
import Title from '@/components/SectionTitle';
import { getRelativePath } from '@/utils';

const Content = styled(Row)`
  padding-top: 140px;
  align-items: space-around;
  width: 100%;
`;

const Intro: React.FC = () => (
  <Section
    alignItems="flex-start"
    background="linear-gradient(90deg, rgb(0, 156, 255), rgb(0, 266, 158))"
  >
    <Content type="flex" justify="center">
      <Col xl={6} lg={10} md={12}>
        <img
          style={{ width: 294 }}
          src={getRelativePath('/static/phone@2x.png')}
        />
      </Col>
      <Col lg={11} md={12}>
        <Row style={{ fontSize: 38 }}>
          <img
            style={{ width: 57, marginRight: 21 }}
            src={getRelativePath('/static/icon-4.svg')}
          />
          <span>BiiMe</span>
        </Row>
        <Title margin="12.5px 0 0" color="rgb(28, 42, 77)">
          Universal open DLT ID solution
        </Title>
      </Col>
    </Content>
  </Section>
);

export default Intro;
