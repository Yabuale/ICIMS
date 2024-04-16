import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationSliderbar from "../components/clerk/RegistrationSliderbar";
const ClerkRoot = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const storedData = localStorage.getItem('user');
    let user;
    if (storedData) {
      
      user= JSON.parse(storedData)
      if (user.user.role !== "clerk"  ){
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
<RegistrationSliderbar />
            
  <div className="lg:w-4/5 flex-col lg:m-auto sm:w-screen ">
  <Outlet />                                                                          
   </div>
  </div>
</>);

};

export default ClerkRoot;