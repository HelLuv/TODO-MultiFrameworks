import { FC, memo } from "react";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import { Button } from "antd";
import s from "./CreateTodo.module.scss";
import CreateForm from "@modules/unchecked-todos/components/CreateForm";
import { useTodosStore } from "@store/index.ts";

const CreateTodo: FC = () => {
  const setIsCreating = useTodosStore((state) => state.setIsCreating);
  const isCreating = useTodosStore((state) => state.isCreating);

  function onCreateHandler() {
    setIsCreating(true);
  }

  return (
    <div
      className={s.createWrapper}
      style={!isCreating ? { border: "none" } : {}}
    >
      {isCreating ? (
        <CreateForm />
      ) : (
        <Button
          type="link"
          icon={<PlusOutlined />}
          onClick={onCreateHandler}
          className={s.button}
        >
          Create new TODO
        </Button>
      )}
    </div>
  );
};

export default memo(CreateTodo);
