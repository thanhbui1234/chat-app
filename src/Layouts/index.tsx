import style from "./layout.module.scss";

import clsx from "clsx";

import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "../contexts/DarkmodeContext";

const MainLayout = () => {
  return (
    <DarkModeProvider>
      <div className={clsx(style.container, "flex dark:bg-gray-900")}>
        <Outlet></Outlet>
      </div>
    </DarkModeProvider>
  );
};

export default MainLayout;
