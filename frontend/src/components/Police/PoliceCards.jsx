import React from 'react';
import { Link } from 'react-router-dom';

const PoliceCards = () =>{

  return(
    <div className="w-full  ml-24 pt-12">
    <div className="grid gap-10 md:grid-cols-3 md:gap-4  bg-sky-50 rounded-2xl shadow-sm pt-10">
      <div className="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
        <div
          className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
         <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="teal" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>
  
        </div>
        <Link to="post/">
        <button className="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl" href="#">Post Wanted</button>
        </Link>
        <p> <br/> 
        <br/>
        </p>
      </div>
  
  
      <div className="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
        <div
          className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="teal" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
  
        </div>
        <Link to="request/">
        <button className="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl" href="#">Send Request</button>
        </Link>
        <p> <br/> 
        <br/>
        </p>
      </div>
  
      <div className="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
        <div
          className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="teal" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
</svg>
  
        </div>
        <button className="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl" href="#">View Response</button>
        <p> <br/> 
        <br/>
        </p>
      </div>
  
  
  
      <div className="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
        <div
          className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
          <svg xmlns="http://www.w3.org/2000/svg"fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="teal" className="w-6 h-6">
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
         </svg>
        </div>
        <Link to="list/">
        <button className="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl" href="#">List Wanted</button>
        </Link>
        <p> <br/> 
        <br/>
        </p>
      </div>
    </div>
  </div>

  );

};

export default PoliceCards;