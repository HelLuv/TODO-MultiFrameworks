import { FC, memo } from "react";
import ErrorBoundary from "@lib/components/ErrorBoundary";
import List from "@modules/checked-todos/components/List";

const CheckedTodos: FC = () => {
  return <ErrorBoundary children={<List />} />;
};

export default memo(CheckedTodos);
