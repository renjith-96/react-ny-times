import { Route, Routes } from "react-router-dom";
import Category from "../pages/category";
import Search from "../pages/search";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;
