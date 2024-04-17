const ErrorModal=({showerrModal,onClose , errMsg,errStatus})=> {

    return(
      <div style={{ display: showerrModal ? 'block' : 'none' }}>
        
      <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
           <div className="absolute bg-black opacity-20 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
           
            <div className=" bg-red-50">
             
              <div className="text-center p-5 flex-auto justify-center">
                      
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-200">
                    <svg className="h-6 w-6 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                  
                              <h1 className="text-xl font-bold py-4"> Error !! {errStatus} </h1>
                              <p className="text-sm text-gray-500 px-8 ">{errMsg}</p>    
              </div>
              
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={onClose}>
                      Close
                  </button>
                 
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }

  export default ErrorModal