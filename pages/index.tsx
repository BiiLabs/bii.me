import React from 'react';

import Section from '@/components/Section';
import Layout from '@/layouts/Main';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Scenario from '@/components/Scenario';
import Item from '@/components/Item';

const Title = styled.h1<{
  color?: string;
  fontSize?: number;
}>`
  font-size: ${props => props.fontSize || 18}pt;
  color: ${props => props.color || 'rgb(255,255,255)'};
`;

export default function Index() {
  return (
    <Layout>
      <Section background="linear-gradient(125deg, rgb(0, 156, 255), rgb(0, 266, 158))">
        <img src="https://dummyimage.com/120x60.gif" />
        <span>BiiMe</span>
        <Title color="rgb(28, 42, 77)">Universal open DLT ID solution</Title>
      </Section>
      <Section background="rgb(22, 30, 60)">
        <Title fontSize={36}>Feature of BiiMe</Title>
        <Row style={{ width: '100%', padding: '20px' }}>
          <Item
            icon="https://dummyimage.com/100x100.jpg?text=icon"
            title="Digital ID"
            description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
          />
          <Item
            icon="https://dummyimage.com/100x100.jpg?text=icon"
            title="Digital ID"
            description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
          />
          <Item
            icon="https://dummyimage.com/100x100.jpg?text=icon"
            title="Digital ID"
            description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
          />
          <Item
            icon="https://dummyimage.com/100x100.jpg?text=icon"
            title="Digital ID"
            description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
          />
        </Row>
      </Section>
      <Section background="linear-gradient(125deg, rgb(0, 156, 255), rgb(0, 266, 158))">
        <Title>Application Scenarios</Title>
        <Row>
          <Scenario
            style={{
              borderRight: '1px solid white',
              borderBottom: '1px solid white',
            }}
          />
          <Scenario
            style={{
              borderRight: '1px solid white',
              borderBottom: '1px solid white',
            }}
          />
          <Scenario
            style={{
              borderBottom: '1px solid white',
            }}
          />
          <Scenario
            style={{
              borderRight: '1px solid white',
            }}
          />
          <Scenario
            style={{
              borderRight: '1px solid white',
            }}
          />
          <Scenario style={{}} />
        </Row>
      </Section>
      <Section background="white">
        <Title color="rgb(58, 173, 212)">
          How BiiMe works for your services?
        </Title>
        <img src="https://dummyimage.com/1200x200.gif" />
        <Row style={{ width: '100%', padding: '20px' }}>
          <Item
            color="rgb(58,173,212)"
            title="Get BiiMe DID"
            description="Service owners may use your existing account system and connect BiiMe with OAuth API, or using BiiMe APP developed by BiiLabs directly."
          />
          <Item
            color="rgb(58,173,212)"
            title="Get BiiMe DID"
            description="Service owners may use your existing account system and connect BiiMe with OAuth API, or using BiiMe APP developed by BiiLabs directly."
          />
          <Item
            color="rgb(58,173,212)"
            title="Get BiiMe DID"
            description="Service owners may use your existing account system and connect BiiMe with OAuth API, or using BiiMe APP developed by BiiLabs directly."
          />
          <Item
            color="rgb(58,173,212)"
            title="Get BiiMe DID"
            description="Service owners may use your existing account system and connect BiiMe with OAuth API, or using BiiMe APP developed by BiiLabs directly."
          />
        </Row>
      </Section>
      <Section background="rgb(125, 204, 243)">
        <Title color="rgb(28, 42, 77)">
          Experiene the universal DID service on BiiMe
        </Title>
        <Row style={{ width: '100%', marginBottom: '40px' }}>
          <Col xs={4} />
          <Col xs={2}>
            <img
              src="https://dummyimage.com/80x80.gif"
              style={{ borderRadius: '12%' }}
            />
          </Col>
          <Col xs={18}>
            <ul>
              <li>Integrate multiple services cross ID system</li>
              <li>Integrate multiple services cross ID system</li>
              <li>Integrate multiple services cross ID system</li>
            </ul>
          </Col>
        </Row>
      </Section>
    </Layout>
  );
}
