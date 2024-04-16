import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";


const Login=() =>{
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    
    const url = `http://127.0.0.1:8000/accounts/login/`
 const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
    
    const resp =await axios.post(url, {email,password});
    if(resp.status === 200){
     console.log("logged in")
     console.log(resp.data)
     const stringifiedObject = JSON.stringify(resp.data);
     localStorage.setItem('user', stringifiedObject)
     if(resp.data.user.role === "local"){
        console.log("here")
        navigate("/localadmin")
     }
     else if(resp.data.user.role === "admin"){
        navigate("/admin")
     }
     else if(resp.data.user.role === "clerk"){
        navigate("/clerk")
     }
     else if(resp.data.user.role === "police"){
        navigate("/police")
     }
     else{
        navigate("/")
     }
    }
     } catch(error){
      
     
      
    }
 
};
    return(
        <>
        <br/>
        <br/>
<div className="w-full mt-24 max-w-sm p-6 m-auto mx-auto bg-sky-50 rounded-lg shadow-2xl ">
    <div className="flex justify-center mx-auto">
    <svg
              className="w-14 text-sky-900"
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

    <form className="mt-6" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username" className="block text-sm text-gray-800 ">Email</label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border rounded-lg    focus:border-sky-800  focus:ring-sky-500 focus:outline-none focus:ring focus:ring-opacity-40" value={email} id="email" onChange={(e)=> setEmail(e.target.value)} placeholder="example@gmail.com"/>
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-800 ">Password</label>
                <a href="#" className="text-xs text-gray-600  hover:underline">Forget Password?</a>
            </div>

            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border rounded-lg    focus:border-sky-800  focus:ring-sky-500 focus:outline-none focus:ring focus:ring-opacity-40" value={password} id="password" onChange={(e)=> setPassword(e.target.value)} />
        </div>

        <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-800 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" type="submit">
                Sign In
            </button>
        </div>
    </form>

    <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b  lg:w-1/5"></span>

        

        <span className="w-1/5 border-b  lg:w-1/5"></span>
    </div>

    <div className="flex items-center mt-6 -mx-2">
        <button type="button" className="flex items-center justify-center w-full px-6 py-3 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-cyan-800 rounded-lg hover:bg-cyan-900 focus:bg-blue-400 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
           <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
             </svg>


            <button className="hidden mx-2 sm:inline" type="button"
            onClick={() => {
                navigate(-1);
              }}>Go back</button>
        </button>

        <a href="#" className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
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
            </svg>
        </a>
    </div>

    
</div>
</>
    );
}

export default Login;