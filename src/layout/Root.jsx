import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="px-5 lg:max-w-4xl xl:max-w-6xl mx-auto min-h-[calc(100vh-117px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
