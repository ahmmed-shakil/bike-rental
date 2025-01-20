import HomePage from "./pages/home";
import MainLayout from "./layouts/main";
import { Route, Routes } from "react-router";
import AboutPage from "./pages/about";
import BikeDetails from "./pages/details";
import DashboardLayout from "./layouts/dashboard";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/bike-details/:id" element={<BikeDetails />} />
        </Route>
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
