import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayaut from "./pages/SharedLayaut";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayaut />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
