import { Route, Routes } from "react-router-dom";
import NewsList from "../pages/newslist";
import Search from "../pages/search";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsList />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;
