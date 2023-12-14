import { EmptyPage } from "pages/EmptyPage/EmptyPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";
/* import { PageLoader } from "shared/ui/PageLoader/PageLoader"; */

const AppRouter = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
        <Route
          key="/*"
          path="/*"
          element={<div className="page-wrapper">{<EmptyPage />}</div>}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
