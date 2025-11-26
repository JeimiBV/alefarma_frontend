import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white p-6 gap-4">
      <div className="flex-none bg-gray-100 rounded-lg">
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
