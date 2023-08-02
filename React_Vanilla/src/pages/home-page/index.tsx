import { FC, memo } from "react";
import Glower from "@lib/components/Glower";
import UncheckedTodos from "@modules/unchecked-todos";
import CheckedTodos from "@modules/checked-todos";
import s from "./home-page.module.scss";

const Home: FC = () => {
  return (
    <div className={s.wrapper}>
      <Glower />

      <UncheckedTodos />
      <CheckedTodos />
    </div>
  );
};

export default memo(Home);
