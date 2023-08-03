import { FC, memo } from "react";
import { TTodo } from "@src/types/index.ts";
import { Button, Checkbox } from "antd";
import s from "./SingleTodo.module.scss";
import { DeleteOutlined } from "@ant-design/icons";
import { useTodosStore } from "@store/index.ts";

interface SingleTodoProps {
  todo: TTodo;
}

const SingleTodo: FC<SingleTodoProps> = ({ todo: { title, id, descr } }) => {
  const deleteTodo = useTodosStore((state) => state.deleteTodo);
  const uncompleteTodo = useTodosStore((state) => state.uncompleteTodo);

  function uncompleteTodoHandler() {
    uncompleteTodo(id);
  }

  function deleteTodoHandler() {
    deleteTodo(id);
  }

  return (
    <div className={s.todoWrapper}>
      <Checkbox onClick={uncompleteTodoHandler} defaultChecked>
        <h3 className={s.title}>{title}</h3>
        <span className={s.descr}>{descr}</span>
      </Checkbox>

      <div>
        <Button
          type="link"
          icon={
            <DeleteOutlined style={{ color: "#a70c14" }} className={s.icon} />
          }
          title="Delete TODO"
          onClick={deleteTodoHandler}
        />
      </div>
    </div>
  );
};

export default memo(SingleTodo);
