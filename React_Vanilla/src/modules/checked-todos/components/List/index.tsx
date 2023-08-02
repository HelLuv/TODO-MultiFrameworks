import { FC, memo } from "react";
import { Card } from "antd";

interface ListProps {}

const List: FC<ListProps> = ({}) => {
  return (
    <Card title="Completed TODOs" bordered={false} style={{ width: "50%" }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default memo(List);
