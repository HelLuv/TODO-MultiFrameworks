export type TTodo = {
  id: number;
  title: string;
  descr?: string;
  created_at: string;
  updated_at?: string | null;
  isFav?: boolean;
};

export type TCreateTodoFormFields = {
  title: string;
  descr?: string;
};
