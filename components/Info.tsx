import React from 'react';
import { Title, Description as ItemDescription } from '@/components/Item';
import styled from 'styled-components';
import { media } from '@/utils';
import { Col } from 'antd';

export const Description = styled(ItemDescription)`
  ${media('md')} {
    max-width: 100%;
    margin-bottom: 100px;
  }
`;
export const InfoTitle = styled(Title)`
  ${media('md')} {
    margin-bottom: 8px;
  }
`;

export const InfoWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media('md')} {
    align-items: flex-start;
  }
`;
export const Info: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => (
  <InfoWrapper md={6} sm={24}>
    <InfoTitle color="rgb(58,173,212)">{title}</InfoTitle>
    <Description color="rgb(58,173,212)">{description}</Description>
  </InfoWrapper>
);
