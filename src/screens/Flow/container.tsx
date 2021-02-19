// eslint-disable-next-line max-lines
import React, { useEffect, useState } from 'react';

import FullLayout from '../../common/FullLayout';
import { GroupContainer, } from '../../common/Group';
import { GroupItemType } from '../../common/Group/types';
import { Block, Side } from '../../common/LeftSide';
import { selectors } from '../../state/ducks/block';
import { useMemoSelector } from '../../state/utils/use-memo-selector';
import LineTo from './line';
import {
  BodyMapItem,
  EditMapItem,
  HeaderMapItem,
  MapItem,
  OptionMapItem,
  RightContainer,
  SeparationMapItem,
  TextOptionMapItem,
  TextSeparationMapItem
} from './styles';

const Home: React.FC = () => {

  const [
    listGroupItem, setListGroupItem
  ] = useState<GroupItemType[]>([]);

  const [
    listBlockItem, setListBlockItem
  ] = useState<GroupItemType[]>([]);

  const [
    idActiveGroupItem, setIdActiveItemGroup
  ] = useState<string>('');

  const [
    idActiveBlockItem, setIdActiveBlockItem
  ] = useState<string>('');

  const getInfoBlock = useMemoSelector(selectors.getInfoBlock);

  useEffect(() => {
    if (getInfoBlock?.success) {
      setListGroupItem(getInfoBlock.data?.listGroupItem || []);
      setListBlockItem(getInfoBlock.data?.blocks || []);

      if (getInfoBlock.data && getInfoBlock.data.listGroupItem.length > 0) {
        setIdActiveItemGroup(getInfoBlock.data?.listGroupItem[0].id);
      }

      if (getInfoBlock.data && getInfoBlock.data.blocks.length > 0) {
        setIdActiveBlockItem(getInfoBlock.data?.blocks[0].id);
      }
    }
  }, [
    getInfoBlock
  ]);

  const handleAddItem = () => {
    console.log('add');
  };

  const onClickItem = (id: string) => {
    setIdActiveItemGroup(id);
  };

  return (
    <FullLayout>
      <Side idActiveBlock={idActiveBlockItem} listBlockItem={listBlockItem}>
        <Block>
          <GroupContainer
            listGroupItem={listGroupItem}
            handleAddItem={handleAddItem}
            idActive={idActiveGroupItem}
            onClickItem={onClickItem}
          />
        </Block>
      </Side>
      <RightContainer className="map-container">
        <LineTo from="AFr" to="ATo" fromAnchor="100%" toAnchor="0" within="map-container" />
        <LineTo from="BFr" to="BTo" fromAnchor="100%" toAnchor="0" within="map-container" />
        <LineTo from="CFr" to="CTo" fromAnchor="100%" toAnchor="0" within="map-container" />
        <LineTo from="DFr" to="DTo" fromAnchor="100%" toAnchor="0" within="map-container" />
        <LineTo from="EFr" to="ETo" fromAnchor="100%" toAnchor="0" within="map-container" />
        <LineTo from="FFr" to="FTo" fromAnchor="100%" toAnchor="0" within="map-container" />

        <MapItem left={0} top={300} >
          <HeaderMapItem>Hello world</HeaderMapItem>
          <BodyMapItem>
            <SeparationMapItem>
              <TextSeparationMapItem>
                Bạn muốn chọn dịch vụ nào
              </TextSeparationMapItem>
            </SeparationMapItem>
            <OptionMapItem className="AFr">
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem className="BFr">
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem className="CFr">
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
          </BodyMapItem>
          <EditMapItem />
        </MapItem>

        <MapItem left={0} top={300} >
          <HeaderMapItem>Hello world</HeaderMapItem>
          <BodyMapItem>
            <SeparationMapItem>
              <TextSeparationMapItem>
                Bạn muốn chọn dịch vụ nào
              </TextSeparationMapItem>
            </SeparationMapItem>
            <OptionMapItem className="AFr">
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem className="BFr">
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem className="CFr">
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
          </BodyMapItem>
          <EditMapItem />
        </MapItem>
        <MapItem left={300} top={50} className="ATo">
          <HeaderMapItem>Hello world</HeaderMapItem>
          <BodyMapItem>
            <SeparationMapItem>
              <TextSeparationMapItem>
                Bạn muốn chọn dịch vụ nào
              </TextSeparationMapItem>
            </SeparationMapItem>
            <OptionMapItem>
              <TextOptionMapItem className="DFr">Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem className="EFr">Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem className="FFr">Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
          </BodyMapItem>
          <EditMapItem />

        </MapItem>
        <MapItem left={300} top={300} className="BTo">
          <HeaderMapItem>Hello world</HeaderMapItem>
          <BodyMapItem>
            <SeparationMapItem>
              <TextSeparationMapItem>
                Bạn muốn chọn dịch vụ nào
              </TextSeparationMapItem>
            </SeparationMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
          </BodyMapItem>
          <EditMapItem />

        </MapItem>
        <MapItem left={300} top={550} className="CTo">
          <HeaderMapItem>Hello world</HeaderMapItem>
          <BodyMapItem>
            <SeparationMapItem>
              <TextSeparationMapItem>
                Bạn muốn chọn dịch vụ nào
              </TextSeparationMapItem>
            </SeparationMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
          </BodyMapItem>
          <EditMapItem />

        </MapItem>
        <MapItem left={600} top={50} className="DTo">
          <HeaderMapItem>Hello world</HeaderMapItem>
          <BodyMapItem>
            <SeparationMapItem>
              <TextSeparationMapItem>
                Bạn muốn chọn dịch vụ nào
              </TextSeparationMapItem>
            </SeparationMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
          </BodyMapItem>
          <EditMapItem />

        </MapItem>
        <MapItem left={600} top={300} className="ETo">
          <HeaderMapItem>Hello world</HeaderMapItem>
          <BodyMapItem>
            <SeparationMapItem>
              <TextSeparationMapItem>
                Bạn muốn chọn dịch vụ nào
              </TextSeparationMapItem>
            </SeparationMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
          </BodyMapItem>
          <EditMapItem />

        </MapItem>
        <MapItem left={600} top={550} className="FTo">
          <HeaderMapItem>Hello world</HeaderMapItem>
          <BodyMapItem>
            <SeparationMapItem>
              <TextSeparationMapItem>
                Bạn muốn chọn dịch vụ nào
              </TextSeparationMapItem>
            </SeparationMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
            <OptionMapItem>
              <TextOptionMapItem>Chăm sóc da mặt</TextOptionMapItem>
            </OptionMapItem>
          </BodyMapItem>
          <EditMapItem />

        </MapItem>
      </RightContainer>
    </FullLayout >
  );
};

export default React.memo(Home);
