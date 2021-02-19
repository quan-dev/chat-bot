import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-size: 20px;
  margin-bottom: 0;
  color: #616060;
  position: relative;
  border-radius: 5px;
`;

export const GroupHeader = styled.div`
  width: 100%;
  font-size: 20px;
  margin-bottom: 0;
  color: #616060;
  position: relative;
  border-radius: 5px;
`;

export const InputComponent = styled.input`
  border: none;
  outline: 0;
  height: 16px;
  color: #253b45;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  background-color: unset;
  max-width: 300px;
  width: calc(100% - 50px);
  display: inline-block;
  padding: 5px;
`;

export const Content = styled.div<{
  isDisplay: boolean;
}>`
  ${(props) =>
    !props.isDisplay &&
    css`
      display: none;
    `}
`;

export const PlusButtonBase = styled.div<{
  isDisplayContent: boolean;
}>`
  padding-top: 3px;
  background: url(https://smax.bot/assets/images/blue-add.svg) center no-repeat;
  box-shadow: none;
  border: 1px solid #009cde;
  border-style: dashed;
  ${(props) =>
    !props.isDisplayContent &&
    css`
      &:hover {
        background-color: #f8f8ff !important;
      }
    `}
  border-radius: 5px;
  cursor: pointer;
  height: 39px;
  width: 133px;
  text-align: center;
  padding: 0 5px;
  font-size: 13px;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: table;
  color: #616060;
  &:hover {
    text-decoration: none;
    background-color: #f8f8ff;
  }
`;

export const ContentButton = styled.span`
  max-height: 100%;
  max-width: 100%;
  margin: auto;
  word-break: break-word;
  font-size: 13px;
  position: relative;
  padding: 5px 3px;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
  outline: 0;
  display: table-cell;
  vertical-align: middle;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
