import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "../Common/Spinner";
import "./App.css";

// pages
import HomePage from "../Pages";
import NotFoundPage from "../Pages/Error/404";

const Page1 = lazy(() => import("../Pages/Page1"));
const Page2 = lazy(() => import("../Pages/Page2"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" component={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
