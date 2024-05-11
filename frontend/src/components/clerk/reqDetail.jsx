import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
const Reqdetail = () => {
  const navigate = useNavigate();
  const { Id } = useParams();
  const [req, setReq] = useState('null');

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
  
  const url = 'http://127.0.0.1:8000/clerk/searchimg'
 const handleimg = async () =>{
  
  const resp =await axios.post(url, {
    img:req.photo
    }, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
  if(resp.status === 201){
   
  }
   
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
    <button className="bg-sky-900 rounded-md p-2 m-2 text-white">Search by name</button>
    <p className="p-1">
     Id Number: {req.id_no}
    </p>
    <button className="bg-sky-900 rounded-md p-2 m-2 text-white">Search by ID number</button>

    <p className="p-1">
     message:
    </p>
    <p className="p-1 border-4 border-sky-800">
     {req.message}
    </p>
    
  </div>

  <div className="w-full mx-auto mt-10 mb-10 text-left md:w-3/4 lg:w-1/2 ">
    <button className="py-3  px-8 rounded-xl flex text-white font-semibold bg-sky-700"  type="button"
            onClick={() => {
                navigate(-1);
              }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
</svg>





&nbsp; Back</button>
  </div>
  
</article>
    </>
  );
};

export default Reqdetail;
