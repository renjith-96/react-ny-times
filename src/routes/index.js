import { Route, Routes } from "react-router-dom";
import NewsList from "../pages/newslist";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsList />} />
    </Routes>
  );
};

export default AppRoutes;
