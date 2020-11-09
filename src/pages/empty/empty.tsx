import React from 'react';

import Header from '../../components/header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is EmptyPage for {title} Page</div>
    </div>
  );
};

export default EmptyPage;
