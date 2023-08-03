import { FC, memo } from "react";
import ErrorBoundary from "@lib/components/ErrorBoundary";
import List from "./components/List";

interface UncheckedTodosProps {}

const UncheckedTodos: FC<UncheckedTodosProps> = ({}) => {
  return <ErrorBoundary children={<List />} />;
};

export default memo(UncheckedTodos);
