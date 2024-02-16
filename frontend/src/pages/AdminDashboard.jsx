import AdminSlidebar from '../components/Admin/AdminSlidebar'
import DashboardNum from '../components/Admin/DashboardNum';
import AdminCards from '../components/Admin/AdminCards';


const AdminDashboard = () =>{

    return(
        <>
            
           

            <div className="flex h-screen  text-gray-900  ">
  
            
            <AdminSlidebar />
  
  
            <div className="w-full">
                <DashboardNum />
                <AdminCards />
                
  





             </div>
  
            </div>
            
        </>
    );
};
export default AdminDashboard;