import React from 'react';
import { navigate } from 'hookrouter';

import Button, { ButtonSize, ButtonColor } from '../../components/button';

const NotFoundPage = () => {
  return (
    <div>
      This is NotFound Page
      <Button size={ButtonSize.medium} color={ButtonColor.yellow} isFullWidth={false} onClick={() => navigate('/')}>
        Return
      </Button>
    </div>
  );
};
export default NotFoundPage;
