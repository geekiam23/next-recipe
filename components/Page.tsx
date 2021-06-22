import React from 'react';
import Meta from './Meta';
import Nav from './Navbar';

interface Props {
  children?: JSX.Element;
  backgroundColor: string;
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Meta title='{pageTitle}' />
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Page;
