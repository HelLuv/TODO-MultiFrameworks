import { Button, Empty } from "antd";
import { FC, memo } from "react";

import styles from "./FallBackResult.module.scss";

interface FallBackResultProps {
  onReset: (...args: any) => void;
  title?: string;
  description?: string;
  actionTitle?: string;
  size?: "small" | "middle" | "large";
}

const FallBackResult: FC<FallBackResultProps> = ({
  onReset,
  description,
  actionTitle,
}: FallBackResultProps) => {
  return (
    <Empty
      description={description ?? "Oops! Something went wrong :("}
      className={styles.empty}
    >
      <Button size="middle" type="primary" onClick={() => onReset()}>
        {actionTitle ?? "Try again after a while"}
      </Button>
    </Empty>
  );
};

export default memo(FallBackResult);
