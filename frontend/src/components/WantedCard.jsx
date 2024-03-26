import { NavLink } from "react-router-dom";
const WantedCard = (props) => {
    const { id,name,alias,description,age,criminal_offenses,last_known_location, date_posted} = props;
  
    return (
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-sky-50 p-6 rounded-lg shadow-2xl">
          <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full  object-scale-down object-center mb-6" src='https://avatars.githubusercontent.com/u/101497477?v=4' alt="criminal img" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Posted : {date_posted}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-1">{name} </h2>
          <div className="flex"><p className="mr-10"><span className="text-sky-800 font-bold">Alias:</span> {alias} </p> 
          <p><span className="text-sky-800 font-bold">Age:</span> {age}</p></div>
          <div className="flex"><p className="mr-10"><span className="text-sky-800 font-bold">Last seen:</span> {last_known_location}  </p> 
          <p><span className="text-sky-800 font-bold">wanted for:</span> {criminal_offenses}</p></div>
          <p className="leading-relaxed text-base mt-2 mb-2">{description} </p>
          <NavLink to={`readmore/${id}`} className="text-blue-500 hover:text-blue-700 flex transition ease-in-out delay-100  hover:-translate-y-0 hover:translate-x-1 duration-300">Read more <span className=" block hover:translate-x-2 duration-300 ">-&gt;</span></NavLink>
        </div>
      </div>
    );
  };
  
  export default WantedCard;
  