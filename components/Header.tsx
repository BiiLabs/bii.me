import styled from 'styled-components';
import { Layout } from 'antd';

import { NAV_TITLE } from '@/constants';
import { getRelativePath } from '@/utils';

const StyledHeader = styled(Layout.Header)`
  z-index: 2;
  width: 100%;
  background-color: rgba(240, 242, 245, 0.95);
  height: auto;
  padding: 12px 36px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 2.5rem;
`;

const NavTitle = styled.span`
  line-height: 2.5rem;
  display: inline-block;
  font-size: 15px;
  margin-left: 10px;
  transform: translateY(5px);
`;

const A = styled.a`
  margin-right: 20px;
`;

export default () => (
  <StyledHeader>
    <span>
      <StyledImage src={getRelativePath('/static/logo.svg')} alt="logo" />
      <NavTitle>{NAV_TITLE}</NavTitle>
    </span>
    <span>
      <A href="#features">Features</A>
      <A href="#scenarios">Scenarios</A>
      <A href="#how-it-work">How it works</A>
      <A href="download">Download</A>
      <A href="#biilabs">BiiLabs</A>
    </span>
  </StyledHeader>
);
