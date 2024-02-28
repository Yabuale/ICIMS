import React, { useState } from 'react';

function SearchComponent() {
    const [open, setOpen] = useState(false);
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
    <div className='flex items-center justify-center h-32'>
    <div className='flex items-center justify-center h-32'>
      <nav className="hidden mt-0 space-x-10 md:flex">
        <div className="relative" onClick={() => setOpen(!open)}>
          <button type="button" className="text-gray-500 group mr-4 p-4 inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900" aria-expanded={open ? 'true' : 'false'}>
            <span>Search By</span>
            <svg className={`text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 duration-300 ${open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          {open && (
            <div className="absolute left-1/2 z-full mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                  <svg className="h-6 w-6 flex-shrink-0 text-template-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">First Name</p>
                      <p className="mt-1 text-sm text-gray-500">search by first name</p>
                    </div>
                  </a>
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
  <svg className="h-6 w-6 flex-shrink-0 text-template-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
  <div className="ml-4">
    <p className="text-base font-medium text-gray-900">Last Name</p>
    <p className="mt-1 text-sm text-gray-500">search by last name</p>
  </div>
</a>

                  
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
    </div>
        <div className="relative w-96 mt-2 mb-2 flex flex-wrap">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-2 py-[0.15rem] sm:px-3 sm:py-[0.25rem] text-sm sm:text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1" />
        
        <button
          className="relative z-[2] flex items-center rounded-r bg-sky-900 px-3 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-800 hover:shadow-lg focus:bg-sky-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-1000 active:shadow-lg"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 sm:h-5 sm:w-5">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd" />
          </svg>
        </button>
      </div>
    
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
         <div  className="items-center">
         <button
  className="ml-32 mt-4 rounded-lg bg-sky-800 py-3 px-6 w-6/12 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true"
>
  Search by Photo
</button>

</div>
      
    
         </div>
    </>
  );
}

export default SearchComponent;
