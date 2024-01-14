import { Outlet } from "react-router-dom";
import { Header } from "../header/navigation";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
