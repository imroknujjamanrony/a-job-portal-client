import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* nav */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* main */}
      <main>
        <Outlet></Outlet>
      </main>
      {/* footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
