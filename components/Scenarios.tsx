import React from 'react';
import { Row } from 'antd';

import Section from '@/components/Section';
import Title from '@/components/SectionTitle';
import Scenario from '@/components/Scenario';
import { getRelativePath, media } from '@/utils';
import styled from 'styled-components';

const TopLeftScenario = styled(Scenario)`
  border-right: 1.5px solid white;
  border-bottom: 1.5px solid white;
`;

const TopMiddleScenario = styled(Scenario)`
  border-right: 1.5px solid white;
  border-bottom: 1.5px solid white;
  ${media('md')} {
    border-right: none;
  }
`;

const TopRightScenario = styled(Scenario)`
  border-bottom: 1.5px solid white;
  ${media('md')} {
    border-right: 1.5px solid white;
  }
`;

const BottomLeftScenario = styled(Scenario)`
  border-right: 1.5px solid white;
  ${media('md')} {
    border-right: none;
    border-bottom: 1.5px solid white;
  }
`;

const BottomMiddleScenario = styled(Scenario)`
  border-right: 1.5px solid white;
`;

const BottomRightScenario = styled(Scenario)``;

const Scenarios: React.FC = () => (
  <Section background="linear-gradient(rgb(0, 226, 158), rgb(0, 156, 255))">
    <Title id="scenarios" margin="50px 0 0">
      Application Scenarios
    </Title>
    <Row style={{ marginTop: 72, marginBottom: 52, width: '100%' }}>
      <TopLeftScenario
        title="Certificates"
        icon={getRelativePath('/static/icon-certification.svg')}
      />
      <TopMiddleScenario
        title="Smart city"
        icon={getRelativePath('/static/icon-smart-city.svg')}
      />
      <TopRightScenario
        title="Medical Record"
        icon={getRelativePath('/static/icon-medical-record.svg')}
      />
      <BottomLeftScenario
        title="OAuth Login"
        icon={getRelativePath('/static/icon-oauth-login.svg')}
      />
      <BottomMiddleScenario
        title="Membership"
        icon={getRelativePath('/static/icon-membership.svg')}
      />
      <BottomRightScenario
        title="Driver Licence"
        icon={getRelativePath('/static/icon-driver-licence.svg')}
      />
    </Row>
  </Section>
);

export default Scenarios;
