import { CSSProperties, FC, memo } from "react";
import { Form, Input } from "antd";

const { Item } = Form;

interface CreateFieldsProps {}

const CreateFields: FC<CreateFieldsProps> = ({}) => {
  return (
    <Form>
      <Item name="title" style={formItemStyle}>
        <Input bordered={false} placeholder="TODO name" />
      </Item>
      <Item name="descr" style={formItemStyle}>
        <Input.TextArea
          bordered={false}
          placeholder="Description"
          style={{ minHeight: 80, maxHeight: 200 }}
        />
      </Item>
    </Form>
  );
};

const formItemStyle: CSSProperties = { marginBottom: 16 };

export default memo(CreateFields);
