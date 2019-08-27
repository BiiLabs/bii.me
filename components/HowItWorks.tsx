import React from 'react';
import { Row } from 'antd';

import Section from '@/components/Section';
import Title from '@/components/SectionTitle';
import Item from '@/components/Item';
import { getRelativePath } from '@/utils';

const HowItWorks: React.FC = () => (
  <Section background="white">
    <Title id="how-it-work" margin="46px 0 0" color="rgb(58, 173, 212)">
      How BiiMe works for your services?
    </Title>
    <Row style={{ width: '100%', padding: '48px 0 52px' }}>
      <Item
        color="rgb(58,173,212)"
        title="Get BiiMe DID"
        icon={getRelativePath('/static/icon-3-getbiime.svg')}
        description="Service owners may use your existing account system and connect BiiMe with OAuth API, or using BiiMe APP developed by BiiLabs directly."
      />
      <Item
        color="rgb(58,173,212)"
        title="Licensing"
        icon={getRelativePath('/static/icon-3-licensing.svg')}
        description="Once users request to join your service, then users are able to authorize their information and personal data on DID or offline to meet your licensing proof."
      />
      <Item
        color="rgb(58,173,212)"
        title="Verification"
        icon={getRelativePath('/static/icon-3-verfivation.svg')}
        description="Only need scan users QR code in the APP to verifiy if users meet the qualification without more detail information or prove ducuments."
      />
      <Item
        color="rgb(58,173,212)"
        title="Access Service"
        icon={getRelativePath('/static/icon-3-access-service.svg')}
        description="Easily to manage the qualification to access control of the service, and speed up the user base and integrate multiple services cross different departments."
      />
    </Row>
  </Section>
);

export default HowItWorks;
