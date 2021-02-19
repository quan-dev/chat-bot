import React from 'react';
import { Col, Row } from 'reactstrap';

import Button from '../LeftSide/button';
import { ReactComponent as ArrowDown } from './icons/arrow-down-solid.svg';
import { ReactComponent as ArrowRight } from './icons/arrow-right-solid.svg';
import HeaderInput from './input';
import PlusButton from './plus-button';
import {
  Container, Content, GroupHeader
} from './styles';
import { GroupPropsType } from './types';

const GroupContainer: React.FC<GroupPropsType> = React.memo(({
  listGroupItem, handleAddItem, idActive, onClickItem
}) => {

  const [
    isDisplayContent, setIsDisplayContent
  ] = React.useState(true);

  const handleOnChangeDisplayContent = () => {
    setIsDisplayContent(!isDisplayContent);
  };

  const handleAdd = () => {
    handleAddItem();
  };

  const handeOnChange = (key: string) => {
    onClickItem(key);
  };

  return (
    <Container>
      <GroupHeader>
        {isDisplayContent ? (
          <ArrowDown
            style={{ width: 10 }}
            cursor="pointer"
            onClick={handleOnChangeDisplayContent}
          />
        ) : (
            <ArrowRight
              style={{ width: 10 }}
              cursor="pointer"
              onClick={handleOnChangeDisplayContent}
            />
          )}
        <HeaderInput />
        <section
          style={{minHeight: '20px',
            width: '100%',}}
        />
      </GroupHeader>
      <Content isDisplay={isDisplayContent}>
        <Row>
          {listGroupItem.map((obj, index: number) => {

            return (
              <Col md="6" xs="6" className="m-0">
                <Button
                  handleOnClick={() => {
                    handeOnChange(obj.id);
                  }}
                  active={obj.id === idActive}
                >
                  {obj.label}
                </Button>
              </Col>
            );
          })}
        </Row>

        <PlusButton
          isDiplay={isDisplayContent}
          handleOnClick={handleAdd}
        />
      </Content>
    </Container >
  );
});

export default GroupContainer;
