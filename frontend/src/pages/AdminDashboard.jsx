import AdminSlidebar from '../components/AdminSlidebar';
import DashboardNum from '../components/DashboardNum';
import AdminCards from '../components/AdminCards';


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