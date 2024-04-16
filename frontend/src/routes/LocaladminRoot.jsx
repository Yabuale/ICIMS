import { Outlet } from "react-router-dom";
import LocalAdminSlidebar from "../components/localAdmin/LocalAdminSliderbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const LocalRoot = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const storedData = localStorage.getItem('user');
    let user;
    if (storedData) {
      
      user= JSON.parse(storedData)
      if (user.user.role !== "local"  ){
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
<LocalAdminSlidebar />
            


  <div className="lg:w-4/5 flex-col lg:m-auto sm:w-screen ">
  <Outlet />                                                                          
   </div>
  </div>
</>);

};

export default LocalRoot;