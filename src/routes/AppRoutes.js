import { useRoutes } from "react-router-dom";
import MainPage from "../components/Page/MainPage/MainPage";
import ReadyBusinessPage from "../components/Page/ReadyBusinessPage/ReadyBusinessPage";
import Franchise from "../components/Page/FranchisePage/FranchisePage";
import SpecialTechnicsPage from "../components/Page/SpecialTechnicsPage/SpecialTechnicsPage";
import ReadyBusinessCategoryPage from "../components/Page/ReadyBusinessCategoryPage/ReadyBusinessCategoryPage";

function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: (
            <div className="Main">
              <MainPage />
            </div>
          ),
        },
        {
          path: "special-technics",
          element: (
            <div className="Main">
              <SpecialTechnicsPage />
            </div>
          ),
        },
        {
          path: "ready-business-main",
          children: [
            {
              index: true,
              element: (
                <div className="Main">
                  <ReadyBusinessPage />
                </div>
              ),
            },
            {
              path: "ready-business",
              element: (
                <div className="Main">
                  <ReadyBusinessCategoryPage />
                </div>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "/franchise",
      element: (
        <div className="Main">
          <Franchise />
        </div>
      ),
    },
    // {
    //   path: "/category",
    //   children: [
    //     {
    //       index: true,
    //       element: <></>,
    //     },
    //     {
    //       path: "special-technics",
    //       element: (
    //         <div className="Main">
    //           <SpecialTechnicsPage />
    //         </div>
    //       ),
    //     },
    //     {
    //       path: "ready-business-main",
    //       children: [
    //         {
    //           index: true,
    //           element: (
    //             <div className="Main">
    //               <ReadyBusinessPage />
    //             </div>
    //           ),
    //         },
    //         {
    //           path: "ready-business",
    //           element: (
    //             <div className="Main">
    //               <ReadyBusinessCategoryPage />
    //             </div>
    //           ),
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]);
  return routes;
}

export default AppRoutes;
