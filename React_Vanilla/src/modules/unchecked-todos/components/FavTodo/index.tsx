import { FC, memo, useState } from "react";
import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

interface FavTodoProps {
  className?: string;
}

const FavTodo: FC<FavTodoProps> = ({ className }) => {
  const [isStared, setIsStared] = useState(false);

  return (
    <>
      {isStared ? (
        <Button
          type="link"
          icon={<StarFilled style={{ fontSize: 18 }} />}
          title="Remove TODO from Favorites"
          onClick={() => setIsStared(false)}
          className={className}
        />
      ) : (
        <Button
          type="link"
          icon={<StarOutlined style={{ fontSize: 18 }} />}
          title="Add TODO to Favorites"
          onClick={() => setIsStared(true)}
          className={className}
        />
      )}
    </>
  );
};

export default memo(FavTodo);
