import React from 'react';

const AddBranch = () => {
    return (
        <>
            <div className="bg-sky-50 border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
            <div class="flex justify-center py-4">
           <div class="flex bg-gray-50 rounded-full md:p-4 p-2 border-2 border-sky-800">
           <svg
                   className="w-12 text-sky-900"
                   viewBox="0 0 24 24"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeMiterlimit="10"
                   stroke="currentColor"
                   fill="none"
                 >
                   <rect x="3" y="1" width="7" height="12" />
                   <rect x="3" y="17" width="7" height="6" />
                   <rect x="14" y="1" width="7" height="6" />
                   <rect x="14" y="11" width="7" height="12" />
                 </svg>
           </div>
         </div>
     
         <div class="flex justify-center">
           <div class="flex">
             <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Add Branch</h1>
           </div>
         </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Branch Name</label>
                        <input type="text" id="name" name="name" placeholder="Branch"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Region</label>
                        <select id="gender" name="Region"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                            <option value="">Region</option>
                            <option value="Addis Ababa">Addis Ababa</option>
                            <option value="Afar Region">Afar Region</option>
                            <option value="Amhara Region">Amhara Region</option>
                            <option value="Amhara Region">Benishangul-Gumuz Region</option>
                            <option value="Amhara Region">Central Ethiopia Region</option>
                            <option value="Amhara Region">Dire Dawa</option>
                            <option value="Amhara Region">Gambela Region</option>
                            <option value="Amhara Region">Harari Region</option>
                            <option value="Amhara Region">Oromia Region</option>
                            <option value="Amhara Region">Sidama Region</option>
                            <option value="Amhara Region">South Ethiopia Region</option>
                            <option value="Amhara Region">Southwest Ethiopia Peoples’ Region</option>
                            <option value="Amhara Region">Tigray Region</option>
                        </select>
                    </div>
                    
                    <div class="mb-4">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Address Details
                </label>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <input type="text" name="area" id="area" placeholder="Enter Zone"
                                class="w-full md:text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <input type="text" name="city" id="city" placeholder="Enter city"
                                class="w-full md:text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <input type="text" name="state" id="state" placeholder="Enter Woreda"
                                class="w-full md:text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <input type="text" name="post-code" id="post-code" placeholder="Kebele"
                                class="w-full md:text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
            </div>
                    
                    <div>
                        <button type="submit" className="bg-sky-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddBranch;
