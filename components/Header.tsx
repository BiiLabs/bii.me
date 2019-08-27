import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';

import { getRelativePath } from '@/utils';
import { useState } from 'react';

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

const MenuIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 44px;
  height: 44px;
`;

const MenuIconWrapper = styled.a`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9;
`;

const MenuWrapper = styled(Row)<{ active: boolean }>`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 8;
  bottom: ${props => (props.active ? 0 : 'initial')};
  background-color: ${props => (props.active ? '#161e3c' : 'transparent')};
`;

const MenuItem = styled.a`
  display: block;
  font-size: 56px;
  color: #ffffff;
  padding-top: 64px;
  padding-bottom: 24px;
  margin-left: 32px;
  margin-right: 13px;
  border-bottom: 1px solid #fff;
`;

const Menu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const close = () => setIsActive(false);

  return (
    <MenuWrapper active={isActive}>
      <Col xs={24} sm={0}>
        <MenuIconWrapper
          onClick={e => {
            e.preventDefault();
            setIsActive(prev => !prev);
          }}
        >
          <MenuIcon src="/static/button-option.svg" />
        </MenuIconWrapper>
      </Col>
      {isActive && (
        <>
          <MenuItem href="#features" onClick={close}>
            Features
          </MenuItem>
          <MenuItem href="#scenarios" onClick={close}>
            Scenarios
          </MenuItem>
          <MenuItem href="#how-it-work" onClick={close}>
            How it works
          </MenuItem>
          <MenuItem href="#download" onClick={close}>
            Download
          </MenuItem>
          <MenuItem href="https://biilabs.io/" onClick={close}>
            BiiLabs
          </MenuItem>
        </>
      )}
    </MenuWrapper>
  );
};

export default () => (
  <>
    <Menu />
    <StyledHeader>
      <Row type="flex" justify="space-between" style={{ width: '100%' }}>
        <Col
          span={6}
          style={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: 'unset',
          }}
        >
          <StyledImage
            src={getRelativePath('/static/icon4@2x.png')}
            alt="logo"
          />
          <NavTitle>BiiMe</NavTitle>
        </Col>
        <Col
          xs={0}
          sm={18}
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
