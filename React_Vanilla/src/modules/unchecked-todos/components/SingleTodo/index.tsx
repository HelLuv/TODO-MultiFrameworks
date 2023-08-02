import { FC, memo, useState } from "react";
import { TTodo } from "@src/types/index.ts";
import { Button, Checkbox } from "antd";
import s from "./SingleTodo.module.scss";
import {
  DeleteOutlined,
  EditOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { useTodosStore } from "@store/index.ts";

interface SingleTodoProps {
  todo: TTodo;
}

const SingleTodo: FC<SingleTodoProps> = ({ todo: { title, id } }) => {
  const [isStared, setIsStared] = useState(false);
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
        <h3>{title}</h3>
      </Checkbox>

      <div>
        <Button
          type="link"
          icon={<EditOutlined className={s.icon} />}
          title="Edit TODO"
        />

        {isStared ? (
          <Button
            type="link"
            icon={<StarFilled className={s.icon} />}
            title="Remove TODO from Favorites"
            onClick={() => setIsStared(false)}
          />
        ) : (
          <Button
            type="link"
            icon={<StarOutlined className={s.icon} />}
            title="Add TODO to Favorites"
            onClick={() => setIsStared(true)}
          />
        )}

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
