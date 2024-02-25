import { NavLink } from 'react-router-dom';

const PoliceSlideBar = () =>{
   return(
       <>
       <aside className="flex  mt-5 fixed   rounded-xl  w-20 flex-col items-center border-r ml-2 bg-blue-100 shadow-2xl">
   <div className="flex h-[4.5rem] w-full items-center justify-center   p-2">
   <svg
                 className="w-8 text-sky-900"
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
               </svg>    </div>
   <nav className="flex flex-1 flex-col gap-y-4 pt-10 pb-30">
   <NavLink to={"/police"} className={({isActive})=>{
                  return isActive? ' group relative rounded-xl text-sky-600 p-2 bg-gray-50' : ' group relative rounded-xl text-sky-600 p-2 bg-gray-50'
                }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
       </svg>

        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white "></div>
            </div>
            Dashboard <span className=""></span>
          </div>
        </div>
      </NavLink>
     <NavLink to={"post/"} className={({isActive})=>{
                  return isActive? ' group relative rounded-xl text-white p-2 bg-sky-800' : ' group relative rounded-xl text-sky-600 p-2 bg-gray-50'
                }} >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>


       <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
         <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
           <div className="absolute inset-0 -left-1 flex items-center">
             <div className="h-2 w-2 rotate-45 bg-white "></div>
           </div>
           Post <span className=""></span>
         </div>
       </div>
     </NavLink>

    
     
     <NavLink to={"request/"} className={({isActive})=>{
                  return isActive? ' group relative rounded-xl text-white p-2 bg-sky-800' : ' group relative rounded-xl text-sky-600 p-2 bg-gray-50'
                }}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
       <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
         <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
           <div className="absolute inset-0 -left-1 flex items-center">
             <div className="h-2 w-2 rotate-45 bg-white"></div>
           </div>
           Request 
         </div>
       </div>
     </NavLink>

     <a href="#" className="text-gary-400 group relative rounded-xl text-sky-600 p-2 bg-gray-50">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
</svg>

       <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
         <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
           <div className="absolute inset-0 -left-1 flex items-center">
             <div className="h-2 w-2 rotate-45 bg-white"></div>
           </div>
           Response
         </div>
       </div>
     </a>
     <a href="#" className="text-gary-400 group relative rounded-xl text-sky-600 p-2 bg-gray-50">
     <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
         </svg>

       <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
         <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
           <div className="absolute inset-0 -left-1 flex items-center">
             <div className="h-2 w-2 rotate-45 bg-white"></div>
           </div>
           List
         </div>
       </div>
     </a>
   </nav>
<br/>
<br/>
   <div className="flex flex-col items-center gap-y-4 py-10">
     <a className="group relative rounded-xl p-2 text-sky-600 hover:bg-sky-100">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
   </svg>
   <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
         <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
           <div className="absolute inset-0 -left-1 flex items-center">
             <div className="h-2 w-2 rotate-45 bg-white"></div>
           </div>
           Logout
         </div>
       </div>

     </a>

     <button className="mt-2 rounded-full bg-gray-100">
       <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/101497477?s=400&u=1302843442c4be8ed24edf32dd3fea7cbb122091&v=4" alt="" />
     </button>
   </div>
 </aside>
     



       
        </>
       
   );
};

export default PoliceSlideBar