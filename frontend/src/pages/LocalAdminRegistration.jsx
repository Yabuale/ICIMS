import React from 'react';

function LocalAdminRegistration() {
  return (
    <>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="mt-20 flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <svg
              className="w-8 h-8 mr-2 text-sky-900"
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
            ICIMS
          </a>
          <div className="w-full bg-gray-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                  <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                </div>
                <button type="submit" className="w-full font-extrabold text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-base px-5 py-2.5 text-center shadow-md bg-sky-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Create an account</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LocalAdminRegistration;
