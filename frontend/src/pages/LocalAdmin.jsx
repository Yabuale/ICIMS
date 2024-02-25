import LocalAdminSlidebar from "../components/localAdmin/LocalAdminSliderbar";
import LocalAdmincards from "../components/localAdmin/LocalAdmincards";
import LocalAdminnums from "../components/localAdmin/LocalAdminnums";



const LocalAdmin = () =>{
    return(
<>
<div className="flex h-screen  text-gray-900 ">
     <LocalAdminSlidebar />
    <div className="w-full">
    <LocalAdminnums />
    <LocalAdmincards />
    

    </div>
</div>
   
</>

    );


}

export default LocalAdmin