import { FC, memo } from "react";
import { Card, Empty } from "antd";
import { useTodosStore } from "@store/index.ts";
import SingleTodo from "@modules/unchecked-todos/components/SingleTodo";
import CreateTodo from "@modules/unchecked-todos/components/CreateTodo";
import ErrorBoundary from "@lib/components/ErrorBoundary";

interface ListProps {}

const List: FC<ListProps> = ({}) => {
  const todos = useTodosStore((state) => state.todos);

  return (
    <Card
      title="TODOs"
      bordered={false}
      style={{ width: "50%", marginBottom: "1rem" }}
      bodyStyle={{ paddingTop: "1rem", paddingBottom: "1rem" }}
    >
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
      <ErrorBoundary children={<CreateTodo />} />

      {todos.length === 0 && <Empty description="No TODOs in this list" />}
    </Card>
  );
};

export default memo(List);
