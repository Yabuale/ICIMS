import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";

const DetailResp = () => {
  const navigate = useNavigate();
  const { Id } = useParams();
  const[record,setRecord]=useState('null');

  
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
        const response = await axios.get(`http://127.0.0.1:8000/criminals/criminaldetail/${Id}/`);
        if(response.status === 200){
            setRecord(response.data);
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
  
  
  return (
    <>
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
                navigate(-1)
              }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
</svg>
&nbsp; Back</button>



  </div>
  
  
</article></>
  );
};

export default DetailResp;
