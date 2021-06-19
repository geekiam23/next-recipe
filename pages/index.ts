import { GetServerSideProps, NextPage } from 'next';

const Index: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
    redirect: {
      permanent: true,
      destination: 'recipes',
    },
  };
};

export default Index;
