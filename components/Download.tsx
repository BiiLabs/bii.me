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
      <IconWrapper
        xl={{ span: 3, offset: 2 }}
        lg={{ span: 4, offset: 2 }}
        md={{ span: 2, offset: 2 }}
        sm={24}
        xs={24}
      >
        <img src={getRelativePath('/static/icon-4.svg')} />
      </IconWrapper>
      <Col>
        <ul style={{ marginLeft: 0 }}>
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
