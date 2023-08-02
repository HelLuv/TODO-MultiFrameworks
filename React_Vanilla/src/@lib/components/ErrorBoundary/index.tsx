import { Spin } from "antd";
import { FC, memo, ReactNode, useState } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import FallbackResult from "../FallbackResult";
import styles from "./ErrorBoundary.module.scss";

interface ErrorBoundaryProps {
  onReset?: (...args: any) => any;
  children: ReactNode;
  title?: string;
  description?: string;
  actionTitle?: string;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({
  onReset,
  children,
  title,
  description,
  actionTitle,
}) => {
  const [explode, setExplode] = useState(false);

  const refresh = () => {
    setExplode((e) => !e);
    setTimeout(() => {
      document.location.reload();
    }, 500);
  };

  return (
    <ReactErrorBoundary
      resetKeys={[explode]}
      onError={errorHandler}
      fallback={
        <FallbackResult
          title={title}
          description={description}
          actionTitle={actionTitle}
          onReset={onReset ?? refresh}
        />
      }
    >
      {explode ? (
        <div className={styles.loader}>
          <Spin size="large" tip="Загрузка..." />
        </div>
      ) : (
        children
      )}
    </ReactErrorBoundary>
  );
};

const errorHandler = (error: Error, info: { componentStack: string }) => {
  console.debug("Here is what happen >>>", info, error);
};

export default memo(ErrorBoundary);
