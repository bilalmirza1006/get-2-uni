'use client'
import React, { useState } from 'react'
import Hero from './Hero'
import Dropdown from '@/app/(components)/ui/Dropdown';
import FilterBar from '@/app/(components)/ui/Filterbar';
import { BrainCircuit, Calendar, Globe, Recycle, RefreshCcw } from 'lucide-react';
import AboutUniversityCard from './AboutUniversityCard';

const InstantFindLayout = () => {
    const [activeTab, setActiveTab] = useState("Universities");

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

    const programs = [
        { id: 1, label: "Computer Science", },
        { id: 2, label: "Business Analytics", },
        // { title: "Cyber Security", duration: "1–4 Years", price: 560 },
        // { title: "MBA", duration: "1–4 Years", price: 560 },
        // { title: "Artificial Intelligence", duration: "1–4 Years", price: 560 },
        // { title: "programs Science", duration: "1–4 Years", price: 560 },
        // { title: "Software Engineering", duration: "1–4 Years", price: 560 },
        // { title: "Information Technology", duration: "1–4 Years", price: 560 },
        // { title: "Digital Marketing", duration: "1–4 Years", price: 560 },
        // { title: "Mechanical Engineering", duration: "1–4 Years", price: 560 },
        // { title: "Electrical Engineering", duration: "1–4 Years", price: 560 },
        // { title: "Civil Engineering", duration: "1–4 Years", price: 560 },
        // { title: "Biomedical Engineering", duration: "1–4 Years", price: 560 },
        // { title: "Economics", duration: "1–4 Years", price: 560 },
        // { title: "Accounting & Finance", duration: "1–4 Years", price: 560 },
        // { title: "Project Management", duration: "1–4 Years", price: 560 },
        // { title: "Psychology", duration: "1–4 Years", price: 560 },
        // { title: "Architecture", duration: "1–4 Years", price: 560 },
        // { title: "Media & Communication", duration: "1–4 Years", price: 560 },
        // { title: "International Relations", duration: "1–4 Years", price: 560 },
    ];

    const universities = [
        {
            name: "UNIVERSITY OF NEW HAVEN",
            program: "MS Computer Science",
            locations: [
                "Kansas City, MO",
                "Dallas, TX",
                "Miami, FL",
                "Jersey City, NJ",
                "Kenosha, WI",
            ],
            tuition: "$1890/yr",
            applicationFee: "$76",
            gre: "Waiver",
            documents: 18,
            deposit: "$200",
            scholarship: "$200",
            startDate: "Full 01 May / 309 days",
            image: "/images/university1.png",
        },
        {
            name: "UNIVERSITY OF NEW SOUTH ASIA",
            program: "MS Computer Science",
            locations: [
                "Boston, MA",
                "Houston, TX",
                "Seattle, WA",
                "San Diego, CA",
                "Chicago, IL",
            ],
            tuition: "$2100/yr",
            applicationFee: "$80",
            gre: "Required",
            documents: 16,
            deposit: "$250",
            scholarship: "$300",
            startDate: "Full 15 June / 280 days",
            image: "/images/university2.png",
        },
        {
            name: "UNIVERSITY OF CENTRAL EUROPE",
            program: "MS Data Science",
            locations: [
                "New York, NY",
                "Denver, CO",
                "Phoenix, AZ",
                "Las Vegas, NV",
                "San Francisco, CA",
            ],
            tuition: "$1990/yr",
            applicationFee: "$70",
            gre: "Waiver",
            documents: 20,
            deposit: "$180",
            scholarship: "$250",
            startDate: "Full 10 April / 325 days",
            image: "/images/university3.png",
        },
        {
            name: "UNIVERSITY OF SOUTHERN ASIA",
            program: "MS Artificial Intelligence",
            locations: [
                "Los Angeles, CA",
                "Austin, TX",
                "Orlando, FL",
                "Newark, NJ",
                "Tampa, FL",
            ],
            tuition: "$2200/yr",
            applicationFee: "$90",
            gre: "Required",
            documents: 22,
            deposit: "$300",
            scholarship: "$400",
            startDate: "Full 01 May / 309 days",
            image: "/images/university4.png",
        },
        {
            name: "UNIVERSITY OF EASTERN CANADA",
            program: "MS Cybersecurity",
            locations: [
                "Toronto, ON",
                "Vancouver, BC",
                "Montreal, QC",
                "Calgary, AB",
                "Ottawa, ON",
            ],
            tuition: "$2500/yr",
            applicationFee: "$85",
            gre: "Waiver",
            documents: 19,
            deposit: "$220",
            scholarship: "$500",
            startDate: "Full 20 March / 330 days",
            image: "/images/university5.png",
        },
    ];




    const handleFilterChange = (selectedFilters) => {
        console.log("Selected Filters:", selectedFilters);
    };




    return (
        <>
            <Hero />
            <div className="max-w-[1560px] bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between mx-auto mt-18 ">
                <div className="font-semibold font-inter text-xl text-Primarytext">
                    We Found <span className="text-[#C7044C]">{universities.length} Courses</span>
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
                    <div className='flex items-center justify-center bg-[#DAD9D9] rounded-[6px] p-3 text-white'><Recycle /></div>
                    <div className='flex items-center justify-center bg-[#DAD9D9] rounded-[6px] p-3 text-white'><RefreshCcw /></div>
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
                    options={batchIntakeOptions}
                    placeholder="Search Intake Batch"
                    onFilterChange={handleFilterChange}
                    icon={Calendar}
                />

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
                    options={programs}
                    placeholder="Search Programs"
                    // onFilterChange={handleFilterChange}
                    icon={BrainCircuit}
                />

            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8 max-w-[1560px] mx-auto mb-20">
                {universities.map((university, index) => (
                    <AboutUniversityCard key={index} {...university} />
                ))}
            </div>
        </>
    )
}

export default InstantFindLayout