import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';
const ClerkEdit = () =>{

  const { wantedId } = useParams();
  const [wantedCriminal, setWantedCriminal] = useState('null');

  const navigate = useNavigate()
  const [errStatus, setErrStatus]=useState('500')
  const[errMsg, setErrMsg]=useState('The server might be down, please try again later we will try to solve the problem as soon as possible')
  const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
  const[isLoading,setLoading]=useState(false)
  const [SSN, setSsn] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [first_name, setFirstName] = useState('');
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

  const[errors, setErrors]=useState({})
  const [showconfModal, showconformModal] = useState(false);
  const [showerrModal,showerrorModal] = useState(false)
  const [showsccModal, showsuccessModal] = useState(false)
 const url = `http://127.0.0.1:8000/criminals/criminaldetail/${wantedId}/`
 useEffect(() => {
  // Check if wantedId is a valid number
  if (isNaN(wantedId)) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
    
    return;
  }

  const fetchWantedCriminal = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/criminals/criminaldetail/${wantedId}/`);
      if(response.status === 200){
      setWantedCriminal(response.data);
      setSsn(response.data.SSN)
      setFirstName(response.data.first_name);
      setMiddleName(response.data.middle_name)
      setLastName(response.data.last_name);
      setDateOfBirth(response.data.date_of_birth);
      setGender(response.data.gender);
      setNationality(response.data.nationality);
      setHeight(response.data.height);
      setWeight(response.weight);
      setEyeColor(response.data.eye_color);
      setHairColor(response.data.hair_color);
      setTattoos(response.data.tattoos);
      setScars(response.data.scars);
      setIdentifyingFeatures(response.data.identifying_features)
      setAddress(response.data.address)
      setContactInformation(response.data.contact_information)
      setGangAffiliations(response.data.gang_affiliations)
      
      }
      else{
       navigate("/clerk/list")
      }
    } catch (error) {
       console.log("Afasfasf")
       navigate("/clerk/list")
    }
  };

  fetchWantedCriminal();

  // Cleanup function
  return () => {
    // Any cleanup code if needed
  };
}, []);


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

    
    
  const resp =await axios.patch(url, {
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
  
  if (!first_name) {
    isvalid=false;
    errorMessage.first_name = 'Please enter a first name.';
   }
  // Validate first name - minimum 2 characters and only letters
  else if (first_name.length < 3) {
    isvalid=false;
   errorMessage.first_name = 'First name must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(first_name)) {
    isvalid=false;
   errorMessage.first_name = 'First name can only contain letters.';
  }
  if (!middle_name) {
    isvalid=false;
    errorMessage.middle_name = 'Please enter a Middle name.';
   }
  // Validate first name - minimum 2 characters and only letters
  else if (middle_name.length < 3) {
    isvalid=false;
   errorMessage.middle_name = 'Middle name must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(middle_name)) {
    isvalid=false;
   errorMessage.middle_name = 'Middle name can only contain letters.';
  }
  if (!last_name) {
    isvalid=false;
    errorMessage.last_name = 'Please enter a last name.';
   }
  // Validate last name - minimum 3 characters and only letters
  else if (last_name.length < 3) {
    isvalid=false;
   errorMessage.last_name = 'Last name must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(last_name)) {
    isvalid=false;
   errorMessage.last_name = 'Last name can only contain letters.';
  }
  if (!date_of_birth) {
    isvalid=false;
    errorMessage.date_of_birth = 'Please enter a branch.';//do date validation
   }

   if (!nationality) {
    isvalid=false;
    errorMessage.nationality = 'Please enter nationality.';
   }
  // Validate first name - minimum 2 characters and only letters
  else if (nationality.length < 3) {
    isvalid=false;
   errorMessage.nationality = 'nationality must be at least 3 characters long.';
  } else if (!/^[A-Za-z]+$/.test(nationality)) {
    isvalid=false;
   errorMessage.nationality = 'nationality can only contain letters.';
  }

  if (!height) {
    isvalid=false;
    errorMessage.height = 'Please enter height.';  // do height validation
   }

   if (!weight) {
    isvalid=false;
    errorMessage.weight = 'Please enter weight.';  // do weight validation
   }

   if (!eye_color) {
    isvalid=false;
    errorMessage.eye_color = 'Please enter eye color.';  // do eye color validation
   }

   if (!hair_color) {
    isvalid=false;
    errorMessage.hair_color = 'Please enter hair color.';  // do hair color validation
   }

   if (!tattoos) {
    isvalid=false;
    errorMessage.tattoos = 'Please enter tattoos.';  // do tattoos validation
   }

   if (!scars) {
    isvalid=false;
    errorMessage.scars = 'Please enter scars.';  // do scars validation
   }

   if (!gang_affiliations) {
    isvalid=false;
    errorMessage.gang_affiliations = 'Please enter gang affiliation.';  // do gang affiliations validation
   }

   if (!gender) {
    isvalid=false;
    errorMessage.gender = 'Please select gender.';  // do gender validation
   }

   if (!identifying_features) {
    isvalid=false;
    errorMessage.identifying_features = 'Please enter identifying features.';  // do identifying features validation
   }

   if (!contact_information || !/^\d{10}$/.test(contact_information)) {
    isvalid=false;
    errorMessage.contact_information = 'Please enter your contact information.';
   }

   if (!address) {
    isvalid=false;
    errorMessage.address = 'Please enter address.';  // do address validation
   }

   if (!photo) {
    isvalid=false;
    errorMessage.photo = 'Please enter photo.';  // do photo validation
   }

   if (!document) {
    isvalid=false;
    errorMessage.document = 'Please enter document.';  // do document validation
   }

   setErrors(errorMessage);
   return isvalid; // Returns true if there are no errors
  }; 
 const handleOpenModal = () => {
  if (validate()){
  showconformModal(true); // Open the modal on button click
}};

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
           {errors.SSN && <p className="text-red-500 text-xs">{errors.SSN}</p>}
         </div>
         <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">first name</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="first name"  value={first_name} id="name" onChange={(e)=> setFirstName(e.target.value)} />
             {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
           </div>
         </div>
     
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">middle name</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="first name"  value={middle_name} id="name" onChange={(e)=> setMiddleName(e.target.value)} />
             {errors.middle_name && <p className="text-red-500 text-xs">{errors.middle_name}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">last name</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="last name" value={last_name} id="name" onChange={(e)=> setLastName(e.target.value)} />
             {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">date of birth</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="date"  value={date_of_birth} id="name" onChange={(e)=> setDateOfBirth(e.target.value)} />
             {errors.date_of_birth && <p className="text-red-500 text-xs">{errors.date_of_birth}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nationality</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="nationality" value={nationality} id="name" onChange={(e)=> setNationality(e.target.value)}/>
             {errors.nationality && <p className="text-red-500 text-xs">{errors.nationality}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Height</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="number" placeholder="height" value={height} id="name" onChange={(e)=> setHeight(e.target.value)} />
             {errors.height && <p className="text-red-500 text-xs">{errors.height}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">weight</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="number" placeholder="weight" value={weight} id="name" onChange={(e)=> setWeight(e.target.value)} />
             {errors.weight && <p className="text-red-500 text-xs">{errors.weight}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">eye color</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="eye color" value={eye_color} id="name" onChange={(e)=> setEyeColor(e.target.value)} />
             {errors.eye_color && <p className="text-red-500 text-xs">{errors.eye_color}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">hair color</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="hair color" value={hair_color} id="name" onChange={(e)=> setHairColor(e.target.value)} />
             {errors.hair_color && <p className="text-red-500 text-xs">{errors.hair_color}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Tattoos</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="tattos" value={tattoos} id="name" onChange={(e)=> setTattoos(e.target.value)} />
             {errors.tattoos && <p className="text-red-500 text-xs">{errors.tattoos}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Scars</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="scars" value={scars} id="name" onChange={(e)=> setScars(e.target.value)}/>
             {errors.scars && <p className="text-red-500 text-xs">{errors.scars}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Contact information</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="contact info" value={contact_information} id="name" onChange={(e)=> setContactInformation(e.target.value)}/>
             {errors.contact_information && <p className="text-red-500 text-xs">{errors.contact_information}</p>}
           </div>
           <div className="grid grid-cols-1">
             <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Gang affiliations</label>
             <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text"  value={gang_affiliations} id="name" onChange={(e)=> setGangAffiliations(e.target.value)}/>
             {errors.gang_affiliations && <p className="text-red-500 text-xs">{errors.gang_affiliations}</p>}
           </div>
         </div>
     
         <div className="grid grid-cols-1 mt-5 mx-7">
           <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Gender</label>
           <select className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" value={gender} id="gender" onChange={(e)=> setGender(e.target.value)} placeholder="gender">
        
        <option> </option>
        <option>Male</option>
          <option>Female</option>
          
        </select>
        {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
         </div>
     
         <div className="grid grid-cols-1 mt-5 mx-7">
           <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Address</label>
           <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="Address" value={address} id="name" onChange={(e)=> setAddress(e.target.value)} />
           {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
         </div>
         <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">identifying_features</label>
      <textarea  className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="identifying_features" rows="5" value={identifying_features} id="name" onChange={(e)=> setIdentifyingFeatures(e.target.value)} />
      {errors.identifying_features && <p className="text-red-500 text-xs">{errors.identifying_features}</p>}
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
                   {errors.photo && <p className="text-red-500 text-xs">{errors.photo}</p>}
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
                   {errors.document && <p className="text-red-500 text-xs">{errors.document}</p>}
                 </label>
             </div>
         </div>

     
         <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
           <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'type="button"
            onClick={() => {
                navigate(-1);
              }} >Cancel </button>
           <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>Update</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about tto update a record'} clickbutton={'update'} onClose={() => showconformModal(false)} />}
      {showerrModal && <ErrorModal showerrModal={showerrModal} errMsg={errMsg} errStatus={errStatus} onClose={() => showerrorModal(false)} />}
      {showsccModal && <SuccessModal showsccModal={showsccModal} succMsg={succMsg} onClose={() => showsuccessModal(false)} />}
         </div>
         </form>
       </div>
     
       <br/>
     
      </>
   );


};
export default ClerkEdit;