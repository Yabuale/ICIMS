import PoliceSlidebar from '../components/Police/PoliceSlideBar';
import PoliceDashboard from '../components/Police/PoliceDashboard';
import PoliceCards from '../components/Police/PoliceCards';
const Police = () =>{

   return(
       <>
           <div className="flex h-screen  text-gray-900  ">
           <PoliceSlidebar />
           <div className="w-full">
           <PoliceDashboard /> 
           <PoliceCards />
             </div>
             

           </div> 
           
       </>
   );
};
export default Police;