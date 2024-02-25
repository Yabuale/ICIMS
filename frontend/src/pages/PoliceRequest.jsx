import PoliceSlideBar from "../components/Police/PoliceSlideBar";
import PoliceReq from "../components/Police/PoliceReq"

const PoliceRequest = () => {

   return(
       <>
       <div className="flex h-screen  text-gray-900  ">
       <PoliceSlideBar />
       
       <div className="w-full pt-10">
       <PoliceReq />
      
       </div>
       </div>
    
       </>
   );
};

export default PoliceRequest;