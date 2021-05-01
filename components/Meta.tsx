import React from 'react';
import Head from 'next/head';

interface MetaProps {
  title?: string;
}

const Meta: React.FC<MetaProps> = ({ title = 'Recipes' }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default Meta;