import { Outlet } from "react-router-dom";
import AdminSlidebar from "../components/Admin/AdminSlidebar";

import AdminDashboard from "../pages/AdminDashboard";
const AdminRoot = ()=>{
    return(
<>
<div className="flex text-gray-900   ">
  <AdminSlidebar />
  <div className="lg:w-4/5 flex-col lg:m-auto sm:w-screen ">
  <Outlet />                                                                         
   </div>
  </div>
</>
);
}

export default AdminRoot;