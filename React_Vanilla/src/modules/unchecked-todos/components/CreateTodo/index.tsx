import { FC, memo, useState } from "react";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import { Button } from "antd";
import s from "./CreateTodo.module.scss";
import CreateFields from "@modules/unchecked-todos/components/CreateFields";

const CreateTodo: FC = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);

  function onCreateHandler() {
    setIsCreateMode(true);
  }

  return (
    <div
      className={s.createWrapper}
      style={!isCreateMode ? { border: "none" } : {}}
    >
      {isCreateMode ? (
        <CreateFields />
      ) : (
        <Button type="link" icon={<PlusOutlined />} onClick={onCreateHandler}>
          Create new TODO
        </Button>
      )}
    </div>
  );
};

export default memo(CreateTodo);
