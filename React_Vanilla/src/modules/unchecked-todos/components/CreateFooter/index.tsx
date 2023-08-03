import { FC, memo } from "react";
import { Button, Form, Space } from "antd";
import s from "./CreateFooter.module.scss";
import FavTodo from "@modules/unchecked-todos/components/FavTodo";
import { TCreateTodoFormFields } from "@src/types/index.ts";

const CreateFooter: FC = () => {
  const title = Form.useWatch<TCreateTodoFormFields["title"]>("title");
  const addDisabled = !title?.length;

  return (
    <footer className={s.footer}>
      <Space>
        <FavTodo className={s.favButton} />

        <Button type="default" htmlType="reset">
          Cancel
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          disabled={addDisabled}
          title={addDisabled ? "First, enter the name of TODO" : "Add TODO"}
        >
          Add TODO
        </Button>
      </Space>
    </footer>
  );
};

export default memo(CreateFooter);
