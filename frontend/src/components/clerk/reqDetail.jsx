import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';


const Reqdetail = () => {
  const navigate = useNavigate();
  const { Id } = useParams();
  const [req, setReq] = useState('null');
  const[record,setRecord]=useState(null);

  const [errStatus, setErrStatus]=useState('404')
  const[errMsg, setErrMsg]=useState('sorry no record was found')
  const[succMsg,setSuccMsg]=useState("match found")
  const[isLoading,setLoading]=useState(false)

  const [showconfModal, showconformModal] = useState(false);
  const [showerrModal,showerrorModal] = useState(false)
  const [showsccModal, showsuccessModal] = useState(false)



  useEffect(() => {
    // Check if wantedId is a valid number
    if (isNaN(Id)) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
      return;
    }
    const fetchWantedCriminal = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/clerk/reqdetail/${Id}/`);
        if(response.status === 200){
            setReq(response.data);
        
        }
       
      } catch (error) {
        setReq(null)
        throw new Response("", {
          status: 404,
          statusText: "Not Found",
        });
      }
    };

    fetchWantedCriminal();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []);
  
  
 const handleimg = async () =>{
  const url = 'http://127.0.0.1:8000/clerk/searchimg'
 
  try{
    setLoading(true)
    showconformModal(true)
  const resp =await axios.post(url, {
    img:req.photo
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
    name:req.name, fname:req.fname,lname:req.lname
    }, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
  if(resp.status === 200){
    showconformModal(false)
    setLoading(false)
    showsuccessModal(true)
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
    ssn:req.id_no
    }, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
  if(resp.status === 200){
    setLoading(false)
    showconformModal(false)
    showsuccessModal(true)
    setRecord(resp.data)
  }

  
}catch(error){
  
  showconformModal(false)
  setLoading(false)
  showerrorModal(true)
 
}
 } 

 const foundresponce = async () =>{
  
  const url = 'http://127.0.0.1:8000/clerk/found'
  try{
  const resp =await axios.post(url, {
    id:Id,url:record.id
    }, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
  if(resp.status === 200){
    window.alert("your responce was sent")
    
  }

  
}catch(error){
  
  window.alert("there was an error while sending")
 
}
 } 

 const notfoundresponce = async () =>{
  
  const url = 'http://127.0.0.1:8000/clerk/notfound'
  try{
  const resp =await axios.post(url, {
    id:Id
    }, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
  if(resp.status === 200){
    setSuccMsg(" your responce was sent")
    showsuccessModal(true)
  }

  
}catch(error){
  
  window.alert("there was an error while sending")
 
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

<button className="py-3  px-8 rounded-xl flex text-white font-semibold bg-sky-700"  type="button"
            onClick={foundresponce}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
</svg>

&nbsp; Respond this record   </button>

  </div>
  
  
</article></>;
}
  return (
    <>
    <article className="px-4 m-20 rounded-xl shadow-xl mx-auto   bg-sky-50" >
  <div className="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
    
    <div className="pb-6 mb-6 border-b border-gray-200">
      
      <div className="w-full flex justify-evenly ">
      
      </div>
    </div>
    <div className="flex items-center mb-6 space-x-2">
      <p className="text-gray-600">Photo</p>
    </div>
    <img src={`http://127.0.0.1:8000/${req.photo}`} className="object-contain w-full h-64 bg-center rounded" alt="Kutty" />
    <button className="bg-sky-900 rounded-md p-2 m-2 text-white" type="button" 
     onClick={handleimg}
    >Search this photo</button>
  </div>

  <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
  
    <p className="p-1">
     Name: {req.name}
    </p>
    <p className="p-1">
      Middle Name: {req.fname}
    </p>
    
    <p className="p-1">
      Last Name: {req.lname}
    </p>
    <button className="bg-sky-900 rounded-md p-2 m-2 text-white" type="button" onClick={handlename} >Search by name</button>
    <p className="p-1">
     Id Number: {req.id_no}
    </p>
    <button className="bg-sky-900 rounded-md p-2 m-2 text-white" type="button" onClick={handlessn}>Search by ID number</button>

    <p className="p-1">
     message:
    </p>
    <p className="p-1 border-4 border-sky-800">
     {req.message}
    </p>
    
  </div>

  <div className="w-full mx-auto mt-10 mb-10 text-left md:w-3/4 lg:w-1/2 grid grid-cols-2 gap-4">
    <button className="py-3  px-8 rounded-xl flex text-white font-semibold bg-sky-700"  type="button"
            onClick={() => {
                navigate(-1);
              }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
</svg>



      

&nbsp; Back</button>

<button className="py-3  px-8 rounded-xl flex text-white font-semibold bg-sky-700"  type="button"
            onClick={notfoundresponce}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
</svg>

&nbsp; Respond with not found  </button>
  </div>
  {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about to add a criminal'} clickbutton={'search'} onClose={() => showconformModal(false)} />}
      {showerrModal && <ErrorModal showerrModal={showerrModal} errMsg={errMsg} errStatus={errStatus} onClose={() => showerrorModal(false)} />}
      {showsccModal && <SuccessModal showsccModal={showsccModal} succMsg={succMsg} onClose={() => showsuccessModal(false)} />}
</article>
    </>
  );
};

export default Reqdetail;
