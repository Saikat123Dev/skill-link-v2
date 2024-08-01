'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  const handleFocus = () => {
    router.push('/search');
  };

  return (
    <>
      <div>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onFocus={handleFocus}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search commodities"
          className="border border-gray-300 rounded-lg p-2 max-w-7xl focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out hover:border-blue-500"
        />
        
        <button className="bg-blue-500 text-white ml-6 rounded-lg p-2 hover:bg-blue-400 transition duration-200 ease-in-out">
          Search
        </button>
      </div>
      <div className="flex items-center">
        <label htmlFor="filter" className="mr-1 text-gray-700">Filter By</label>
        <select
          id="filter"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out hover:border-blue-500"
        >
          <option value="">Select</option>
          <option value="Country">Country</option>
          <option value="Institution">Institution</option>
          <option value="Primary Skill">Primary Skill</option>
          <option value="User Gender">User Gender</option>
          <option value="Profession">Profession</option>
        </select>
        <button className="bg-blue-500 text-white rounded-lg p-2 ml-2 hover:bg-blue-400 transition duration-200 ease-in-out">
          Apply
        </button>
      </div>
    </>
  );
}

export default SearchBar;
