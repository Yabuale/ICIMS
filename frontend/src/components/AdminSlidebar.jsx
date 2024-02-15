const AdminSlidebar = () =>{
    return(
        <>
        
      

<div className="flex h-screen  text-gray-900  ">
  <aside className="flex mr-10 mt-7 mb-7 rounded-xl  w-20 flex-col items-center border-r ml-10 bg-blue-100 shadow-2xl">
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
    <nav className="flex flex-1 flex-col gap-y-4 pt-10">
      <a href="#" className="group relative rounded-xl bg-gray-100 p-2 text-sky-600 hover:bg-gray-50">
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
      </a>

      <a href="#" className="text-gary-400 group relative rounded-xl text-sky-600 p-2 bg-gray-50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>


        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Local Admins
          </div>
        </div>
      </a>
      
      
      <a href="#" className="text-gary-400 group relative rounded-xl text-sky-600 p-2 bg-gray-50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Add 
          </div>
        </div>
      </a>

      <a href="#" className="text-gary-400 group relative rounded-xl text-sky-600 p-2 bg-gray-50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Search
          </div>
        </div>
      </a>
    </nav>

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

  
  
  <div className="w-full">
  
<div>
	<div class="container px-6 mx-auto grid">
    <h2 class="my-6 mb-1 text-2xl text-center font-semibold text-sky-900">
			Welcome, Admin
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
						Total Users
					</p>
					<p class="text-lg font-semibold text-gray-700">
						19238
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
						User active
					</p>
					<p class="text-lg font-semibold text-gray-700">
						120
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
						Users suspend
					</p>
					<p class="text-lg font-semibold text-gray-700">
						6389
					</p>
				</div>
			</div>
			
		</div>
	</div>
</div>
<div class="w-full  pt-12 p-4">
  <div class="grid gap-14 md:grid-cols-3 md:gap-5 mr-7 bg-sky-50 rounded-2xl shadow-sm pt-10 pb-10">
    <div class="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
      <div
        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
       </svg>

      </div>
      <button class="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl" href="#">Accounts</button>
      <p> <br/> 
      <br/>
      </p>
    </div>


    <div class="rounded-xl bg-white backdrop-blur-1 shadow-2xl mb-4  p-6 text-center ml-3">
      <div
        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
       <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
         </svg>

      </div>
      <button class="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl" href="#">Search</button>
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
      <button class="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl" href="#">Add</button>
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
      <button class="text-darken mb-3 text-xl font-medium lg:px-14 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-2xl" href="#">Add Local Admin</button>
      <p> <br/> 
      <br/>
      </p>
    </div>
  </div>
</div>

</div>
  
</div>

        
         </>
        
    );
};

export default AdminSlidebar