import React from 'react';
import diuOne from '../../images/DIU (1).png'
const Collab = () => {
    return (
        <div className="mt-12">
            <section aria-labelledby="partners" className="text-center grid gap-8 place-items-center">
    <div className="grid gap-4">
      <h2 id="partners" class="text-3xl lg:text-5xl font-bold text-teal-400">Our Partners</h2>
      <p className="lg:w-full max-w-lg text-start ml-5 lg:ml-0">We’ve partnered with hundreds of smart home brands to help you create a smart home that fits your needs and doesn’t lock
      you in.</p>
    </div>
    <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
      <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
        <img src={diuOne} alt="Partner" className="h-16 w-20" />
      </div>
      <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
        <img src={diuOne} alt="Partner" className="h-16 w-20" />
      </div>
      <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
        <img src={diuOne} alt="Partner" className="h-16 w-20" />
      </div>
      <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
        <img src={diuOne} alt="Partner" className="h-16 w-20"/>
      </div>
     
    </div>
  </section>
        </div>
    );
};

export default Collab;