import HomePage from "./pages/home";
import MainLayout from "./layouts/main";
import { Route, Routes } from "react-router";
import AboutPage from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
