import React from 'react';

import Layout from '@/layouts/Main';
import Scenarios from '@/components/Scenarios';
import Features from '@/components/Features';
import Intro from '@/components/Intro';
import HowItWorks from '@/components/HowItWorks';
import Download from '@/components/Download';

export default function Index() {
  return (
    <Layout>
      <Intro />
      <Features />
      <Scenarios />
      <HowItWorks />
      <Download />
    </Layout>
  );
}
