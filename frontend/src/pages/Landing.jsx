import React,{useEffect,useState} from "react";
import Wanted from "../components/Wanted";
import LandingLoaderComponent from "../components/landingLoader";
const Landing = () => {
    const WantedLoading = LandingLoaderComponent(Wanted);
    const [appState,setAppState] = useState({
        loading:false,
        wanted:null,
    });
    useEffect(() => {
        setAppState({ loading: true });
      
        const apiUrl = 'http://127.0.0.1:8000/';
      
        fetch(apiUrl)
          .then((data) => data.json())
          .then((wanted) => {
    
            setAppState({ loading: false, wanted: wanted.wanted });
          });
      }, []);
    
    
    return(
        <div>
        <div>   
        </div>
        <h1>&nbsp;</h1>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto max-w-7x1">
    <div className="flex flex-wrap w-full mb-4 p-4">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className="sm:text-4xl text-5xl  font-bold title-font mb-2 text-sky-950">Wanted</h1>
        <div className="h-1 w-20 bg-sky-800 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
    
    <WantedLoading isLoading={appState.loading} wanted={appState.wanted}/>

    </div>
    
  </div>
</section>
       
     </div>
    )
}

export default Landing;