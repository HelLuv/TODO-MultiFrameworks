import { FC, memo } from "react";
import { Card, Empty } from "antd";
import { useTodosStore } from "@store/index.ts";
import SingleTodo from "@modules/unchecked-todos/components/SingleTodo";
import CreateTodo from "@modules/unchecked-todos/components/CreateTodo";
import ErrorBoundary from "@lib/components/ErrorBoundary";
import s from "./List.module.scss";

const List: FC = () => {
  const todos = useTodosStore((state) => state.todos);

  return (
    <Card
      title="TODOs"
      bordered={false}
      className={s.card}
      bodyStyle={{ paddingTop: "1rem", paddingBottom: "1rem" }}
    >
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
      <ErrorBoundary children={<CreateTodo />} />

      {todos.length === 0 && (
        <Empty description="No TODOs in this list" style={{ marginTop: 8 }} />
      )}
    </Card>
  );
};

export default memo(List);
