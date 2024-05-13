import { useEffect,useState } from "react";
import axios from "axios";



const LocalAdminnums = () =>{
    const[criminal,setCriminal]=useState('');
	const[request,setRequest]=useState('');
	const[responce,setResponce]=useState('');
	const[token,setToken]=useState(null)
   
	useEffect(() => {
	   const fetchLocalaccounts = async () => {
		 
   
		try{
		   const storedData = localStorage.getItem('user');
		   let user, token;
	   
		   if (storedData) {
			 try {
			   user = JSON.parse(storedData);
			   token = user.token;
			 } catch (error) {
			   console.error('Error parsing stored user data:', error);
			   // Handle potential fallback mechanism here (e.g., temporary token, redirect to login)
			 }
		   } else {
			 // Handle case where no token is found in local storage (e.g., redirect to login)
			 console.warn('No user data found in local storage.');
		   }
		   if(token){
		 try {
		   const response = await axios.get(`http://127.0.0.1:8000/accounts/localnum/`, {
			   headers: {
				 Authorization: `Token ${token}`
			   }
			 });
		   if(response.status === 200){
		   setCriminal(response.data.criminals)
		   setResponce(response.data.responces)
		   setRequest(response.data.requests)
		   }
		  
		 } catch (error) {
		  
		 }
	   };
   
	   
   }
	 catch (error) {
		  
	}
   };
	fetchLocalaccounts();
	 }, []);

    return(
    
 
       <div>
     <div class="container ml-24 px-6 mx-auto grid">
     <h2 class="my-6 mb-1 text-2xl text-center font-semibold text-sky-900">
             Welcome, Local Admin
         </h2>
         <h2 class="my-6 text-2xl font-semibold text-gray-700">
             Dashboard
         </h2>
         
         <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
             <div class="flex items-center p-4 bg-sky-50 rounded-lg shadow-2xl">
                 <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                         <path
                             d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                         </path>
                     </svg>
                 </div>
                 <div>
                     <p class="mb-2 text-sm font-medium text-gray-600">
                         Local Accounts
                     </p>
                     <p class="text-lg font-semibold text-gray-700">
                         {criminal}
                     </p>
                 </div>
             </div>
             <div class="flex items-center p-4 bg-sky-50 rounded-lg shadow-2xl">
                 <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                         <path
                             d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                         </path>
                     </svg>
                 </div>
                 <div>
                     <p class="mb-2 text-sm font-medium text-gray-600">
                         Active Accounts
                     </p>
                     <p class="text-lg font-semibold text-gray-700">
                         {request}
                     </p>
                 </div>
             </div>
             <div class="flex items-center p-4 bg-sky-50 rounded-lg shadow-2xl">
                 <div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                         <path
                             d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                         </path>
                     </svg>
                 </div>
                 <div>
                     <p class="mb-2 text-sm font-medium text-gray-600">
                         Deactivated Accounts
                     </p>
                     <p class="text-lg font-semibold text-gray-700">
                         {responce}
                     </p>
                 </div>
             </div>
 
         </div>
     </div>
 </div>
 
 
    );
 };
 
 export default LocalAdminnums;