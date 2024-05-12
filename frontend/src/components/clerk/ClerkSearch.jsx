
import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';

function SearchClerk() {
    
  const [name, setName] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [idno, setIdno] = useState('')
  const [photo, setPhoto] = useState(null);

    const [errStatus, setErrStatus]=useState('404')
    const[errMsg, setErrMsg]=useState('sorry no record was found')
    const[succMsg,setSuccMsg]=useState("match found")
    const[isLoading,setLoading]=useState(false)
    const[record,setRecord]=useState(null);
  
    const [showconfModal, showconformModal] = useState(false);
    const [showerrModal,showerrorModal] = useState(false)
    const [showsccModal, showsuccessModal] = useState(false)
    const handleimg = async () =>{
      const url = 'http://127.0.0.1:8000/clerk/searchdimg'
     
      try{
        setLoading(true)
        showconformModal(true)
      const resp =await axios.post(url, {
        img:photo
        }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
      if(resp.status === 200){
        
        showconformModal(false)
        setLoading(false)
        setRecord(resp.data)
      }
    }catch(error){
      showconformModal(false)
      setLoading(false)
      showerrorModal(true)
    }
     } 
    
     const handlename = async () =>{
      const url = 'http://127.0.0.1:8000/clerk/searchname'
      try{
        setLoading(true)
      showconformModal(true)
      const resp =await axios.post(url, {
        name:name, fname:fname,lname:lname
        }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
      if(resp.status === 200){
        showconformModal(false)
        setLoading(false)
        showsuccessModal(false)
        setRecord(resp.data)
      }
    }
    catch(error){
      showconformModal(false)
      setLoading(false)
      showerrorModal(true)
    }
       
     } 
    
     const handlessn = async (e) =>{
      e.preventDefault();
      setLoading(true)
      showconformModal(true)
      const url = 'http://127.0.0.1:8000/clerk/searchssn'
      try{
      const resp =await axios.post(url, {
        ssn:idno
        }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
      if(resp.status === 200){
        setLoading(false)
        showconformModal(false)
        showsuccessModal(false)
        setRecord(resp.data)
      }
    
      
    }catch(error){
      
      showconformModal(false)
      setLoading(false)
      showerrorModal(true)
     
    }
     } 
     if (record) {
      return <>
     <article className="px-4 py-24 mx-auto max-w-7xl pt-40" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
      <div className="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
        <div className="pb-6 mb-6 border-b border-gray-200">
          <h1 className="mb-3 text-3xl font-bold text-sky-950 md:leading-tight md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
            Criminal: 
          </h1>
        </div>
        
        <img src={`http://127.0.0.1:8000/${record.photo}`} className="object-contain w-full h-64 bg-center rounded" alt="Kutty" />
      </div>
    
      <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
     
      <div class="grid grid-cols-2 gap-4">
      <p class="p-1">
        SSN: {record.SSN}
      </p>
      <p class="p-1">
        Name: {record.first_name} {record.middle_name} {record.last_name}
      </p>
      <p class="p-1">
        date_of_birth: {record.date_of_birth}
      </p>
      <p class="p-1">
        gender: {record.gender}
      </p>
      <p class="p-1">
        nationality: {record.nationality}
      </p>
      <p class="p-1">
        height: {record.height}
      </p>
      <p class="p-1">
        weight: {record.weight}
      </p>
      <p class="p-1">
        eye_color: {record.eye_color}
      </p>
      <p class="p-1">
        hair_color: {record.hair_color}
      </p>
      <p class="p-1">
        tattoos: {record.tattoos}
      </p>
      <p class="p-1">
        scars: {record.scars}
      </p>
      <p class="p-1">
        identifying_features: {record.identifying_features}
      </p>
    </div>
    
    <div class="grid grid-cols-2 gap-4">
      <p class="p-1">
        address: {record.address}
      </p>
      <p class="p-1">
        contact_information: {record.contact_information}
      </p>
      <p class="p-1">
        gang_affiliations: {record.gang_affiliations}
      </p>
      <p class="p-1">
        created_date: {record.created_date}
      </p>
      <p class="col-span-2">
        File: <a  href={`http://127.0.0.1:8000/${record.document}`} target="_blank">Click here to open the PDF</a>
      </p>
    </div>
      </div>
    
      <div className="w-full mx-auto mt-10 mb-10 text-left md:w-3/4 lg:w-1/2 grid grid-cols-2 gap-4">
        <button className="py-3  px-8 rounded-xl flex text-white font-semibold bg-sky-700"  type="button"
                onClick={() => {
                    setRecord(null)
                  }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
    </svg>
    &nbsp; Back</button>
 
      </div>
      
      
    </article></>;
    }
  return ( 
    <>
    <div class="grid  mx-24 lg:mx-auto  pb-10 bg-sky-50 mt-24 justify-center  rounded-lg shadow-xl w-4/5  md:w-9/12 lg:w-1/2">
    <div class="flex justify-center py-4">
         <div class="flex bg-gray-50 rounded-full md:p-4 p-2 border-2 border-sky-800">
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
   
       <div class="flex justify-center">
         <div class="flex">
           <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Search Criminal</h1>
         </div>
       </div>
    
       
     <div class="flex justify-center">
         <div class="flex">
           <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Send Request</h1>
         </div>
       </div>

       <div class="grid grid-cols-1 mt-5 mx-7">
         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Name</label>
         <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name"  value={name} id="name" onChange={(e)=> setName(e.target.value)}/>
       </div>
   
       <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
         <div class="grid grid-cols-1">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Middle name</label>
           <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="middle name" value={fname} id="fname" onChange={(e)=> setFname(e.target.value)} />
         </div>
         <div class="grid grid-cols-1">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
           <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="last name" value={lname} id="message" onChange={(e)=> setLname(e.target.value)} />
         </div>
       </div>

       <button className="bg-sky-900 rounded-md p-2 m-2 text-white" type="button" onClick={handlename} >Search by name</button>
       
       <div class="grid grid-cols-1 mt-5 mx-7">
         <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">ID NUMBER</label>
         <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="Another Input" value={idno} id="message" onChange={(e)=> setIdno(e.target.value)}/>
       </div>

       <button className="bg-sky-900 rounded-md p-2 m-2 text-white" type="button" onClick={handlessn}>Search by ID number</button>
    <div class="grid grid-cols-1 mt-5 mx-7">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Photo</label>
             <div class='flex items-center justify-center w-full'>
                 <label class='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-sky-300 group'>
                     <div class='flex flex-col items-center justify-center pt-7'>
                       <svg class="w-10 h-10 text-sky-400 group-hover:text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                       <p class='lowercase text-sm text-gray-400 group-hover:text-sky-600 pt-1 tracking-wider'>Select a photo</p>
                     </div>
                   <input type="file" class="hidden" onChange={(e) => setPhoto(e.target.files[0])} />
                 </label>
             </div>
         </div>
         <button className="bg-sky-900 rounded-md p-2 m-2 text-white" type="button" 
     onClick={handleimg}
    >Search this photo</button>

    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 ' type="button"
            onClick={() => {
                navigate(-1);
              }}>Cancel</button>
     
    </div>
   
    {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are searching a record this might take a while please hold'} clickbutton={'search'} onClose={() => showconformModal(false)} />}
      {showerrModal && <ErrorModal showerrModal={showerrModal} errMsg={errMsg} errStatus={errStatus} onClose={() => showerrorModal(false)} />}
      {showsccModal && <SuccessModal showsccModal={showsccModal} succMsg={succMsg} onClose={() => showsuccessModal(false)} />}
         </div>
    </>
  );
}

export default SearchClerk;
