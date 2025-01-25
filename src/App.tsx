import HomePage from "./pages/home";
import MainLayout from "./layouts/main";
import { Route, Routes } from "react-router";
import AboutPage from "./pages/about";
import BikeDetails from "./pages/details";
import DashboardLayout from "./layouts/dashboard";
import ProfilePage from "./pages/profile";
// import MyRentals from "./pages/my-rentals";
import Dashboard from "./pages/admin/dashboard";
import BookingsPage from "./pages/admin/bookings";
import BrandsPage from "./pages/admin/brands";
import BikesPage from "./pages/admin/bikes";
import ReviewsListPage from "./pages/admin/reviews";
import LedgerPage from "./pages/admin/ledger";

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
          {/* <Route index element={<MyRentals />} /> */}
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="manage-bookings" element={<BookingsPage />} />
          <Route path="manage-brands" element={<BrandsPage />} />
          <Route path="manage-bikes" element={<BikesPage />} />
          <Route path="manage-reviews" element={<ReviewsListPage />} />
          <Route path="ledger" element={<LedgerPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
