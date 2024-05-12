import axios from 'axios'
import { useState,useEffect } from 'react';
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const EditBranch = () =>{
const navigate=useNavigate()
const {ID} =useParams()
 const [errStatus, setErrStatus]=useState('500')
 const[errMsg, setErrMsg]=useState({})
 const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
 const[isLoading,setLoading]=useState(false)
 const [branch_name, setBranch_name] = useState('')
 const [woreda, setWoreda] = useState('')
 const [zone, setZone]= useState('')
 const [region, setRegion]= useState('')
 const [phone_no, setPhone_no]= useState('')
 const [eamil_address, setEamil_address]= useState('')
 
 const [showconfModal, showconformModal] = useState(false);
 const [showerrModal,showerrorModal] = useState(false)
 const [showsccModal, showsuccessModal] = useState(false)
 
const url = `http://127.0.0.1:8000/systemadmin/branch/${ID}/`

useEffect(() => {
    // Check if wantedId is a valid number
    if (isNaN(ID)) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
      
      return;
    }
    const fetchWantedCriminal = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/systemadmin/branch/${ID}/`);
        if(response.status === 200){
         setBranch_name(response.data.branch_name)
         setWoreda(response.data.woreda)
         setZone(response.data.zone)
         setEamil_address(response.data.eamil_address)
         setPhone_no(response.data.phone_no)

        }
        else{
         navigate("/admin/branchs")
        }
      } catch (error) {
         console.log("Afasfasf")
         navigate("/admin/branchs")
      }
    };
 
    fetchWantedCriminal();
 
    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []);
 

 const handleSubmit = async (e) =>{
  setLoading(true)
  e.preventDefault();
   try{
  const resp =await axios.patch(url, {branch_name:branch_name,woreda:woreda,zone:zone,region:region,phone_no:phone_no,eamil_address:eamil_address});
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
  
  if (branch_name.length < 2) {
    isvalid=false;
   errorMessage.branch_name = 'Branch name must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(branch_name)) {
    isvalid=false;
   errorMessage.branch_name = 'Branch name can only contain letters.';
  }
  if (woreda.length < 3) {
    isvalid=false;
   errorMessage.woreda = 'Woreda must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(woreda)) {
    isvalid=false;
   errorMessage.woreda = 'Woreda can only contain letters.';
  }
  if (!region) {
    isvalid=false;
    errorMessage.region = 'Please select a region.';
   }
   if (zone.length < 3) {
    isvalid=false;
   errorMessage.zone = 'Zone must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(zone)) {
    isvalid=false;
   errorMessage.zone = 'Zone can only contain letters.';
  }
  if (!phone_no || !/^\d{10}$/.test(phone_no)) {
    isvalid=false;
    errorMessage.phone_no = 'Please enter your phone number.';
   } 
   if (!eamil_address || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eamil_address)) {
    isvalid=false;
   errorMessage.eamil_address = 'Please enter a valid email address.';
   }
  
  
   setErrMsg(errorMessage);
   return isvalid; // Returns true if there are no errors
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
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Edit Branch</h1>
      </div>
    </div>
     <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Branch Name</label>
      <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="branch name" value={branch_name} id="branch_name" onChange={(e)=> setBranch_name(e.target.value)} />
      {errMsg.branch_name && <p className="text-red-500 text-xs">{errMsg.branch_name}</p>}

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Woreda</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="woreda"  value={woreda} id="woreda" onChange={(e)=> setWoreda(e.target.value)}/>
        {errMsg.woreda && <p className="text-red-500 text-xs">{errMsg.woreda}</p>}
      </div>
      <div className="grid grid-cols-1">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">region</label>
      <select className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" value={region} id="region" onChange={(e)=> setRegion(e.target.value)}>
        
      <option> </option>
      <option value="afar">Afar</option>
      <option value="amhara">Amhara</option>
      <option value="benishangul-gumuz">Benishangul-Gumuz</option>
       <option value="gambella">Gambella</option>
      <option value="harari">Harari</option>
        <option value="oromia">Oromia</option>
       <option value="somali">Somali</option>
       <option value="southern-nations">Southern Nations, Nationalities, and Peoples' Region</option>
       <option value="tigray">Tigray</option>
        
      </select>
      {errMsg.region && <p className="text-red-500 text-xs">{errMsg.region}</p>}
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Zone</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="zone" value={zone} id="zone" onChange={(e)=> setZone(e.target.value)} />
        {errMsg.zone && <p className="text-red-500 text-xs">{errMsg.zone}</p>}
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">phone_no</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="phone_no" value={phone_no} id="phone_no" onChange={(e)=> setPhone_no(e.target.value)} />
        {errMsg.phone_no && <p className="text-red-500 text-xs">{errMsg.phone_no}</p>}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">email address</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="email" placeholder="example@gmail.com" value={eamil_address} id="eamil_address" onChange={(e)=> setEamil_address(e.target.value)} />
        {errMsg.eamil_address && <p className="text-red-500 text-xs">{errMsg.eamil_address}</p>}
      </div>
      
    </div>

   

    

    

    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
      <div>
      <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>Edit</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about to edit a branch please conform by clicking edit'} clickbutton={'Edit'} onClose={() => showconformModal(false)} />}
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

export default EditBranch;