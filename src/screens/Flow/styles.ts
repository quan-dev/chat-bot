import styled from 'styled-components';

export const RightContainer = styled.div`
  width: 83%;
  position: relative;
  z-index: 1;
  height: calc(100% - 4.375rem);
  background: #f3f4f4;
  overflow: scroll;
`;

export const Item = styled.div`
  width: 100%;
  height: 100px;
  background: red
`;

type Props = {
  width?: number
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

export const MapItem = styled.div<Props>`
  left: ${(props) => `${props.left}px` || '0px'};
  right: ${(props) => `${props.right}px` || '0px'};
  top: ${(props) => `${props.top}px` || '0px'};
  bottom: ${(props) => `${props.bottom}px` || '0px'};
  width: ${(props) => `${props.width}px` || '200px'};
  font-size: 10px;
  border-radius: 16px;
  position: absolute;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
  letter-spacing: .5px;
`;

export const HeaderMapItem = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  -webkit-box-align: center;
  align-items: center;
  height: 45px;
  overflow: hidden;
  -webkit-box-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  background-color: #869298;
  font-weight: 700;
`;

type BodyMapItemProps = {
  width?: number
};

export const BodyMapItem = styled.div<BodyMapItemProps>`
  width: ${(props) => `${props.width}px` || '200px'};
  font-size: 10px;
  border-radius: 16px;
  position: absolute;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
  letter-spacing: .5px;
`;

export const SeparationMapItem = styled.div`
  height: auto;
  background-color: #f3f4f4;
  text-align: left;
  padding: 0 10px;
  border-top: 1px solid #fff;
`;

export const TextSeparationMapItem = styled.span`
  display: block;
  padding: 6px;
  color: #253b45;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  line-height: 12px;
`;

export const OptionMapItem = styled.div`
  padding: 5px 0;
  color: var(--primary);
  font-size: 14px;
  line-height: 30px;
  letter-spacing: .5px;
  border-top: 1px solid #dbe9f1;
  cursor: pointer;
  z-index: 10000;
  &:hover {
    opacity: 0.7
  }
`;

export const TextOptionMapItem = styled.span`
  display: block;
  padding: 2px;
  border: 1px solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EditMapItem = styled.span`
  background: url(/assets/images/pencil-edit-button.svg) center/50% no-repeat,center/50% #fff;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 0.7
  }
}
`;