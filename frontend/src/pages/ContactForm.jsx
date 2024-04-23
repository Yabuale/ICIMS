import React from 'react';

function ContactForm() {
    return (
      <>
        <div className="bg-white py-12 pt-44">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-sky-900 font-semibold tracking-wide uppercase">Contact Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Need to Reach Us?
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Have questions about our services or need assistance? Contact us using the information below. But remember, discretion is advised.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <ContactDetail icon={<LocationIcon />} title="Hideout Address">
                            <p>123 Dark Alley, Basement<br/>Sinister City, Underworld 666</p>
                        </ContactDetail>
                        <ContactDetail icon={<PhoneIcon />} title="Emergency Line">
                            <p>(666) 666-6666</p>
                        </ContactDetail>
                        <ContactDetail icon={<MailIcon />} title="Secure Email">
                            <p>contact@sinister.com</p>
                        </ContactDetail>
                        <ContactDetail icon={<ClockIcon />} title="Availability">
                            <p>24/7<br/>Emergency calls accepted</p>
                        </ContactDetail>
                    </dl>
                </div>
            </div>
        </div>
        </>
    );
}

function ContactDetail({ icon, title, children }) {
    return (
        <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                    {icon}
                </div>
            </div>
            <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                    {title}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                    {children}
                </dd>
            </div>
        </div>
    );
}

function LocationIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13s-7-7.75-7-13c0-3.866 3.134-7 7-7zM12 10a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>
  );
}

function PhoneIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M3 21l4-4m5-1a9 9 0 01-9-9V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H6a7 7 0 007 7h1a1 1 0 010 2h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a7 7 0 00-4.102-6.35l1.743-1.743A1 1 0 019 7V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H10a7 7 0 007 7h1a1 1 0 010 2h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a7 7 0 00-4.102-6.35l3.399-3.398A8 8 0 0117 9"/>
      </svg>
  );
}

function MailIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7.5l10 8.8 10-8.8L12 2z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 7.5l10 8.8 10-8.8M12 22V11"/>
      </svg>
  );
}

function ClockIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 19.075 1 13 5.925 2 12 2zm0 0v9l4.25 2.55"/>
      </svg>
  );
}


export default ContactForm;
