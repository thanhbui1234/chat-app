import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layouts";
const Router = () => {
  return (
    <>
      <Routes>
      <Route  path="/" element={<MainLayout />}>
      <Route  path="/dashboard" element={<Home></Home>}/>
      </Route>
      </Routes>
    </>
  );
};

export default Router;
