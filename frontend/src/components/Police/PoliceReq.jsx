import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';

const PostWanted = () =>{
 const [errStatus, setErrStatus]=useState('500')
 const[errMsg, setErrMsg]=useState('The server might be down, please try again later we will try to solve the problem as soon as possible')
 const [photo, setPhoto] = useState(null);
 const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
 const[isLoading,setLoading]=useState(false)
 const [name, setName] = useState(null)
 const [fname, setFname] = useState(null)
 const [lname, setLname] = useState(null)
 const [idno, setIdno] = useState(null)
 const [message, setMessage] = useState('')

 const[errors, setErrors]=useState({})
 const [showconfModal, showconformModal] = useState(false);
 const [showerrModal,showerrorModal] = useState(false)
 const [showsccModal, showsuccessModal] = useState(false)
 const[token,setToken]=useState(null)
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

const url = 'http://127.0.0.1:8000/police/sendrequest'
 const handleSubmit = async (e) =>{
  
  e.preventDefault();
  setLoading(true);
   try{
    

    console.log(name)
    console.log(fname)
    console.log(lname)
    console.log(idno)
    console.log(message)
  const resp =await axios.post(url, {message:message,name:name,fname:fname,lname:lname,id_no:idno,photo:photo}, {
    headers: {
         Authorization: `Token ${token}`,
        'Content-Type': 'multipart/form-data'

    }
});
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
  if (name && name.length < 2) {
    isvalid=false;
   errorMessage.name = 'name must be at least 3 characters long.';
  } else if (name && !/^[A-Za-z\s]+$/.test(name)) {
    isvalid=false;
   errorMessage.name = 'name can only contain letters and spaces.';
  }

  if (name && fname.length < 3) {
    isvalid=false;
   errorMessage.fname = 'First name must be at least 3 characters long.';
  } else if (name && !/^[A-Za-z]+$/.test(fname)) {
    isvalid=false;
   errorMessage.fname = 'First name can only contain letters.';
  }
  if (name && lname.length < 3) {
    isvalid=false;
   errorMessage.lname = 'Last name must be at least 3 characters long.';
  } else if (name && !/^[A-Za-z]+$/.test(lname)) {
    isvalid=false;
   errorMessage.lname = 'Last name can only contain letters.';
  }

  if ( idno && idno.length < 3) {
    isvalid=false;
   errorMessage.idno = 'id  must be at least 3 characters long.';
  } else if (idno &&  !/^[a-zA-Z0-9]+$/.test(idno)) {
    isvalid=false;
   errorMessage.idno = 'Last name can only contain letters and number.';
  }
  
   if (message.length < 10) {
    isvalid=false;
   errorMessage.message = 'name must be at least 10 characters long.';
  } else if (!/^[A-Za-z\s]+$/.test(message)) {
    isvalid=false;
   errorMessage.message = 'message can only contain letters and numbers.';
  }
  
  if(!name && !photo && !idno){
    isvalid = false
    errorMessage.message = "enter name or id or photos or all"
  }
   setErrors(errorMessage);
   return isvalid; // Returns true if there are no errors
  };
  
 const handleOpenModal = () => {
  if (validate()){
    if(!name){
      setName("unknown")
      setFname("unknown")
      setLname("unknown")
    }
    if(!idno){
      setIdno("unknown")
    }
    if(!photo){
      setPhoto("Fdsfdsffsd")
    }
    showconformModal(true);
  }
  
};
const navigate = useNavigate();
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

    
     <form onSubmit={handleSubmit}>
     <div class="flex justify-center">
         <div class="flex">
           <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Send Request</h1>
         </div>
       </div>
   
       <div class="grid grid-cols-1 mt-5 mx-7">
         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Name</label>
         <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name"  value={name} id="name" onChange={(e)=> setName(e.target.value)}/>
         {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
       </div>
   
       <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
         <div class="grid grid-cols-1">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Middle name</label>
           <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="middle name" value={fname} id="fname" onChange={(e)=> setFname(e.target.value)} />
           {errors.fname && <p className="text-red-500 text-xs">{errors.fname}</p>}
         </div>
         <div class="grid grid-cols-1">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
           <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="last name" value={lname} id="message" onChange={(e)=> setLname(e.target.value)} />
           {errors.lname && <p className="text-red-500 text-xs">{errors.lname}</p>}
         </div>
       </div>
   
       <div class="grid grid-cols-1 mt-5 mx-7">
         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">ID NUMBER</label>
         <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="enter id" value={idno} id="message" onChange={(e)=> setIdno(e.target.value)}/>
         {errors.idno && <p className="text-red-500 text-xs">{errors.idno}</p>}
       </div>
    <div class="grid grid-cols-1 mt-5 mx-7">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Photo</label>
             <div className='flex items-center justify-center w-full'>
                 <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-sky-300 group'>
                     <div className='flex flex-col items-center justify-center pt-7'>
                       <svg className="w-10 h-10 text-sky-400 group-hover:text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                       <p className='lowercase text-sm text-gray-400 group-hover:text-sky-600 pt-1 tracking-wider'>Select a photo</p>
                     </div>
                   <input type="file" accept='image/*' className="hidden" onChange={(e) => setPhoto(e.target.files[0])} />
                   {errors.photo && <p className="text-red-500 text-xs">{errors.photo}</p>}
                 </label>
             </div>
         </div>
         <div class="grid grid-cols-1 mt-5 mx-7">
         <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">MESSAGE</label>
      <textarea  className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="message" rows="5" value={message} id="message" onChange={(e)=> setMessage(e.target.value)} />
      {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
       </div>

    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 ' type="button"
            onClick={() => {
                navigate(-1);
              }}>Cancel</button>
      <div>
      <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>send</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about to send a request please conform'} clickbutton={'send'} onClose={() => showconformModal(false)} />}
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

export default PostWanted;