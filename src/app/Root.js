import React from 'react';
import Card from '@components/Card';
import Layout from './components/Layout';

const Root = () => (
  <Layout>
    <div className="yl-room">
      <Card reveal={false} value={1} suit="club"/>
    </div>
  </Layout>
);

export default Root
