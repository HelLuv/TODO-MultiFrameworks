import { FC, memo } from "react";
import { Card, Empty } from "antd";
import { useTodosStore } from "@store/index.ts";
import SingleTodo from "@modules/checked-todos/components/SingleTodo";

interface ListProps {}

const List: FC<ListProps> = ({}) => {
  const todos = useTodosStore((state) => state.completedTodos);

  return (
    <Card
      title="Completed TODOs"
      bordered={false}
      style={{ width: "50%", marginBottom: "1rem" }}
      bodyStyle={{ paddingTop: "1rem", paddingBottom: "1rem" }}
    >
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}

      {todos.length === 0 && <Empty description="No completed TODOs yet" />}
    </Card>
  );
};

export default memo(List);
