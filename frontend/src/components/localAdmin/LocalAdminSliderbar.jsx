
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LocalAdminSlidebar = () =>{
  const navigate=useNavigate()

  const logout = () => {  
    const storedData = localStorage.getItem('user');
    localStorage.removeItem('user')
    navigate("/login") 
    };
  
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
    <nav className="flex flex-1 flex-col gap-y-4 pt-10">
      <NavLink to={"/localadmin"} className="group relative rounded-xl bg-gray-100 p-2 text-sky-600 hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
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

      <NavLink to={ "accounts/" } className={({isActive})=>{
                  return isActive? ' group relative rounded-xl text-white p-2 bg-sky-800' : ' group relative rounded-xl text-sky-600 p-2 bg-gray-50'
                }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>


        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Local Accounts
          </div>
        </div>
      </NavLink>
      
      
      <NavLink to={"create/"} className={({isActive})=>{
                  return isActive? ' group relative rounded-xl text-white p-2 bg-sky-800' : ' group relative rounded-xl text-sky-600 p-2 bg-gray-50'
                }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Add 
          </div>
        </div>
      </NavLink>

      
    </nav>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className="flex flex-col items-center gap-y-4 py-10">
      <button className="group relative rounded-xl p-2 text-sky-600 hover:bg-sky-100" type="button" onClick={logout}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
    </svg>
    <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 drop-shadow-lg" >
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Logout
          </div>
        </div>

      </button>

      <button className="mt-2 rounded-full bg-gray-100">
        <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/101497477?s=400&u=1302843442c4be8ed24edf32dd3fea7cbb122091&v=4" alt="" />
      </button>
    </div>
  </aside>
      



    
         </>
        
    );
};

export default LocalAdminSlidebar