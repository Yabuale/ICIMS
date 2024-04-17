const ConfdelModal=({showdelModal, onClose , message, isLoading,clickbutton})=> {
  
    return(
      <div style={{ display: showdelModal ? 'block' : 'none' }}>
      <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
           <div className="absolute bg-black opacity-10 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
           
            <div className="bg-red-50">
             
              <div className="text-center p-5 flex-auto justify-center">
                <div style={{ display: !isLoading ? 'block' : 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                 </svg>
                    </div>

                    <div className="border-red-300 h-20 w-20 mx-auto animate-spin rounded-full border-8 border-t-red-700" style={{ display: isLoading ? 'block' : 'none' }} />
                  
                              <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                              <p className="text-sm text-gray-500 px-8">{message} </p>    
              </div>
              
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={onClose}>
                      Cancel
                  </button>
                  
                  

                  <button className="mb-2 md:mb-0 bg-red-700 border border-red-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg  hover:bg-red-600"  >
                  <span className="border-white h-5 w-5 mx-auto animate-spin rounded-full border-4 border-t-red-700" style={{ display: isLoading ? 'block' : 'none' }}> </span>
                  <span style={{ display: !isLoading ? 'block' : 'none' }}>{clickbutton}</span>
                  
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }

  export default ConfdelModal