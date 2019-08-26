import React from 'react';
import Head from 'next/head';
import { Layout } from 'antd';

import '@/assets/style.less';
import Header from '@/components/Header';
import { SITE_TITLE } from '@/constants';

import Meta from './meta';
import GlobalStyles from './globalStyles';

type TProps = {
  title?: string;
  children: React.ReactNode;
};

const MainLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
}) => (
  <Layout>
    <Head>
      <title>{title}</title>
      <Meta />
    </Head>
    <Header />
    <Layout.Content>{children}</Layout.Content>
    <Layout.Footer>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <img src="https://dummyimage.com/120x60.gif" />
        <div>
          <img src="https://dummyimage.com/60x60.gif" />
          <img src="https://dummyimage.com/60x60.gif" />
          <img src="https://dummyimage.com/60x60.gif" />
          <img src="https://dummyimage.com/60x60.gif" />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>2019 © BiiLabs</p>
      </div>
    </Layout.Footer>
    <GlobalStyles />
  </Layout>
);

export default MainLayout;
