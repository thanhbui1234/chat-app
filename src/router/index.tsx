import { Routes, Route,Navigate  } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layouts";
import LoginPage from "../pages/Auth/login";
import RegisterPage from "../pages/Auth/register";
const Router = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<MainLayout />}>
          <Route index path="/login" element={<LoginPage></LoginPage>} />
          <Route  path="/register" element={<RegisterPage></RegisterPage>} />
          <Route path="/dashboard" element={<Home></Home>} />
        </Route>    
        <Route path="*" element={<h1 className="text-[200px]"> 404</h1>} />
      </Routes>
    </>
  );
};

export default Router;
