import PoliceSlidebar from '../components/Police/PoliceSlideBar';
import PoliceDashboard from '../components/Police/PoliceDashboard';
import PoliceCards from '../components/Police/PoliceCards';
import PoliceReq from '../components/Police/PoliceReq';

const Police = () =>{

   return(
       <>
           <div className="flex h-screen  text-gray-900  ">
           <PoliceSlidebar />
           <div className="w-full">
           <PoliceReq />
             </div>
             

           </div> 
           
       </>
   );
};
export default Police;