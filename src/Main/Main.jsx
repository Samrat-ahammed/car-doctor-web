import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavbAr from "../Shared/NavbAr";

const Main = () => {
  return (
    <div>
      <NavbAr></NavbAr>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
