import { FC, memo } from "react";
import { TTodo } from "@src/types/index.ts";
import { Button, Checkbox, Space } from "antd";
import s from "./SingleTodo.module.scss";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTodosStore } from "@store/index.ts";
import FavTodo from "@modules/unchecked-todos/components/FavTodo";

interface SingleTodoProps {
  todo: TTodo;
}

const SingleTodo: FC<SingleTodoProps> = ({ todo: { title, id, descr } }) => {
  const completeTodo = useTodosStore((state) => state.completeTodo);
  const deleteTodo = useTodosStore((state) => state.deleteTodo);

  function completeTodoHandler() {
    completeTodo(id);
  }

  function deleteTodoHandler() {
    deleteTodo(id);
  }

  return (
    <div className={s.todoWrapper}>
      <Checkbox onClick={completeTodoHandler}>
        <h3 className={s.title}>{title}</h3>
        <span className={s.descr}>{descr}</span>
      </Checkbox>

      <Space size={[1, 1]}>
        <Button
          type="link"
          icon={<EditOutlined className={s.icon} />}
          title="Edit TODO"
        />

        <FavTodo />

        <Button
          type="link"
          icon={
            <DeleteOutlined style={{ color: "#a70c14" }} className={s.icon} />
          }
          title="Delete TODO"
          onClick={deleteTodoHandler}
        />
      </Space>
    </div>
  );
};

export default memo(SingleTodo);
