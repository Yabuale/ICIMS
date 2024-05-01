
import { useNavigate } from "react-router-dom"
const SuccessModal=({showsccModal,onClose ,succMsg})=> {
 const navigate =useNavigate();
    return(
      <div style={{ display: showsccModal ? 'block' : 'none' }}>
      <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
           <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
           
            <div className=" bg-green-50">
             
              <div className="text-center p-5 flex-auto justify-center">

              

                      
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-200">
                    <svg className="h-6 w-6 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                </div>
                  
                              <h1 className="text-xl font-bold py-4 "> Success !!</h1>
                              <p className="text-sm text-gray-500 px-8">{succMsg} </p>    
              </div>
              
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={() => {
        navigate(-1);
        }}>
                      Close
                  </button>
                 
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }

export default SuccessModal