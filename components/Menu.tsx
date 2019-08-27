import { Col, Row } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

export const MenuIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 44px;
  height: 44px;
`;

export const MenuIconWrapper = styled.a`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9;
`;

export const MenuWrapper = styled(Row)<{ active: boolean }>`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 8;
  bottom: ${props => (props.active ? 0 : 'initial')};
  background-color: ${props => (props.active ? '#161e3c' : 'transparent')};
`;

export const MenuItem = styled.a`
  display: block;
  font-size: 56px;
  color: #ffffff;
  padding-top: 64px;
  padding-bottom: 24px;
  margin-left: 32px;
  margin-right: 13px;
  border-bottom: 1px solid #fff;
`;
export const Menu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const close = () => setIsActive(false);
  return (
    <MenuWrapper active={isActive}>
      <Col sm={24} md={0}>
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
