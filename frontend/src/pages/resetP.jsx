import axios from 'axios'
import { useState,useEffect } from 'react';
import ConfModal from '../components/conformModal';
import ErrorModal from '../components/errorModal';
import SuccessModal from '../components/successModal';
import { useNavigate } from 'react-router-dom';



const Changep = () =>{

 const [errStatus, setErrStatus]=useState('500')
 const[errMsg, setErrMsg]=useState('')
 const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
 const[isLoading,setLoading]=useState(false)
 const [old, setOld] = useState('');
 const [New , setNew]= useState('');
 const [conf, setConf]= useState('');

 const[errors, setErrors]=useState({})
 const [showconfModal, showconformModal] = useState(false);
 const [showerrModal,showerrorModal] = useState(false)
 const [showsccModal, showsuccessModal] = useState(false)
 const [token,setToken]= useState("")
 const navigate=useNavigate();
const url = 'http://127.0.0.1:8000/accounts/resetpassword/'
useEffect(() => {
  
  const fetchLocalaccounts = async () => {
    try {

    const storedData = localStorage.getItem('user');
    let user;
    if (storedData) {
      user= JSON.parse(storedData)
     setToken(user.token)
    
  }
    } catch (error) {
     
    }
  };

  fetchLocalaccounts();
  
 
}, []);
 const handleSubmit = async (e) =>{
  
  setLoading(true)
  e.preventDefault();
   try{
  const resp =await axios.post(url, {old,New,conf},
    {
      headers: {
           Authorization: 'Token '+token,
          'Content-Type': 'multipart/form-data'
      }
   });
  if(resp.status === 200){
    setSuccMsg(resp.data.sucess)
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
    setErrMsg(error.response.data.sucess);
    showerrorModal(true)
     }
    
  }
 }
 const validate = () => {
  let isValid = true;
  let errorMessage = {};

  if (!conf) {
    isValid = false;
    errorMessage.conf = 'Please enter confirmation password.';
  }

  if (!old) {
    isValid = false;
    errorMessage.old = 'Please enter a old password.';
  } else if (old.length < 8) {
    isValid = false;
    errorMessage.old = 'Old password must be at least 8 characters long.';
  }



  if (!New) {
    isValid = false;
    errorMessage.New = 'Please enter a New password.';
  } else if (New.length < 8) {
    isValid = false;
    errorMessage.New = 'New password must be at least 8 characters long.';
  }

  if (New !== conf) {
    isValid = false;
    errorMessage.conf = 'New password and confirmation password do not match.';
  }

  setErrors(errorMessage);

  // Returns true if there are no errors
  return isValid;
};
 const handleOpenModal = () => {
  if (validate()){
  showconformModal(true); // Open the modal on button click
}};

return( 
 <>
 
 <br/>
 <br/>
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
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Change Password</h1>
      </div>
    </div>
     <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Old password</label>
      <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="password" placeholder="enter your old password" value={old} id="branch_name" onChange={(e)=> setOld(e.target.value)} />
      {errors.old && <p className="text-red-500 text-xs">{errors.old}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">New password</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="password" placeholder="new password" value={New} id="zone" onChange={(e)=> setNew(e.target.value)} />
        {errors.New && <p className="text-red-500 text-xs">{errors.New}</p>}
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Conf password</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="password" placeholder="conform password" value={conf} id="phone_no" onChange={(e)=> setConf(e.target.value)} />
        {errors.conf && <p className="text-red-500 text-xs">{errors.conf}</p>}
      </div>
    </div>
   

    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'  type='button' onClick={() => {
                navigate(-1);
              }}>Cancel</button>
      <div>
      <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>Change</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about to change your password'} clickbutton={'Change'} onClose={() => showconformModal(false)} />}
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

export default Changep;