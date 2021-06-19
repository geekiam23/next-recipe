import React from 'react';
import Meta from './Meta';
import Nav from './Navbar';

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Meta title='{pageTitle}' />
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Page;
