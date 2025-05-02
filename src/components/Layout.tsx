import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark text-dark dark:text-white">
      <Header />
      <main className="flex-grow bg-gray-100 dark:bg-hero">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
