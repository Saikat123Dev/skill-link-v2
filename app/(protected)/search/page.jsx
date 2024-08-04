'use client'

import React, { useState, useEffect } from 'react';
import Data from '@/utils/SearchData/data.json';
import Link from 'next/link';
import ScrollToTop from '../my_profile/[userId]/components/helper/scroll-to-top';
import { useSearchParams } from 'next/navigation';

function Page() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    setData(Data);
  }, []);

  useEffect(() => {
    const query = searchParams.get('query');
    const filter = searchParams.get('filter');

    let filtered = data;

    if (query) {
      filtered = filtered.filter(item => {
        if (filter && filter !== '') {
          return item[filter].toLowerCase().includes(query.toLowerCase());
        } else {
          return Object.values(item).some(value => 
            value.toString().toLowerCase().includes(query.toLowerCase())
          );
        }
      });
    }

    setFilteredData(filtered);
  }, [searchParams, data]);

  return (
    <>
      <p>ygygqygygs</p>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">SearchList</h2>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 p-2">Stream</th>
            <th className="border border-gray-300 p-2">Username</th>
            <th className="border border-gray-300 p-2">Primary Skillset</th>
            <th className="border border-gray-300 p-2">Institution Name</th>
            <th className="border border-gray-300 p-2">Country</th>
            <th className="border border-gray-300 p-2">Profession</th>
            <th className="border border-gray-300 p-2">View Profile</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 transition duration-200 ease-in-out">
              <td className="border border-gray-300 p-4 text-center bg-white text-gray-800">{item.stream}</td>
              <td className="border border-gray-300 p-4 text-center bg-white text-gray-800">{item.username}</td>
              <td className="border border-gray-300 p-4 text-center bg-white text-gray-800">{item.primarySkillset}</td>
              <td className="border border-gray-300 p-4 text-center bg-white text-gray-800">{item.institutionName}</td>
              <td className="border border-gray-300 p-4 text-center bg-white text-gray-800">{item.country}</td>
              <td className="border border-gray-300 p-4 text-center bg-white text-gray-800">{item.profession}</td>
              <td className="border border-gray-300 p-4 text-center bg-white text-gray-800">
                <Link href='/profile'>
                  <div className="w-10 h-10 bg-black rounded-full flex justify-center items-center hover:bg-gray-800 transition duration-300 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ScrollToTop />
    </>
  );
}

export default Page;