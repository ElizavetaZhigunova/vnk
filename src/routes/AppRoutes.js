import { useRoutes } from "react-router-dom";
import MainPage from "../components/Page/MainPage/MainPage";
import ReadyBusinessPage from "../components/Page/ReadyBusinessPage/ReadyBusinessPage";
import Franchise from "../components/Page/FranchisePage/FranchisePage";
import SpecialTechnicsPage from "../components/Page/SpecialTechnicsPage/SpecialTechnicsPage";

function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <div className="Main">
          <MainPage />
        </div>
      ),
    },
    {
      path: "/franchise",
      element: (
        <div className="Main">
          <Franchise />
        </div>
      ),
    },
    {
      path: "/special-technics",
      element: (
        <div className="Main">
          <SpecialTechnicsPage />
        </div>
      ),
    },
    {
      path: "/ready-business",
      element: (
        <div className="Main">
          <ReadyBusinessPage />
        </div>
      ),
    },
  ]);
  return routes;
}

export default AppRoutes;
