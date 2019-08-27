import React from 'react';
import { Row, Col } from 'antd';

import Section from '@/components/Section';
import Title from '@/components/SectionTitle';
import { Icon } from '@/components/Item';
import { getRelativePath, media } from '@/utils';
import styled from 'styled-components';
import { Info } from './Info';

const IconWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: flex-start;
`;

const Line = styled.div`
  position: absolute;
  left: 10%;
  width: 80%;
  height: 4px;
  background-color: #29abe2;
  top: 50%;
  transform: translateY(-50%);

  ${media('md')} {
    width: 4px;
    height: 80%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  ${media('md')} {
    margin-top: 64px;
    display: flex;
  }
`;

const IconGroup = styled(Row)`
  width: 100%;
  margin-top: 48px;
  ${media('md')} {
    width: auto;
    margin-top: 0px;
    margin-right: 22px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const InfoGroup = styled(Row)`
  width: 100%;
  padding-bottom: 52px;
  ${media('md')} {
    margin-top: 12px;
    padding-bottom: 0px;
  }
`;

const HowItWorks: React.FC = () => (
  <Section background="white">
    <Title id="how-it-work" margin="46px 0 0" color="rgb(58, 173, 212)">
      How BiiMe works for your services?
    </Title>
    <ContentWrapper>
      <IconGroup>
        <Line />
        <IconWrapper md={6} sm={24}>
          <Icon src={getRelativePath('/static/icon-3-getbiime.svg')} />
        </IconWrapper>
        <IconWrapper md={6} sm={24}>
          <Icon src={getRelativePath('/static/icon-3-licensing.svg')} />
        </IconWrapper>
        <IconWrapper md={6} sm={24}>
          <Icon src={getRelativePath('/static/icon-3-verfivation.svg')} />
        </IconWrapper>
        <IconWrapper md={6} sm={24}>
          <Icon src={getRelativePath('/static/icon-3-access-service.svg')} />
        </IconWrapper>
      </IconGroup>
      <InfoGroup>
        <Info
          title="Get BiiMe DID"
          description="Service owners may use your existing account system and connect BiiMe with OAuth API, or using BiiMe APP developed by BiiLabs directly."
        />
        <Info
          title="Licensing"
          description="Once users request to join your service, then users are able to authorize their information and personal data on DID or offline to meet your licensing proof."
        />
        <Info
          title="Verification"
          description="Only need scan users QR code in the APP to verifiy if users meet the qualification without more detail information or prove ducuments."
        />
        <Info
          title="Access Service"
          description="Easily to manage the qualification to access control of the service, and speed up the user base and integrate multiple services cross different departments."
        />
      </InfoGroup>
    </ContentWrapper>
  </Section>
);

export default HowItWorks;
