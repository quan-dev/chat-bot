import styled, { css } from 'styled-components';

type Props = {
  width?: number;
};

export const Container = styled.div<Props>`
  height: calc(100% - 4.375rem);
  border-right: 1px solid #dbe9f1;
  padding: 5px 10px;
  overflow: auto;
  float: left;
  width: ${(props) => props.width || '17%'};
  position: relative;
  z-index: 3;
  background: #fff;
`;

export const BlockContainer = styled.div`
  width: 100%;
  font-size: 20px;
  margin-bottom: 0;
  color: #616060;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  &:hover {
    background-color: #f3f4f4;
  }
`;

export const Button = styled.div<{
  activeButton: boolean;
}>`
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  height: 39px;
  width: 133px;
  text-align: center;
  margin-bottom: 10px;
  padding: 0 5px;
  font-size: 13px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: table;
  color: #616060;
  vertical-align: middle;
  ${(props) =>
    !props.activeButton &&
    css`
      &:hover {
        text-decoration: none;
        background-color: #f8f8ff !important;
      }
    `}
`;

export const ButtonText = styled.span`
  max-height: 100%;
  max-width: 100%;
  margin: auto;
  word-break: break-word;
  font-size: 13px;
  position: relative;
  padding: 5px 3px;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  outline: 0;
  display: table-cell;
  vertical-align: middle;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BlockContent = styled.div`
  display: flex;
  justify-content: space-between;
`;