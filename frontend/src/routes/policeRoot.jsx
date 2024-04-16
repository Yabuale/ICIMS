import { Outlet } from "react-router-dom";
import PoliceRequest from "../pages/PoliceRequest";
import PoliceSlideBar from "../components/Police/PoliceSlideBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PoliceRoot = ()=>{
  const navigate = useNavigate()
  useEffect(() => {
    const storedData = localStorage.getItem('user');
    let user;
    if (storedData) {
      
      user= JSON.parse(storedData)
      if (user.user.role !== "police"  ){
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
  <PoliceSlideBar />
  <div className="lg:w-4/5 flex-col lg:m-auto sm:w-screen ">
  <Outlet />                                                                          
   </div>
  </div>
</>
);
}

export default PoliceRoot;