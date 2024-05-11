import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';
const ClerkAdd = () =>{
  const navigate = useNavigate()
  const [errStatus, setErrStatus]=useState('500')
  const[errMsg, setErrMsg]=useState('The server might be down, please try again later we will try to solve the problem as soon as possible')
  const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
  const[isLoading,setLoading]=useState(false)

  const [SSN, setSsn] = useState('');
  const [first_name, setFirstName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [last_name, setLastName] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  let [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [eye_color, setEyeColor] = useState('');
  const [hair_color, setHairColor] = useState('');
  const [tattoos, setTattoos] = useState('none');
  const [scars, setScars] = useState('none');
  const [identifying_features, setIdentifyingFeatures] = useState('');
  const [address, setAddress] = useState('');
  const [contact_information, setContactInformation] = useState('');
  const [gang_affiliations, setGangAffiliations] = useState('none');
  const [case_history, setCaseHistory] = useState('fj');
  const [photo, setPhoto] = useState(null); // For file uploads, null initially
  const [document, setDocument] = useState(null); 



  const [showconfModal, showconformModal] = useState(false);
  const [showerrModal,showerrorModal] = useState(false)
  const [showsccModal, showsuccessModal] = useState(false)

  const url = 'http://127.0.0.1:8000/criminals/addcriminal'
 const handleSubmit = async (e) =>{
  
  e.preventDefault();
  setLoading(true)
  
    
   try{
    if (gender === "Male"){
      gender = 'M';
    }
    else if(gender === "Female"){
      gender = 'F';
    }

    
    
  const resp =await axios.post(url, {
    SSN,
    first_name,
    middle_name,
    last_name,
    date_of_birth,
    gender,
    nationality,
    height,
    weight,
    eye_color,
    hair_color,
    tattoos,
    scars,
    identifying_features,
    address,
    contact_information,
    gang_affiliations,
    case_history,
    photo,
    document}, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
  if(resp.status === 201){
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
     
       <div className="grid w-full mx-auto bg-sky-50   rounded-lg shadow-xl  md:w-9/12 lg:w-1/2">
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
             <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Add Criminal</h1>
           </div>
         </div>
         <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
         <div className="grid grid-cols-1">
           <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">SSN</label>
           <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name" value={SSN} id="name" onChange={(e)=> setSsn(e.target.value)} />
         </div>
         <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">first name</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="first name"  value={first_name} id="name" onChange={(e)=> setFirstName(e.target.value)} />
           </div>
         </div>
     
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
         <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Middle name</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="middle name"  value={middle_name} id="middlename" onChange={(e)=> setMiddleName(e.target.value)} />
           </div>
           
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">last name</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="last name" value={last_name} id="name" onChange={(e)=> setLastName(e.target.value)} />
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">date of birth</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="date"  value={date_of_birth} id="name" onChange={(e)=> setDateOfBirth(e.target.value)} />
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nationality</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="nationality" value={nationality} id="name" onChange={(e)=> setNationality(e.target.value)}/>
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Height</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="number" placeholder="height" value={height} id="name" onChange={(e)=> setHeight(e.target.value)} />
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">weight</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="number" placeholder="weight" value={weight} id="name" onChange={(e)=> setWeight(e.target.value)} />
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">eye color</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="eye color" value={eye_color} id="name" onChange={(e)=> setEyeColor(e.target.value)} />
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">hair color</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="hair color" value={hair_color} id="name" onChange={(e)=> setHairColor(e.target.value)} />
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Tattoos</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="tattos" value={tattoos} id="name" onChange={(e)=> setTattoos(e.target.value)} />
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Scars</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="scars" value={scars} id="name" onChange={(e)=> setScars(e.target.value)}/>
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Contact information</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="contact info" value={contact_information} id="name" onChange={(e)=> setContactInformation(e.target.value)}/>
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Gang affiliations</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text"  value={gang_affiliations} id="name" onChange={(e)=> setGangAffiliations(e.target.value)}/>
           </div>
         </div>
     
         <div className="grid grid-cols-1 mt-5 mx-7">
           <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Gender</label>
           <select className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" value={gender} id="gender" onChange={(e)=> setGender(e.target.value)} placeholder="gender">
        
        <option> </option>
        <option>Male</option>
          <option>Female</option>
          
        </select>
         </div>
     
         <div className="grid grid-cols-1 mt-5 mx-7">
           <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Address</label>
           <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="Address" value={address} id="name" onChange={(e)=> setAddress(e.target.value)} />
         </div>
         <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">identifying_features</label>
      <textarea  className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="identifying_features" rows="5" value={identifying_features} id="name" onChange={(e)=> setIdentifyingFeatures(e.target.value)} />
    </div>
     
    <div className="grid grid-cols-1 mt-5 mx-7">
           <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
             <div className='flex items-center justify-center w-full'>
                 <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-sky-300 group'>
                     <div className='flex flex-col items-center justify-center pt-7'>
                       <svg className="w-10 h-10 text-sky-400 group-hover:text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                       <p className='lowercase text-sm text-gray-400 group-hover:text-sky-600 pt-1 tracking-wider'>Select a photo</p>
                     </div>
                   <input type="file" className="hidden" onChange={(e) => setPhoto(e.target.files[0])} />
                 </label>
             </div>
         </div>

         <div className="grid grid-cols-1 mt-5 mx-7">
           <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Document</label>
             <div className='flex items-center justify-center w-full'>
                 <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-sky-300 group'>
                     <div className='flex flex-col items-center justify-center pt-7'>
                       <svg className="w-10 h-10 text-sky-400 group-hover:text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                       <p className='lowercase text-sm text-gray-400 group-hover:text-sky-600 pt-1 tracking-wider'>Select a document</p>
                     </div>
                   <input type="file" className="hidden" onChange={(e) => setDocument(e.target.files[0])} />
                 </label>
             </div>
         </div>

     
         <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
           <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'type="button"
            onClick={() => {
                navigate(-1);
              }} >Cancel </button>
           <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>Create</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about to add a criminal'} clickbutton={'create'} onClose={() => showconformModal(false)} />}
      {showerrModal && <ErrorModal showerrModal={showerrModal} errMsg={errMsg} errStatus={errStatus} onClose={() => showerrorModal(false)} />}
      {showsccModal && <SuccessModal showsccModal={showsccModal} succMsg={succMsg} onClose={() => showsuccessModal(false)} />}
         </div>
         </form>
       </div>
     
       <br/>
     
      </>
   );


};
export default ClerkAdd;