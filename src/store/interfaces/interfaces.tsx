export interface TableProps {
  data: {
    key: string;
    name: string;
    stars: number;
    bananas: number;
  }[];
  columns: {
    id: number;
    name: string;
    is_sortable: boolean;
  }[];
}

export interface RowProps {
  item: {
    key: string;
    name: string;
    stars: number;
    bananas: number;
  };
  index: number;
}

export interface ClearTextButtonProps {
  query: string;
  clearQuery: () => void;
  handleSubmit: () => void;
}
