const WantedCard = (props) => {
    const { imageUrl, subtitle, title, description,name,alias, date_posted,reward,last_known_location,criminal_offenses } = props;
  
    return (
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-sky-50 p-6 rounded-lg shadow-2xl">
          <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full  object-scale-down object-center mb-6" src='https://avatars.githubusercontent.com/u/101497477?v=4' alt="Image Size 720x400" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Posted : 2024-02-09</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-1">Name of </h2>
          <div className="flex"><p className="mr-10"><span className="text-sky-800 font-bold">Alias:</span> addis</p> 
          <p><span className="text-sky-800 font-bold">Age:</span> 21</p></div>
          <div className="flex"><p className="mr-10"><span className="text-sky-800 font-bold">Last seen:</span> addis  </p> 
          <p><span className="text-sky-800 font-bold">wanted for:</span> Murder</p></div>
          
          
          <p className="leading-relaxed text-base mt-2 mb-2">this is the discription of the criminal with alot of stuff to make it a little bit interesting </p>
          <a href="#" className="text-blue-500 hover:text-blue-700 flex transition ease-in-out delay-100  hover:-translate-y-0 hover:translate-x-1 duration-300">Read more <span className=" block hover:translate-x-2 duration-300 ">-&gt;</span></a>
        </div>
      </div>
    );
  };
  
  export default WantedCard;
  