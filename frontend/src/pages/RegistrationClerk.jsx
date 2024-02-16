import RegistrationSliderbar from "../components/clerk/RegistrationSliderbar";
import ClerkNums from "../components/clerk/ClerkNums";
import ClerkCards from "../components/clerk/clerkCards";

const RegistrationClerk = () =>{
return(
    <>
    <div className="flex h-screen  text-gray-900  ">
  
            
  <RegistrationSliderbar />
  


  <div className="w-full">
    <ClerkNums />
    <ClerkCards />
   
      






   </div>

  </div>
    </>
);

}

export default RegistrationClerk