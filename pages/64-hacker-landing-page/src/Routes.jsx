import React from "react";
import { HashRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import MatrixHackerDashboard from './pages/matrix-hacker-dashboard';

const Routes = () => {
  return (
    <HashRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<MatrixHackerDashboard />} />
        <Route path="/matrix-hacker-dashboard" element={<MatrixHackerDashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </HashRouter>
  );
};

export default Routes;
