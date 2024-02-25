import RegistrationSliderbar from "../components/clerk/RegistrationSliderbar";
import ClerkNums from "../components/clerk/ClerkNums";
import ClerkCards from "../components/clerk/clerkCards";

const RegistrationClerk = () =>{
return(
    <>
    <div className="flex text-gray-900   ">
  
            
  <RegistrationSliderbar />
  


  <div className="lg:w-4/5 flex-col lg:m-auto sm:w-screen ">
    <ClerkNums />
    <ClerkCards />
    <br/>
    <br/>
   
      





                                                                               
   </div>

  </div>
    </>
);

}

export default RegistrationClerk