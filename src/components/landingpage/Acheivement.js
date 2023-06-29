import React from 'react';

const Acheivement = () => {
    return (
        <div class="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10 mt-5 md:mt-48 lg:mt-48">
        <div class="stat place-items-center stats shadow h-48 bg-black">
            <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div class="stat-title text-white text-xl">Page Views</div>
            <div class="stat-value text-violet-600">2.6M</div>
            <div class="stat-desc text-white">21% more than last month</div>
        </div>
        <div className="stat place-items-center stats shadow h-48 bg-black">
            <div className="stat-title text-white text-xl">Users</div>
            <div className="stat-value text-violet-600">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
        <div class="stat place-items-center stats shadow h-48 bg-black">
            <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div class="stat-title text-white text-xl">New Registers</div>
            <div class="stat-value text-violet-600">1,200</div>
            <div class="stat-desc text-white">↘︎ 90 (14%)</div>
        </div>
    </div>
    );
};

export default Acheivement;