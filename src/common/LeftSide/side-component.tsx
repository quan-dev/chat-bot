import React from 'react';

import Button from './button';
import {
  BlockContainer, BlockContent, Container
} from './styles';
import { Props } from './types';

const Side: React.FC<Props> = React.memo((props) => {

  const handeOnChange = (key: string) => {
  };

  return (
    <Container>
      <BlockContainer>
        <BlockContent>
          {props.listBlockItem.map((obj, index: number) => {
            return (
              <React.Fragment key={index}>
                <Button
                  handleOnClick={() => handeOnChange(obj.id)}
                  active={obj.id === props.idActiveBlock}
                >
                  {obj.label}
                </Button>
              </React.Fragment>);
          })}
        </BlockContent>
      </BlockContainer>
      {props.children}
    </Container>
  );
});

export default Side;
