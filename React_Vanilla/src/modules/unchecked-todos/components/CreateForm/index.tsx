import { CSSProperties, FC, memo } from "react";
import { Form, Input } from "antd";
import CreateFooter from "@modules/unchecked-todos/components/CreateFooter";
import { TCreateTodoFormFields, TTodo } from "@src/types/index.ts";
import { useTodosStore } from "@store/index.ts";

const { Item } = Form;

const CreateForm: FC = () => {
  const [form] = Form.useForm<TCreateTodoFormFields>();
  const createTodo = useTodosStore((state) => state.createTodo);
  const setIsCreating = useTodosStore((state) => state.setIsCreating);

  function onFormFinish(values: TCreateTodoFormFields) {
    const currentTime = new Date();
    const todo: TTodo = {
      ...values,
      id: currentTime.getTime(),
      created_at: currentTime.toISOString(),
      isFav: true,
      updated_at: null,
    };
    createTodo(todo);

    form.resetFields();
  }

  function onFormReset() {
    setIsCreating(false);
    form.resetFields();
  }

  return (
    <Form form={form} onFinish={onFormFinish} onReset={onFormReset}>
      <Item name="title" style={formItemStyle}>
        <Input
          bordered={false}
          placeholder="TODO name"
          style={{ fontSize: 16 }}
        />
      </Item>
      <Item name="descr" style={formItemStyle}>
        <Input.TextArea
          bordered={false}
          placeholder="Description"
          style={{ minHeight: 80, maxHeight: 200 }}
        />
      </Item>

      <CreateFooter />
    </Form>
  );
};

const formItemStyle: CSSProperties = { marginBottom: 0 };

export default memo(CreateForm);
