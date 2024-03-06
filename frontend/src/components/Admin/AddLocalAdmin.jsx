import axios from 'axios'
import { useState,useEffect } from 'react';
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';



const AddLocalAdmin = () =>{
 const [errStatus, setErrStatus]=useState('500')
 const[errMsg, setErrMsg]=useState('The server might be down, please try again later we will try to solve the problem as soon as possible')
 const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")

 const [first_name, setFirst_name] = useState('')
 const [last_name, setLast_name]= useState('')
 const [email, setEmail]= useState('')
 const password="dsfsd";
 const [id_no, setId_no]= useState('')
 const [phone_number, setPhone_number] = useState('')
 const role = 'local'
 const [branch, setBranch] = useState('')
 const is_active=true; 
 const username = email;
 const [branchNames, setBranchNames] = useState([]);
 const [showconfModal, showconformModal] = useState(false);
 const [showerrModal,showerrorModal] = useState(false)
 const [showsccModal, showsuccessModal] = useState(false)
 useEffect (() => {
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
}, []);
 
const url = 'http://127.0.0.1:8000/systemadmin/accounts/add/'
 const handleSubmit = async (e) =>{
  showconformModal(false)
  e.preventDefault();
  
   try{
  const resp =await axios.post(url, {username:username,first_name:first_name,last_name:last_name,email:email,password:password,id_no:id_no,phone_number:phone_number,role:role,branch:branch,is_active:is_active});
  if(resp.status === 201){
    setSuccMsg(resp.data.success)
    showsuccessModal(true)
  }
   } catch(error){
    console.log(error.response)
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
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Post Wanted</h1>
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
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">branch</label>
      <select className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" value={branch} id="gender" onChange={(e)=> setBranch(e.target.value)} placeholder="gender">
        
      <option value="">Select Branch</option>
        {branchNames.map(branch => (
          <option key={branch.value} value={branch.value}>
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

    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
      <div>
      <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>Create</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} message={'you are about to create a local admin for branch ' + branch +' please click Add to conform'} clickbutton={'Add'} onClose={() => showconformModal(false)} />}
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

export default AddLocalAdmin;