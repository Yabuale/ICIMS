import React from 'react';
import { Link } from 'react-router-dom';

const AdminCards = () =>{

    return(
      <div class="w-full  ml-24 pt-12">
      <div class="grid gap-14 md:grid-cols-3 md:gap-5 mr-7 bg-sky-50 rounded-2xl shadow-sm pt-10 pb-10">
        <div class="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
          <div
            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
           </svg>
    
          </div>
          <Link to="localadmins/">
            <button className="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl">Accounts</button>
        </Link>
          <p> <br/> 
          <br/>
          </p>
        </div>
    
    
        <div class="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
          <div
            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
             <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
             </svg>
    
          </div>
          <Link to="branchs/">
            <button className="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl">Branches</button>
        </Link>
          <p> <br/> 
          <br/>
          </p>
        </div>
    
        <div class="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
          <div
            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="White" class="w-6 h-6">
              <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
             </svg>
    
          </div>
          <Link to="addbranch/">
            <button className="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl">Add Branch</button>
        </Link>
          <p> <br/> 
          <br/>
          </p>
        </div>
    
    
    
        <div class="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
          <div
            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
              <path
                d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                fill="white"></path>
            </svg>
          </div>
          <Link to="addlocaladmin/">
            <button className="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl">Add Local Admin</button>
        </Link>
          <p> <br/> 
          <br/>
          </p>
        </div>
      </div>
    </div>

    );

};

export default AdminCards;