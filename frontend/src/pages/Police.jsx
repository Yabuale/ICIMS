import PoliceSlidebar from '../components/Police/PoliceSlideBar';
import PoliceDashboard from '../components/Police/PoliceDashboard';
import PoliceWanted from '../components/Police/PoliceWanted';
const Police = () =>{

   return(
       <>
           <div className="flex h-screen  text-gray-900  ">
           <PoliceSlidebar />
           <div className="w-full">
           <PoliceDashboard /> 
           <PoliceWanted />
             </div>
             

           </div> 
           
       </>
   );
};
export default Police;