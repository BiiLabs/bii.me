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
        icon={getRelativePath('/static/iconCertification@2x.png')}
        style={{
          borderRight: '1.5px solid white',
          borderBottom: '1.5px solid white',
        }}
      />
      <Scenario
        title="Smart city"
        icon={getRelativePath('/static/iconSmartCity@2x.png')}
        style={{
          borderRight: '1.5px solid white',
          borderBottom: '1.5px solid white',
        }}
      />
      <Scenario
        title="Medical Record"
        icon={getRelativePath('/static/iconMedicalRecord@2x.png')}
        style={{
          borderBottom: '1.5px solid white',
        }}
      />
      <Scenario
        title="OAuth Login"
        icon={getRelativePath('/static/iconOauthLogin@2x.png')}
        style={{
          borderRight: '1.5px solid white',
        }}
      />
      <Scenario
        title="Membership"
        icon={getRelativePath('/static/iconMembership@2x.png')}
        style={{
          borderRight: '1.5px solid white',
        }}
      />
      <Scenario
        title="Driver Licence"
        icon={getRelativePath('/static/iconDriverLicence@2x.png')}
      />
    </Row>
  </Section>
);

export default Scenarios;
