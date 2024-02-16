
const PoliceReq = () =>{
   return(
      <>
      <section className="bg-cream-lighter p-4 shadow">
      <div className="md:flex">
        <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-xl mb-6 relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900 ">Send Request</h2>
      </div>
      <form>
        <div className="md:flex mb-8">
          <div className="md:w-1/3">
            <legend className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900">Criminal Information</legend>
            <p className="text-xs font-light text-red px-4 py-2">This entire section is required.</p>
          </div>
          <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-sm font-bold">SSN</label>
              <input className="w-full shadow-inner p-4 border-0" type="text" name="SSN" placeholder="H23ERT" />
            </div>
            <div className="md:flex mb-4">
              <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold">First Name</label>
                <input className="w-full shadow-inner p-4 border-0" type="text" name="firstName" placeholder="naol" />
              </div>
              <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold">Last Name</label>
                <input className="w-full shadow-inner p-4 border-0" type="text" name="lastName" placeholder="kuma" />
              </div>
            </div>
            <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold">Date Of Birth</label>
                <input className="w-full shadow-inner p-4 border-0" type="text" name="dateOfBirth" placeholder="1993" />
              </div>
              <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold">Region</label>
                <input className="w-full shadow-inner p-4 border-0" type="text" name="region" placeholder="Oromia" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="md:w-1/3">
            <legend className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900">Appearance Information</legend>
          </div>
          <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-sm font-bold">Height</label>
              <input className="w-full shadow-inner p-4 border-0" type="text" name="height" placeholder="168" />
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold">Gender</label>
              <input className="w-full shadow-inner p-4 border-0" type="text" name="gender" placeholder="male" />
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-charcoal-darker text-sm font-bold">Eye Color</label>
              <input className="w-full shadow-inner p-4 border-0" type="text" name="eyecolor" placeholder="Blue" />
            </div>
          </div>
        </div>
        
        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <legend className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900">Description</legend>
          </div>
          <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <textarea className="w-full shadow-inner p-4 border-0" placeholder="why do you need the information" rows="6"></textarea>
          </div>
        </div>
        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <legend className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-sky-900">Suspect Image</legend>
          </div>
          <div className="md:flex-1 px-3 text-center">
            <div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
              <input className="opacity-0 absolute pin-x pin-y" type="file" name="cover_image" />
              Add Suspect Image
            </div>
          </div>
        </div>
        <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
          <div className="md:flex-1 px-3 text-center md:text-right pt-10">
            <input type="hidden" name="sponsor" value="0" />
            <input className="inline-flex items-center text-slate-100 uppercase justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded  shadow-md bg-sky-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" type="submit" value="Send Request" />
          </div>
        </div>
      </form>
    </section>
  </>
   );


};
export default PoliceReq;