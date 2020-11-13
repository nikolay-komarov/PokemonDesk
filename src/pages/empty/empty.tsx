import React from 'react';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <div>This is EmptyPage for {title} Page</div>
    </div>
  );
};

export default EmptyPage;
