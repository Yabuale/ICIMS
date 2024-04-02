
const ClerkAdd = () =>{
   return(
      <>
 
      <br/>
     
       <div class="grid w-full mx-auto bg-sky-50   rounded-lg shadow-xl  md:w-9/12 lg:w-1/2">
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
             <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Add Criminal</h1>
           </div>
         </div>
     
         <div class="grid grid-cols-1 mt-5 mx-7">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">SSN</label>
           <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="SSN" />
         </div>
     
         <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">first name</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="first name" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">last name</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="last name" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">date of birth</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="date" placeholder="date of birth" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nationality</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="nationality" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Height</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="number" placeholder="date of birth" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">weight</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="number" placeholder="nationality" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">eye color</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="eye color" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">hair color</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="hair color" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Tattoos</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="checkbox" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Scars</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="checkbox" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Contact information</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="contact info" />
           </div>
           <div class="grid grid-cols-1">
             <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Gang affiliations</label>
             <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="checkbox"  />
           </div>
         </div>
     
         <div class="grid grid-cols-1 mt-5 mx-7">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Gender</label>
           <select class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent">
             <option>Male</option>
             <option>Female</option>
           </select>
         </div>
     
         <div class="grid grid-cols-1 mt-5 mx-7">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Address</label>
           <input class="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="Address" />
         </div>
         <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">identifying_features</label>
      <textarea  className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="identifying_features" rows="5" />
    </div>
     
         <div class="grid grid-cols-1 mt-5 mx-7">
           <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
             <div class='flex items-center justify-center w-full'>
                 <label class='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-sky-300 group'>
                     <div class='flex flex-col items-center justify-center pt-7'>
                       <svg class="w-10 h-10 text-sky-400 group-hover:text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                       <p class='lowercase text-sm text-gray-400 group-hover:text-sky-600 pt-1 tracking-wider'>Select a photo</p>
                     </div>
                   <input type='file' class="hidden" />
                 </label>
             </div>
         </div>
     
         <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
           <button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
           <button class='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button>
         </div>
     
       </div>
     
       <br/>
     
      </>
   );


};
export default ClerkAdd;