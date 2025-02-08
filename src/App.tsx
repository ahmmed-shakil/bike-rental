import HomePage from "./pages/home";
import MainLayout from "./layouts/main";
import { Route, Routes } from "react-router";
import AboutPage from "./pages/about";
import BikeDetails from "./pages/details";
import DashboardLayout from "./layouts/dashboard";
import ProfilePage from "./pages/profile";
// import MyRentals from "./pages/my-rentals";
import Dashboard from "./pages/dashboard/dashboard";
import BookingsPage from "./pages/dashboard/bookings";
import ReviewsListPage from "./pages/dashboard/reviews";
import LedgerPage from "./pages/dashboard/ledger";
import BikesPage from "./pages/bikes";
import CheckoutPage from "./pages/checkout";
import PaymentSuccess from "./pages/payment/payment-success";
import CouponWheel from "./components/coupon-wheel";
import { useEffect, useState } from "react";
import { Modal } from "antd";

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="bikes" element={<BikesPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="/bike-details/:id" element={<BikeDetails />} />
        </Route>
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          {/* <Route index element={<MyRentals />} /> */}
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="manage-bookings" element={<BookingsPage />} />
          <Route path="manage-reviews" element={<ReviewsListPage />} />
          <Route path="ledger" element={<LedgerPage />} />
        </Route>
        <Route path="success" element={<PaymentSuccess />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Modal
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={400}
        centered
        title="Spin the wheel to earn exciting discount!"
      >
        <CouponWheel />
      </Modal>
    </>
  );
}

export default App;
