import React from 'react';

import { BlockContainer } from './styles';
import { BlockProps } from './types';

const Block: React.FC<BlockProps> = React.memo(props => {
  return <BlockContainer>{props.children}</BlockContainer>;
});

export default Block;
