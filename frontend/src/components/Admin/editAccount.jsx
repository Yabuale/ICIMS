import axios from 'axios'
import { useState,useEffect } from 'react';
import ConfModal from '../conformModal';
import { useParams,useNavigate } from 'react-router-dom';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';



const EditLocalAccount = () =>{
const { accountID } = useParams();
const navigate = useNavigate();
 const [errStatus, setErrStatus]=useState('500')
 const[errMsg, setErrMsg]=useState('The server might be down, please try again later we will try to solve the problem as soon as possible')
 const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
const[isLoading,setLoading]=useState(false)
 const [first_name, setFirst_name] = useState('')
 const [last_name, setLast_name]= useState('')
 const [email, setEmail]= useState('')
 const [id_no, setId_no]= useState('')
 const [phone_number, setPhone_number] = useState('')
 const [branch,setBranch] = useState('')
 const[is_active,setActive]=useState(false)
 const [showconfModal, showconformModal] = useState(false);
 const [showerrModal,showerrorModal] = useState(false)
 const [showsccModal, showsuccessModal] = useState(false)
 const [branchNames, setBranchNames] = useState([]);
 

 useEffect(() => {
    // Check if wantedId is a valid number
    if (isNaN(accountID)) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
      
      return;
    }

    const fetchBranchNames = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/systemadmin/branch/names/');
          setBranchNames(response.data.map(branch => ({
            value: branch.branch_name,
            label: branch.branch_name,
          })));
        } catch (error) {
          console.error('Error fetching branch names:', error);
          setError(error); 
        } finally {
          
        }
      };
    
      fetchBranchNames();
 
    const fetchWantedCriminal = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/systemadmin/accounts/${accountID}/`);
        if(response.status === 200){
        //setWantedCriminal(response.data);
        setFirst_name(response.data.first_name)
        setLast_name(response.data.last_name)
        setPhone_number(response.data.phone_number)
        setBranch(response.data.brach)
        setEmail(response.data.email)
        setId_no(response.data.id_no)
       // setActive(response.data.is_active)
        }
        else{
         navigate("/admin/localadmins")
        }
      } catch (error) {
         console.log("Afasfasf")
         navigate("/admin/localadmins")
      }
    };
 
    fetchWantedCriminal();
 
    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []);


const url = `http://127.0.0.1:8000/systemadmin/accounts/${accountID}/`
 const handleSubmit = async (e) =>{
  setLoading(true)
  e.preventDefault();
   try{
  const resp =await axios.patch(url, {first_name,last_name,email,id_no,phone_number,branch,is_active});
  console.log(is_active)
  if(resp.status === 200){
    setSuccMsg(resp.data.success)
    setLoading(false)
    showconformModal(false)
    showsuccessModal(true)
  }
   } catch(error){
    setLoading(false)
    showconformModal(false)
    showerrorModal(true)
   if(error.response.status === 400 ){
    setErrStatus(error.response.status);
    setErrMsg(error.response.data.success);
   }
  }
 } 
 const handleOpenModal = () => {
  showconformModal(true); // Open the modal on button click
};

return( 
 <>
 
 <br/>

  <div className="grid  mx-24 lg:mx-auto   bg-sky-50   rounded-lg shadow-xl w-4/5  md:w-9/12 lg:w-1/2">
    <div className="flex justify-center py-4">
      <div className="flex bg-gray-50 rounded-full md:p-4 p-2 border-2 border-sky-800">
      <svg
              className="w-12 text-sky-900"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="flex">
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Edit Local account</h1>
      </div>
    </div>
     <form onSubmit={handleSubmit}>
    
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First name</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name"  value={first_name} id="firstname" onChange={(e)=> setFirst_name(e.target.value)}/>
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last name</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="last name"  value={last_name} id="lastname" onChange={(e)=> setLast_name(e.target.value)}/>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Phone number</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name"  value={phone_number} id="firstname" onChange={(e)=> setPhone_number(e.target.value)}/>
      </div>
      <div className="grid grid-cols-1">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Branch</label>
      <select className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" value={branch} id="gender" onChange={(e)=> setBranch(e.target.value)} placeholder="branch">
        
      <option value="">Select Branch</option>
      {branchNames.map(branch => (
          <option key={branch.id} value={branch.value}>
            {branch.label}
          </option>
        ))}
        
      </select>
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">email</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="email" placeholder="example@gmail.com" value={email} id="email" onChange={(e)=> setEmail(e.target.value)} />
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Id No.</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="Id_no" value={id_no} id="nationality" onChange={(e)=> setId_no(e.target.value)} />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Activate.</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="checkbox" placeholder="active" checked={is_active} id="active" onChange={(e)=> setActive(e.target.value)} />
      </div>

      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"></label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent opacity-0" type="text" placeholder="hidden"   />
      </div>
    </div>

    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
    <button 
      type="button"
      onClick={() => {
        navigate(-1);
        }}
         className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
      <div>
      <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>Update</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about to update a local account  please click update to conform'} clickbutton={'Update'} onClose={() => showconformModal(false)} />}
      {showerrModal && <ErrorModal showerrModal={showerrModal} errMsg={errMsg} errStatus={errStatus} onClose={() => showerrorModal(false)} />}
      {showsccModal && <SuccessModal showsccModal={showsccModal} succMsg={succMsg} onClose={() => showsuccessModal(false)} />}
      </div>
    </div>
    </form>
  </div>

  <br/>
  

 </>

);

}

export default EditLocalAccount;