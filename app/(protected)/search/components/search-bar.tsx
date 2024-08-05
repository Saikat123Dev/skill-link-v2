'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFocus = () => {
    router.push('/search');
  };



  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const query = encodeURIComponent(searchQuery);
    const filter = encodeURIComponent(selectedFilter);
    router.push(`/search?query=${query}&filter=${filter}`);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onFocus={handleFocus}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search commodities"
            className="border border-gray-300 rounded-lg p-2 max-w-7xl focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out hover:border-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white ml-6 rounded-lg p-2 hover:bg-blue-400 transition duration-200 ease-in-out">
            Search
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <label htmlFor="filter" className="mr-1 text-gray-700">Filter By</label>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          id="filter"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out hover:border-blue-500"
        >
          <option value="">Select</option>
          <option value="country">Country</option>
          <option value="institutionName">Institution</option>
          <option value="primarySkillset">Primary Skill</option>
          <option value="userGender">User Gender</option>
          <option value="profession">Profession</option>
        </select>
      </div>
    </>
  );
}

export default SearchBar;