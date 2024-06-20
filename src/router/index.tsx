import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layouts";
import LoginPage from "../pages/Auth/login";
import RegisterPage from "../pages/Auth/register";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/login" element={<LoginPage></LoginPage>} />
          <Route index path="/register" element={<RegisterPage></RegisterPage>} />
          <Route path="/dashboard" element={<Home></Home>} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
