import { Outlet, useLocation } from "react-router";
import Footer from "../../components/shared/footer";
import Navbar from "../../components/shared/navbar";

const MainLayout = () => {
  // Get the current path
  const location = useLocation();

  return (
    <>
      {/* Render Navbar only if the current path is not '/' */}
      {location.pathname !== "/" && <Navbar />}

      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

export default MainLayout;
