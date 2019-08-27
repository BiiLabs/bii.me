import React from 'react';
import { Row } from 'antd';

import Section from '@/components/Section';
import Title from '@/components/SectionTitle';
import Scenario from '@/components/Scenario';
import { getRelativePath } from '@/utils';

const Scenarios: React.FC = () => (
  <Section background="linear-gradient(rgb(0, 226, 158), rgb(0, 156, 255))">
    <Title id="scenarios" margin="50px 0 0">
      Application Scenarios
    </Title>
    <Row style={{ marginTop: 72, marginBottom: 52, width: '100%' }}>
      <Scenario
        title="Certificates"
        icon={getRelativePath('/static/icon-certification.svg')}
        style={{
          borderRight: '1.5px solid white',
          borderBottom: '1.5px solid white',
        }}
      />
      <Scenario
        title="Smart city"
        icon={getRelativePath('/static/icon-smart-city.svg')}
        style={{
          borderRight: '1.5px solid white',
          borderBottom: '1.5px solid white',
        }}
      />
      <Scenario
        title="Medical Record"
        icon={getRelativePath('/static/icon-medical-record.svg')}
        style={{
          borderBottom: '1.5px solid white',
        }}
      />
      <Scenario
        title="OAuth Login"
        icon={getRelativePath('/static/icon-oauth-login.svg')}
        style={{
          borderRight: '1.5px solid white',
        }}
      />
      <Scenario
        title="Membership"
        icon={getRelativePath('/static/icon-membership.svg')}
        style={{
          borderRight: '1.5px solid white',
        }}
      />
      <Scenario
        title="Driver Licence"
        icon={getRelativePath('/static/icon-driver-licence.svg')}
      />
    </Row>
  </Section>
);

export default Scenarios;
