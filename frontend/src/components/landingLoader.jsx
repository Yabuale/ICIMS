import React from "react";

function LandingLoader(Component){

    return function LandingLoaderComponent({isLoading, ...props}){

        if (!isLoading) return <Component{...props} />;
        return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 mt-4 w-full">
  <div className="relative p-6 w-full bg-sky-50 rounded-lg overflow-hidden shadow-2xl hover:shadow-md ">
	<div className="animate-pulse flex flex-col">
	  <div className="rounded w-full h-52 bg-gray-200"></div>
	  
      <div className="flex flex-col mt-5">
      <div className="mt-2 w-1/3 h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
		
	  </div>
	  <div className="grid grid-cols-2  gap-x-2 gap-y-1">
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
	  </div>
      <div className="flex flex-col mt-5">
		<div className="w-full h-5 bg-gray-200 mb-1 rounded"></div>
        <div className="w-full h-5 bg-gray-200 rounded"></div>
		<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
		
	  </div>
	  <div className="flex items-center mt-5">
		
		<div className="flex justify-between w-full ml-2">
		  <div className="w-5/12 h-3 bg-gray-200 rounded"></div>
		</div>
	  </div>
	</div>
  </div>

  

  <div className="relative p-6 w-full bg-sky-50 rounded-lg overflow-hidden shadow-2xl hover:shadow-md ">
	<div className="animate-pulse flex flex-col">
	  <div className="rounded w-full h-52 bg-gray-200"></div>
	  
      <div className="flex flex-col mt-5">
      <div className="mt-2 w-1/3 h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
		
	  </div>
	  <div className="grid grid-cols-2  gap-x-2 gap-y-1">
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
	  </div>
      <div className="flex flex-col mt-5">
		<div className="w-full h-5 bg-gray-200 mb-1 rounded"></div>
        <div className="w-full h-5 bg-gray-200 rounded"></div>
		<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
		
	  </div>
	  <div className="flex items-center mt-5">
		
		<div className="flex justify-between w-full ml-2">
		  <div className="w-5/12 h-3 bg-gray-200 rounded"></div>
		</div>
	  </div>
	</div>
  </div>
  <div className="relative p-6 w-full bg-sky-50 rounded-lg overflow-hidden shadow-2xl hover:shadow-md ">
	<div className="animate-pulse flex flex-col">
	  <div className="rounded w-full h-52 bg-gray-200"></div>
	  
      <div className="flex flex-col mt-5">
      <div className="mt-2 w-1/3 h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
		
	  </div>
	  <div className="grid grid-cols-2  gap-x-2 gap-y-1">
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
		<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
	  </div>
      <div className="flex flex-col mt-5">
		<div className="w-full h-5 bg-gray-200 mb-1 rounded"></div>
        <div className="w-full h-5 bg-gray-200 rounded"></div>
		<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
		
	  </div>
	  <div className="flex items-center mt-5">
		
		<div className="flex justify-between w-full ml-2">
		  <div className="w-5/12 h-3 bg-gray-200 rounded"></div>
		</div>
	  </div>
	</div>
  </div>
</div>
        </>
        );
}
}

export default LandingLoader;