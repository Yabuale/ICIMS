import { Outlet } from "react-router-dom";
import LocalAdminSlidebar from "../components/localAdmin/LocalAdminSliderbar";
const LocalRoot = () => {
return(<>

<div className="flex text-gray-900   ">
<LocalAdminSlidebar />
            


  <div className="lg:w-4/5 flex-col lg:m-auto sm:w-screen ">
  <Outlet />                                                                          
   </div>
  </div>
</>);

};

export default LocalRoot;