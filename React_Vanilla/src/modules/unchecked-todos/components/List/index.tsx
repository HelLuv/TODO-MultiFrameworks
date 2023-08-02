import { FC, memo } from "react";
import { Card } from "antd";
import { useTodosStore } from "@store/index.ts";

interface ListProps {}

const List: FC<ListProps> = ({}) => {
  const todos = useTodosStore((state) => state.todos);

  return (
    <Card
      title="TODOs"
      bordered={false}
      style={{ width: "50%", marginBottom: "1rem" }}
    >
      {todos.map((todo) => (
        <h3>{todo.title}</h3>
      ))}
    </Card>
  );
};

export default memo(List);
