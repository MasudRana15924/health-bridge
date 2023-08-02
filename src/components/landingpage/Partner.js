import React from 'react';


const Partner = () => {
    return (
        <div className="mt-24">
            <div aria-labelledby="qualities" className="relative">
                <h2 id="qualities" className="sr-only">Our Qualities</h2>
                <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between ">
                    <div className="grid gap-4 justify-items-center text-center md:flex-1">
                        <div className=" rounded-full border-8 border-teal-400 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold">Safe</h3>
                        
                    </div>
                    <div
                        className="grid gap-4 justify-items-center text-center md:flex-1 ">
                        <div className="rounded-full border-8 border-teal-400 p-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold">Efficient</h3>
                        
                    </div>
                    <div className="  grid gap-4 justify-items-center text-center md:flex-1">
                        <div className=" rounded-full  border-8 border-teal-400 p-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold">Proven</h3>
                        
                    </div>
                </div>
            </div>
            <div className="wrapper">
                {/* <div className="center-line">
                    <a href="#" class="scroll-icon"><i className="fas fa-caret-up"></i></a>
                </div> */}
                <div className="row row-1">
                    <section>
                        <i className="icon fas fa-home"></i>
                        <div className="details">
                            <span className="title">Title of Section 1</span>
                            <span>1st Jan 2021</span>
                        </div>
                        <p className="text-start">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                        <div className="bottom">
                            <a href="#">Read more</a>
                            <i>- Someone famous</i>
                        </div>
                    </section>
                </div>
                <div className="row row-2">
                    <section>
                        <i className="icon fas fa-star"></i>
                        <div className="details">
                            <span className="title">Title of Section 2</span>
                            <span>2nd Jan 2021</span>
                        </div>
                        <p className="text-start">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                        <div className="bottom">
                            <a href="#">Read more</a>
                            <i>- Someone famous</i>
                        </div>
                    </section>
                </div>
                <div className="row row-1">
                    <section>
                        <i className="icon fas fa-rocket"></i>
                        <div className="details">
                            <span className="title">Title of Section 3</span>
                            <span>3rd Jan 2021</span>
                        </div>
                        <p className="text-start"> Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                        <div className="bottom">
                            <a href="#">Read more</a>
                            <i>- Someone famous</i>
                        </div>
                    </section>
                </div>
                <div className="row row-2">
                    <section>
                        <i className="icon fas fa-globe"></i>
                        <div className="details">
                            <span className="title">Title of Section 4</span>
                            <span>4th Jan 2021</span>
                        </div>
                        <p className="text-start">Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                        <div className="bottom">
                            <a href="#">Read more</a>
                            <i>- Someone famous</i>
                        </div>
                    </section>
                </div>
                
            </div>
        </div>
    );
};

export default Partner;