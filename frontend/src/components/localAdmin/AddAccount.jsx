import axios from 'axios'
import { useState,useEffect } from 'react';
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';



const Addaccount = () =>{
 const [errStatus, setErrStatus]=useState('500')
 const[errMsg, setErrMsg]=useState('The server might be down, please try again later we will try to solve the problem as soon as possible')
 const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
const[isLoading,setLoading]=useState(false)
 const [first_name, setFirst_name] = useState('')
 const [last_name, setLast_name]= useState('')
 const [email, setEmail]= useState('')
 const password="dsfsd";
 const [id_no, setId_no]= useState('')
 const [phone_number, setPhone_number] = useState('')
 const [role,setRole] = useState('')
 const [branch, setBranch] = useState('')
 const is_active=true; 
 const username = email;

 const[errors, setErrors]=useState({})
 const [showconfModal, showconformModal] = useState(false);
 const [showerrModal,showerrorModal] = useState(false)
 const [showsccModal, showsuccessModal] = useState(false)
 

 
const url = 'http://127.0.0.1:8000/localadmin/accounts/add/'
 const handleSubmit = async (e) =>{
  setLoading(true)
  e.preventDefault();
   try{
  const resp =await axios.post(url, {username:username,first_name:first_name,last_name:last_name,email:email,password:password,id_no:id_no,phone_number:phone_number,role:role,is_active:is_active});
  if(resp.status === 201 ){
    setSuccMsg(resp.data.success)
    setLoading(false)
    showconformModal(false)
    showsuccessModal(true)
  }
   } catch(error){
    console.log(error.response)
    setLoading(false)
    showconformModal(false)
    showerrorModal(true)
   if(error.response.status === 400 ){
    setErrStatus(error.response.status);
    setErrMsg("Bad request, recheck your inputs and try again");
     }
    
  }
 } 
 const validate = () => {
  let isvalid=true;
  let errorMessage = {};
  
  // Validate first name - minimum 2 characters and only letters
  if (first_name.length < 3) {
    isvalid=false;
   errorMessage.first_name = 'First name must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(first_name)) {
    isvalid=false;
   errorMessage.first_name = 'First name can only contain letters.';
  }
  // Validate last name - minimum 3 characters and only letters
  if (last_name.length < 3) {
    isvalid=false;
   errorMessage.last_name = 'Last name must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(last_name)) {
    isvalid=false;
   errorMessage.last_name = 'Last name can only contain letters.';
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    isvalid=false;
   errorMessage.email = 'Please enter a valid email address.';
   } if (!id_no || !/^[a-zA-Z0-9]+$/.test(id_no)) {
    isvalid=false;
    errorMessage.id_no = 'Please enter your ID number.';
   } if (!phone_number || !/^\d{10}$/.test(phone_number)) {
    isvalid=false;
    errorMessage.phone_number = 'Please enter your phone number.';
   } if (!role) {
    isvalid=false;
    errorMessage.role = 'Please select a role.';
   }
  
   setErrors(errorMessage);
   return isvalid; // Returns true if there are no errors
  };
  
 const handleOpenModal = () => {
  if (validate()){
    showconformModal(true);
  }
  
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
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Add Local Account</h1>
      </div>
    </div>
     <form onSubmit={handleSubmit}>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First name</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name"  value={first_name} id="firstname" onChange={(e)=> setFirst_name(e.target.value)}/>
        {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last name</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="last name"  value={last_name} id="lastname" onChange={(e)=> setLast_name(e.target.value)}/>
        {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Phone number</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name"  value={phone_number} id="firstname" onChange={(e)=> setPhone_number(e.target.value)}/>
        {errors.phone_number && <p className="text-red-500 text-xs">{errors.phone_number}</p>}
      </div>
      <div className="grid grid-cols-1">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Role</label>
      <select className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" value={role} id="gender" onChange={(e)=> setRole(e.target.value)} placeholder="role">
        
      <option value="">Select role</option>
      <option value="police">Police</option>
      <option value="clerk">Clerk</option>
        
      </select>
      {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">email</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="email" placeholder="example@gmail.com" value={email} id="email" onChange={(e)=> setEmail(e.target.value)} />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Id No.</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="Id_no" value={id_no} id="nationality" onChange={(e)=> setId_no(e.target.value)} />
        {errors.id_no && <p className="text-red-500 text-xs">{errors.id_no}</p>}
      </div>
    </div>

    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
      <div>
      <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>Create</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about to create a local account  please click create to conform'} clickbutton={'Create'} onClose={() => showconformModal(false)} />}
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

export default Addaccount;