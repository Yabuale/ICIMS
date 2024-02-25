import NavBar from "../components/navBar";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";



export default function Root() {
    return (
      <>
      <NavBar />
      <Outlet />
      <Footer />
      </>
    );
  }