import { Outlet } from "react-router-dom";
import PoliceRequest from "../pages/PoliceRequest";
import PoliceSlideBar from "../components/Police/PoliceSlideBar";

const PoliceRoot = ()=>{
    return(
<>
<div className="flex text-gray-900   ">
  <PoliceSlideBar />
  <div className="lg:w-4/5 flex-col lg:m-auto sm:w-screen ">
  <Outlet />                                                                          
   </div>
  </div>
</>
);
}

export default PoliceRoot;