export type GroupItemType = {
  label: string;
  id: string;
}

export type GroupPropsType = {
  listGroupItem: GroupItemType[];
  handleAddItem: Function;
  idActive: string;
  onClickItem: Function
};
