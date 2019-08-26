import React from 'react';

import Section from '@/components/Section';
import Layout from '@/layouts/Main';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Title = styled.h1<{
  color?: string;
  fontSize?: number;
}>`
  font-size: ${props => props.fontSize || 18}pt;
  color: ${props => props.color || 'rgb(255,255,255)'};
`;

const Icon = styled.img`
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: white;
  font-size: 13.5px;
`;

const IconTitle = styled.h2`
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
    <IconTitle>{title}</IconTitle>
    <Description>{description}</Description>
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
        <Row style={{ padding: '20px' }}>
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
