const ConfModal=({showconfModal,onClose , message,isLoading, clickbutton})=> {

    return(
      <div style={{ display: showconfModal ? 'block' : 'none' }}>
      <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
           <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
           
            <div className="">
             
              <div className="text-center p-5 flex-auto justify-center">
                <div style={{ display: !isLoading ? 'block' : 'none' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-sky-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-sky-500 mx-auto" viewBox="2 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                    </svg>
                    </div>

                    <div class="border-gray-300 h-20 w-20 mx-auto animate-spin rounded-full border-8 border-t-sky-700" style={{ display: isLoading ? 'block' : 'none' }} />
                  
                              <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                              <p className="text-sm text-gray-500 px-8">{message} </p>    
              </div>
              
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={onClose}>
                      Cancel
                  </button>
                  
                  

                  <button className="mb-2 md:mb-0 bg-sky-700 border border-sky-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg  hover:bg-sky-600" >
                  <span class="border-white h-5 w-5 mx-auto animate-spin rounded-full border-4 border-t-sky-700" style={{ display: isLoading ? 'block' : 'none' }}> </span>
                  <span style={{ display: !isLoading ? 'block' : 'none' }}>{clickbutton}</span>
                  
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }

  export default ConfModal