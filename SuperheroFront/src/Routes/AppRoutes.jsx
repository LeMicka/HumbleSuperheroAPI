import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "../pages/FrontPage/FrontPage";



export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
