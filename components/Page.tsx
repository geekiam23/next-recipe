import { useRouter } from 'next/router';
import React, { RefObject } from 'react';
import Meta from './Meta';
import Nav from './Navbar';
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
//   html, body, #__next {
//     height: 100%;
//     width: 100%;
//   }
//   html, body {
//     overflow: hidden;
//   }
//   #__next {
//     overflow: auto;
//   }
// `;

interface PageProps {
  backgroundColor?: string;
}

const Page: React.FC<PageProps> = ({ children, backgroundColor = '#FFFFFF' }) => {
  const router = useRouter();

  return (
    <>
      <Meta title='{pageTitle}' />
      <div
        minWidth={1024}
        bg={backgroundColor}
        position='relative'
        height='100vh'
        overflowX='auto'
        overflowY='hidden'
      >
        <div height='100vh' overflowY='auto' width='220px' bg='gray5' position='absolute'>
          <Nav  />
        </div>
        <div overflowY='auto' height='100vh'>
          <div
            data-testid='pageContent'
            px={7}
            pt={7}
            pb={9}
            ml='220px'
            bg={backgroundColor}
            width='calc(100% - 220px)'
          >
            <div m='0 auto' maxWidth={1024}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
