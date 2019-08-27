import React from 'react';
import { Row, Col } from 'antd';

import Section from '@/components/Section';
import Title from '@/components/SectionTitle';
import { getRelativePath, media } from '@/utils';
import styled from 'styled-components';

const LI = styled.li`
  font-size: 24px;
  font-weight: normal;
  font-family: HelveticaNeue-Light, -apple-system, system-ui, Arial, sans-serif;
  list-style: none;

  ${media('md')} {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

const DownloadTitle = styled(Title)`
  ${media('md')} {
    text-align: center;
  }
`;

const IconWrapper = styled(Col)`
  ${media('md')} {
    text-align: center;
    margin-bottom: 24px;
  }
`;

const Download: React.FC = () => (
  <Section background="rgb(125, 204, 243)">
    <DownloadTitle id="download" margin="30px 0 0" color="rgb(28, 42, 77)">
      Experiene the universal DID service on BiiMe
    </DownloadTitle>
    <Row
      style={{
        width: '100%',
        marginTop: 36,
        marginBottom: '40px',
        minHeight: 155,
      }}
    >
      <IconWrapper offset={2} xl={3} lg={4} md={4} sm={22} xs={22}>
        <img src={getRelativePath('/static/icon-4.svg')} />
      </IconWrapper>
      <Col>
        <ul>
          <LI>
            <img
              style={{ marginRight: 20 }}
              src={getRelativePath('/static/haxagon.svg')}
            />
            Integrate multiple services cross ID system
          </LI>
          <LI>
            <img
              style={{ marginRight: 20 }}
              src={getRelativePath('/static/haxagon.svg')}
            />
            Retrieve data from uers authorization eaLIsy
          </LI>
          <LI>
            <img
              style={{ marginRight: 20 }}
              src={getRelativePath('/static/haxagon.svg')}
            />
            Manage all digital assets in one APP
          </LI>
        </ul>
      </Col>
    </Row>
  </Section>
);

export default Download;
