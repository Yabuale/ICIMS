import NavBar from "../components/navBar";
import Footer from "../components/Footer";
const Api = () =>{
    return(
<>
<NavBar />
<div className="py-20">
<br/>
<br/>
<div className="flex flex-wrap w-full  p-4">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className="sm:text-4xl text-5xl  font-bold title-font mb-2 text-sky-950">Api</h1>
        <div className="h-1 w-10 bg-sky-800 rounded"></div>
      </div>
    </div>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-10 pb-16 text-center ">

    <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span class="inline-block">
            <span class="relative whitespace-nowrap text-sky-900">
            <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-sky-300" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span class="relative"> ICIMS </span></span>
        </span>
        <span class="inline-block"> &nbsp; Public Api.</span>
    </h1>

    <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
        <span class="inline-block">Integrate Criminal informations &nbsp;</span>
        <span class="inline-block">into your own  projects.</span>
    </p>

    <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
        <a class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300  animate-fade-in-left"
            href="#">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>

            <span class="ml-3">Documentation</span>
        </a>
        <div class="relative flex flex-1 flex-col items-stretch sm:flex-none" data-headlessui-state="">
            <button class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-sky-900 text-sky-900 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right" id="headlessui-menu-button-:r4:" aria-haspopup="true" aria-expanded="false" data-headlessui-state="" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

                <span class="ml-3">Try it on postman</span>
            </button>
        </div>
    </div>
</div>






<div class="lg:flex md:flex-row sm:flex-noe mr-5">
<div class="container mb-5">
<section class="text-gray-600 body-font ">
  <div class="">
    <div class="flex   sm:items-center md:w-2/3 mx-auto">
      <div class="  flex sm:items-center items-start flex-col   md:flex-row">
        <div class="flex-shrink-0 lg:w-20 lg:h-20 md:w-14 md:h-14 bg-sky-100 text-sky-950 rounded-full inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>

        </div>
        <div class=" sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Get wanted</h2>
          <p class="leading-relaxed">Get request, fetchs wanted criminals from database</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<div class=" w-full mx-auto ">
    <div class="bg-gray-900 text-white p-4 rounded-md">
        <div class="flex justify-between items-center mb-2">
            <span class="text-gray-400">Code:</span>
            <button class="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" data-clipboard-target="#code">
        Copy
      </button>
        </div>
        <div class="overflow-x-auto">
            <pre id="code" class="text-gray-300">
        <code>
        // fetch wanted criminals as a json <br/>
  GET http://127.0.0.1:8000/wanted 
</code>

</pre>
        </div>
    </div>
</div>
</div>
<br/>

<br/>

<div class="lg:flex md:flex-row sm:flex-noe mr-5">
<div class="container mb-5">
<section class="text-gray-600 body-font ">
  <div class="">
    <div class="flex   sm:items-center md:w-2/3 mx-auto">
      <div class="  flex sm:items-center items-start flex-col   md:flex-row">
        <div class="flex-shrink-0 lg:w-20 lg:h-20 md:w-14 md:h-14 bg-sky-100 text-sky-950 rounded-full inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
</svg>
        </div>
        <div class=" sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Check status</h2>
          <p class="leading-relaxed">POST request, Check if a person have a criminal record</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<div class=" w-full mx-auto ">
    <div class="bg-gray-900 text-white p-4 rounded-md">
        <div class="flex justify-between items-center mb-2">
            <span class="text-gray-400">Code:</span>
            <button class="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" data-clipboard-target="#code">
        Copy
      </button>
        </div>
        <div class="overflow-x-auto">
            <pre id="code" class="text-gray-300">
        <code>
//check if a person has criminal record using SSN <br/>
POST http://127.0.0.1:8000/wanted<br/>
body {"{"}<br/>

"ssn": "ssn-xxx-yyy"<br/>
{"}"};


</code>

</pre>
        </div>
    </div>
</div>



</div>

<br/>
<br>

</br>

<div class="lg:flex md:flex-row sm:flex-noe mr-5">
<div class="container mb-5">
<section class="text-gray-600 body-font ">
  <div class="">
    <div class="flex   sm:items-center md:w-2/3 mx-auto">
      <div class="  flex sm:items-center items-start flex-col   md:flex-row">
        <div class="flex-shrink-0 lg:w-20 lg:h-20 md:w-14 md:h-14 bg-sky-100 text-sky-950 rounded-full inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd" />
</svg>

        </div>
        <div class=" sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Responses</h2>
          <p class="leading-relaxed">The responses will be in json formats, examples..</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<div class=" w-full mx-auto ">
    <div class="bg-gray-900 text-white p-4 rounded-md">
        <div class="flex justify-between items-center mb-2">
            <span class="text-gray-400">Code:</span>
            <button class="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" data-clipboard-target="#code">
        Copy
      </button>
        </div>
        <div class="overflow-x-auto">
            <pre id="code" class="text-gray-300">
        <code>
//Response for GET <br/>
{"["} <br/>
    {"{"} <br/>
        "id": 1, <br/>
        "name": "abebe", <br/>
        "alias": "nan", <br/>
        "description": "Asfafas fasfasfas", <br/>
        "age": 21, <br/>
        "gender": "male", <br/>
        "nationality": "ethiopian", <br/>
        "criminal_offenses": "murder", <br/>
        "last_known_location": "addis", <br/>
        "reward": "23.00", <br/>
        "contact_information": "AfaffS", <br/>
        "date_posted": "2024-02-09" <br/>
    {"}"}, <br/>
    {"{"} <br/>
        "id": 2, <br/>
        "name": "abebe", <br/>
        "alias": "nan", <br/>
        "description": "Asfafas fasfasfas", <br/>
        "age": 21, <br/>
        "gender": "male", <br/>
        "nationality": "ethiopian", <br/>
        "criminal_offenses": "murder", <br/>
        "last_known_location": "addis", <br/>
        "reward": "23.00", <br/>
        "contact_information": "AfaffS", <br/>
        "date_posted": "2024-02-10" <br/>
    {"}"} <br/>
{"]"} <br/>

//Response for POST <br/>

body {"{"}<br/>
"record": "TRUE"<br/>
"msg": "The ssn you entered has a criminal record contact police stations for more"<br/>
{"}"};


</code>

</pre>
        </div>
    </div>
</div>



</div>


 
    </div>

    <Footer />
</>

    );

}
export default Api;