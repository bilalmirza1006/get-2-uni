'use client';
import Dropdown from '@/app/(components)/ui/Dropdown';
import FilterBar from '@/app/(components)/ui/Filterbar';
import WorldRankIcon from '@/public/home/WorldRankIcon';
import { BrainCircuit, Calendar, Clock, Globe, WholeWord } from 'lucide-react';
import React, { useState } from 'react';
import UniversityDetailCard from './UniversityDetailCard';

const UniversitiesGridTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState('Universities');

  const options = [
    {
      id: 1,
      label: "USA",
    },
    { id: 2, label: "UK" },
    { id: 3, label: "Canada" },
  ];

  const batchIntakeOptions = [{
    id: 1,
    label: "Summer",
  },
  { id: 2, label: "Fall" },
  { id: 3, label: "Winter" },]


  const UniversityOptions = [
    { id: 1, label: "UNIVERSITY OF NEW HAVEN", },
    { id: 2, label: "UNIVERSITY OF NEW SOUTH ASIA", },
    { id: 3, label: "UNIVERSITY OF AMERICA", },

  ];

  const CountryOptions = [
    { id: 1, label: "United States", },
    { id: 2, label: "United Kingdom", },
    { id: 3, label: "Germany", },
    { id: 4, label: "France", },
  ];

  const universities = [
    {
      name: "UNIVERSITY OF NEW HAVEN",
      program: "MS Computer Science",
      locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
      tuition: "$1890/yr",
      applicationFee: "$76",
      deposit: "$200",
      startDate: "Full 01 May / 309 days",
      image: "/images/university1.png",
    },
    {
      name: "UNIVERSITY OF NEW SOUTH ASIA",
      program: "MS Computer Science",
      locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
      tuition: "$1890/yr",
      applicationFee: "$76",
      deposit: "$200",
      startDate: "Full 01 May / 309 days",
      image: "/images/university1.png",
    },
    {
      name: "UNIVERSITY OF NEW HAVEN",
      program: "MS Computer Science",
      locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
      tuition: "$1890/yr",
      applicationFee: "$76",
      deposit: "$200",
      startDate: "Full 01 May / 309 days",
      image: "/images/university1.png",
    },
    {
      name: "UNIVERSITY OF SOUTHERN ASIA",
      program: "MS Computer Science",
      locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
      tuition: "$1890/yr",
      applicationFee: "$76",
      deposit: "$200",
      startDate: "Full 01 May / 309 days",
      image: "/images/university1.png",
    },
    {
      name: "UNIVERSITY OF NEW HAVEN",
      program: "MS Computer Science",
      locations: "Kansas City, MO | Dallas, TX | Miami, FL | Jersey City, NJ | Kenosha, WI",
      tuition: "$1890/yr",
      applicationFee: "$76",
      deposit: "$200",
      startDate: "Full 01 May / 309 days",
      image: "/images/university1.png",
    },
  ];

  const handleFilterChange = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
  };
  return (
    <>
      <div className="w-full bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between ">
        <div className="font-semibold font-inter text-xl text-Primarytext">
          We Found <span className="text-[#C7044C]">{data.length} Courses</span>
        </div>
        <div className='flex gap-5'>
          <div className="flex bg-[#F0F0F0B2] rounded-[5.4px] p-1">
            {['Universities', 'Scholarship'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-inter font-medium transition-all duration-200 ${activeTab === tab
                  ? 'bg-white shadow text-black font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <Dropdown
            defaultTextColor="!text-white"
            defaultValue={'Master'}
            iconColor={'white'}
            className="!py-2 bg-primarycolor !text-white"

          />
        </div>
      </div>
      <div>
        <FilterBar
          options={options}
          placeholder="Search Country"
          onFilterChange={handleFilterChange}
          icon={Globe}
        />

      </div>
      <div>
        <FilterBar
          options={batchIntakeOptions}
          placeholder="Search Intake Batch"
          onFilterChange={handleFilterChange}
          icon={Calendar}
        />

      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
        {universities.map((university, index) => (
          <UniversityDetailCard key={index} {...university} />
        ))}
      </div>
    </>
  );
};

export default UniversitiesGridTab;
