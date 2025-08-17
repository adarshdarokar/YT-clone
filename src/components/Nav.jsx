import React from 'react';
import 'remixicon/fonts/remixicon.css';
import '../App.css';

const Nav = () => {
  const categories = [
    "All","Music","Movies","Mixes","APIs","Podcasts","Cricket","Data Structures",
    "News","CSS","T-Series","Karan Aujla","Arijit","Honey Singh","Shreya"
  ];

  return (
    <div
      className="w-full bg-[#000000eb] fixed top-0 left-0 z-50"
    >
      {/* Top bar */}
      <div className="h-14 flex items-center justify-between px-3 md:px-6 border-b border-neutral-800">
        {/* left */}
        <div className="flex items-center gap-3">
          <i className="ri-menu-line text-2xl md:hidden" />
          <i className="ri-youtube-fill text-[#ff0033] text-3xl"></i>
          <span className='-tracking-[1.5px] text-[17px] font-bold text-white'>YouTube</span>
        </div>

        {/* center search (PC only) */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="flex w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-l-full text-white outline-none"
            />
            <button className="px-4 bg-neutral-800 border border-neutral-700 rounded-r-full">
              <i className="ri-search-line text-xl text-gray-300"></i>
            </button>
          </div>
        </div>

        {/* right */}
        <div className='flex items-center justify-center gap-4'>
          <i className="ri-search-line text-gray-300 text-xl md:hidden"></i>
          <i className="ri-vidicon-line text-gray-300 hidden md:block"></i>
          <i className="ri-notification-3-line text-gray-300 hidden md:block"></i>
          <div className='h-8 w-8 rounded-full overflow-hidden'>
            <img
              className='w-full h-full object-cover'
              src="https://i.pinimg.com/originals/e2/c6/45/e2c6457e8499d98fd4620d1eaf0a7f02.jpg"
              alt="me"
            />
          </div>
        </div>
      </div>

      {/* category pills (horizontal scroll) */}
      <div className="flex gap-2 overflow-x-auto flex-nowrap no-scrollbar px-3 md:px-6 py-2 bg-[#0f0f0f]">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="bg-[#272727] py-1.5 px-5 rounded-md text-white flex items-center justify-center h-9 flex-shrink-0 text-sm"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Nav;
