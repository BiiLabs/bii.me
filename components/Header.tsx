import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';

import { getRelativePath } from '@/utils';
import { Menu } from './Menu';

const StyledHeader = styled(Layout.Header)`
  z-index: 2;
  width: 100%;
  background-color: transparent;
  position: absolute;
  height: auto;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 27px;
`;

const NavTitle = styled.span`
  display: inline-block;
  font-size: 24px;
  margin-left: 10px;
  color: rgb(28, 42, 77);
`;

const A = styled.a`
  margin-left: 34px;
  color: #fff;
  font-size: 20px;
`;

export default () => (
  <>
    <Menu />
    <StyledHeader>
      <Row type="flex" justify="space-between" style={{ width: '100%' }}>
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <StyledImage src={getRelativePath('/static/icon-4.svg')} alt="logo" />
          <NavTitle>BiiMe</NavTitle>
        </Col>
        <Col
          xs={0}
          sm={0}
          md={20}
          style={{
            textAlign: 'end',
          }}
        >
          <A href="#features">Features</A>
          <A href="#scenarios">Scenarios</A>
          <A href="#how-it-work">How it works</A>
          <A href="#download">Download</A>
          <A href="https://biilabs.io/">BiiLabs</A>
        </Col>
      </Row>
    </StyledHeader>
  </>
);
