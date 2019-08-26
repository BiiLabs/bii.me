import React from 'react';

import Section from '@/components/Section';
import Layout from '@/layouts/Main';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import FeatureItem from '@/components/FeatureItem';

const Title = styled.h1<{
  color?: string;
  fontSize?: number;
}>`
  font-size: ${props => props.fontSize || 18}pt;
  color: ${props => props.color || 'rgb(255,255,255)'};
`;

const ScenarioItem: React.FC<{ style: object }> = ({ style }) => (
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

export default function Index() {
  return (
    <Layout>
      <Section background="linear-gradient(125deg, rgb(0, 156, 255), rgb(0, 266, 158))">
        <Title>section</Title>
      </Section>
      <Section background="rgb(22, 30, 60)">
        <Title fontSize={36}>Feature of BiiMe</Title>
        <Row style={{ width: '100%', padding: '20px' }}>
          <FeatureItem
            title="Digital ID"
            description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
          />
          <FeatureItem
            title="Digital ID"
            description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
          />
          <FeatureItem
            title="Digital ID"
            description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
          />
          <FeatureItem
            title="Digital ID"
            description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
          />
        </Row>
      </Section>
      <Section background="linear-gradient(125deg, rgb(0, 156, 255), rgb(0, 266, 158))">
        <Title>Application Scenarios</Title>
        <Row>
          <ScenarioItem
            style={{
              borderRight: '1px solid white',
              borderBottom: '1px solid white',
            }}
          />
          <ScenarioItem
            style={{
              borderRight: '1px solid white',
              borderBottom: '1px solid white',
            }}
          />
          <ScenarioItem
            style={{
              borderBottom: '1px solid white',
            }}
          />
          <ScenarioItem
            style={{
              borderRight: '1px solid white',
            }}
          />
          <ScenarioItem
            style={{
              borderRight: '1px solid white',
            }}
          />
          <ScenarioItem style={{}} />
        </Row>
      </Section>
      <Section background="white">
        <Title color="rgb(58, 173, 212)">
          How BiiMe works for your services?
        </Title>
      </Section>
      <Section background="rgb(125, 204, 243)">
        <Title color="rgb(28, 42, 77)">
          Experiene the universal DID service on BiiMe
        </Title>
      </Section>
    </Layout>
  );
}
