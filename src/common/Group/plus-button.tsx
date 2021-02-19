import React from 'react';

import { ContentButton, PlusButtonBase } from './styles';

const PlusButton: React.FC<{
  isDiplay: boolean;
  handleOnClick: (ev: any) => void;
}> = React.memo(({ ...props }) => {
  return (
    <PlusButtonBase
      isDisplayContent={props.isDiplay}
      onClick={props.handleOnClick}
      {...props}
    >
      <ContentButton />
    </PlusButtonBase>
  );
});

export default PlusButton;
