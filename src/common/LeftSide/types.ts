
export type Props = {
  children: React.ReactNode;
  idActiveBlock: string;
  listBlockItem: BlockItemType[]
};

export type BlockItemType = {
  label: string;
  id: string;
}

export type BlockProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  children: string;
  active: boolean;
  handleOnClick?: (ev: any) => void;
};
