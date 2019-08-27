import React from 'react';
import { Row } from 'antd';

import Section from '@/components/Section';
import Item from '@/components/Item';
import Title from '@/components/SectionTitle';
import { getRelativePath } from '@/utils';

const Features: React.FC = () => (
  <Section background="rgb(22, 30, 60)">
    <Title id="features" margin="10px 0 0" fontSize={36}>
      Feature of BiiMe
    </Title>
    <Row style={{ width: '100%', padding: '40px 0 30px' }}>
      <Item
        icon={getRelativePath('/static/iconDigitalId@2x.png')}
        title="Digital ID"
        description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
      />
      <Item
        icon={getRelativePath('/static/iconDataExchange@2x.png')}
        title="Data Exchangeable"
        description="Users are able to authorize their data  and digital assets exchangeable from users are able to authorize their data multiple services. "
      />
      <Item
        icon={getRelativePath('/static/iconTraceability@2x.png')}
        title="Traceability"
        description="Containing the certificate and verification, so it makes KYC reusable to lower the cost of tracing for data authentication."
      />
      <Item
        icon={getRelativePath('/static/iconAccountIntegration@2x.png')}
        title="Account integration"
        description="Account as DID with single sign in and APIs. easily integrate new and existing."
      />
    </Row>
  </Section>
);

export default Features;
