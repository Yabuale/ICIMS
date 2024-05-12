import axios from 'axios'
import { useState,useEffect } from 'react';
import ConfModal from '../conformModal';
import { useParams,useNavigate } from 'react-router-dom';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';



const EditAccount = () =>{
const { accountID } = useParams();
const navigate = useNavigate();
 const [errStatus, setErrStatus]=useState('500')
 const[errMsg, setErrMsg]=useState({})
 const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
const[isLoading,setLoading]=useState(false)
 const [first_name, setFirst_name] = useState('')
 const [last_name, setLast_name]= useState('')
 const [email, setEmail]= useState('')
 const [id_no, setId_no]= useState('')
 const [phone_number, setPhone_number] = useState('')
 const [role,setRole] = useState('')
 const [showconfModal, showconformModal] = useState(false);
 const [showerrModal,showerrorModal] = useState(false)
 const [showsccModal, showsuccessModal] = useState(false)
 const[is_active,setActive]=useState(false)

 

 useEffect(() => {
    // Check if wantedId is a valid number
    if (isNaN(accountID)) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
      
      return;
    }
 
    const fetchWantedCriminal = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/localadmin/accounts/${accountID}/`);
        if(response.status === 200){
        //setWantedCriminal(response.data);
        setFirst_name(response.data.first_name)
        setLast_name(response.data.last_name)
        setPhone_number(response.data.phone_number)
        setRole(response.data.role)
        setEmail(response.data.email)
        setId_no(response.data.id_no)
        setActive(response.is_active)
        }
        else{
         navigate("/localadmin/accounts")
        }
      } catch (error) {
         console.log("Afasfasf")
         navigate("/localadmin/accounts")
      }
    };
 
    fetchWantedCriminal();
 
    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []);


const url = `http://127.0.0.1:8000/localadmin/accounts/${accountID}/`
 const handleSubmit = async (e) =>{
  setLoading(true)
  e.preventDefault();
   try{
  const resp =await axios.patch(url, {first_name,last_name,email,id_no,phone_number,role,is_active });
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
 const validate = () => {
  let isvalid=true;
  let errorMessage = {};
  
  // Validate first name - minimum 2 characters and only letters
  if (first_name.length < 2) {
    isvalid=false;
   errorMessage.first_name = 'First name must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(first_name)) {
    isvalid=false;
   errorMessage = 'First name can only contain letters.';
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
  
   setErrMsg(errorMessage);
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
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Edit Local account</h1>
      </div>
    </div>
     <form onSubmit={handleSubmit}>
    
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First name</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name"  value={first_name} id="firstname" onChange={(e)=> setFirst_name(e.target.value)}/>
        {errMsg.first_name && <p className="text-red-500 text-xs">{errMsg.first_name}</p>}
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last name</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="last name"  value={last_name} id="lastname" onChange={(e)=> setLast_name(e.target.value)}/>
        {errMsg.last_name && <p className="text-red-500 text-xs">{errMsg.last_name}</p>}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Phone number</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name"  value={phone_number} id="firstname" onChange={(e)=> setPhone_number(e.target.value)}/>
        {errMsg.phone_number && <p className="text-red-500 text-xs">{errMsg.phone_number}</p>}
      </div>
      <div className="grid grid-cols-1">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Role</label>
      <select className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" value={role} id="gender" onChange={(e)=> setRole(e.target.value)} placeholder="role">
        
      <option value="">Select role</option>
      <option value="police">Police</option>
      <option value="clerk">Clerk</option>
        
      </select>
      {errMsg.role && <p className="text-red-500 text-xs">{errMsg.role}</p>}
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">email</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="email" placeholder="example@gmail.com" value={email} id="email" onChange={(e)=> setEmail(e.target.value)} />
        {errMsg.email && <p className="text-red-500 text-xs">{errMsg.email}</p>}
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Id No.</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="Id_no" value={id_no} id="nationality" onChange={(e)=> setId_no(e.target.value)} />
        {errMsg.id_no && <p className="text-red-500 text-xs">{errMsg.id_no}</p>}
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

export default EditAccount;