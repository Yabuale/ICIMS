import { Outlet } from "react-router-dom";
import AdminSlidebar from "../components/Admin/AdminSlidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import AdminDashboard from "../pages/AdminDashboard";
const AdminRoot = ()=>{
  const navigate = useNavigate()
  useEffect(() => {
    const storedData = localStorage.getItem('user');
    let user;
    if (storedData) {
      
      user= JSON.parse(storedData)
      if (user.user.role !== "admin" && user.user.is_active ){
        navigate("/login")
      }
    }
    else{
      navigate("/login")
    }
  }, []);
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