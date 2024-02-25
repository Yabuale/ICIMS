import { Outlet } from "react-router-dom";
import RegistrationSliderbar from "../components/clerk/RegistrationSliderbar";
const ClerkRoot = () => {
return(<>

<div className="flex text-gray-900   ">
<RegistrationSliderbar />
            


  <div className="lg:w-4/5 flex-col lg:m-auto sm:w-screen ">
  <Outlet />                                                                          
   </div>
  </div>
</>);

};

export default ClerkRoot;