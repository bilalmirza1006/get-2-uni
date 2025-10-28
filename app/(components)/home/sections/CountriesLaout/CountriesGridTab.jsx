"use client";
import Dropdown from "@/app/(components)/ui/Dropdown";
import FilterBar from "@/app/(components)/ui/Filterbar";
import { Calendar, Globe, Search } from "lucide-react";
import { useState } from "react";
import CountryCard from "./CountryCard";
import UniversitiesLayout from "./UniversitiesLayout";
import Button from "@/app/(components)/ui/Button";

const countries = [
    {
        name: "CANADA",
        flag: "https://flagcdn.com/w40/ca.png",
        universities: "1,280+",
        knownFor: "UofT, UBC, McGill",
        topCities: "Toronto, Vancouver",
    },
    {
        name: "USA",
        flag: "https://flagcdn.com/w40/us.png",
        universities: "1,280+",
        knownFor: "MIT, Stanford, Harvard",
        topCities: "New York, Boston",
    },
    {
        name: "AUSTRALIA",
        flag: "https://flagcdn.com/w40/au.png",
        universities: "1,280+",
        knownFor: "ANU, Melbourne, Sydney",
        topCities: "Sydney, Melbourne",
    },
    {
        name: "QATAR",
        flag: "https://flagcdn.com/w40/qa.png",
        universities: "1,280+",
        knownFor: "Qatar University",
        topCities: "Doha",
    },
    {
        name: "PAKISTAN",
        flag: "https://flagcdn.com/w40/pk.png",
        universities: "1,280+",
        knownFor: "NUST, LUMS, IBA",
        topCities: "Karachi, Lahore",
    },
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

const options = [
    { id: 1, label: "USA" },
    { id: 2, label: "UK" },
    { id: 3, label: "Canada" },
];

const batchIntakeOptions = [
    { id: 1, label: "Summer" },
    { id: 2, label: "Fall" },
    { id: 3, label: "Winter" },
];

export default function CountriesGridTab() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <>
            {/* Header */}
            <div className="w-full bg-white drop-shadow-sm max-h-16 py-3 px-6 flex items-center justify-between ">
                <div className="font-semibold font-inter text-xl text-Primarytext">
                    We Found{" "}
                    <span className="text-[#C7044C]">
                        {universities.length} Universities
                    </span>
                </div>
                <div className="flex gap-5">
                    <Dropdown
                        defaultTextColor="!text-white"
                        defaultValue={"Master"}
                        iconColor={"white"}
                        className="!py-2 bg-primarycolor !text-white"
                    />
                </div>
            </div>

            {/* Conditional Filter Bars */}
            <div>
                {!selectedCountry ? (
                    <>
                        {/* Show before explore universities */}
                        <FilterBar
                            options={options}
                            placeholder="Search Country"
                            icon={Globe}
                        />
                        <FilterBar
                            options={batchIntakeOptions}
                            placeholder="Search Intake Batch"
                            icon={Calendar}
                        />
                    </>
                ) : (
                    <>
                        {/* Show after explore universities */}
                        <FilterBar
                            options={universities.map((u, i) => ({ id: i, label: u.name }))}
                            placeholder="Search Universities"
                            icon={Search}
                        />
                        <FilterBar
                            options={batchIntakeOptions}
                            placeholder="Intake Batch"
                            icon={Calendar}
                        />
                    </>
                )}
            </div>

            {/* Main Content */}
            <div className="py-10">
                {!selectedCountry ? (
                    <CountryCard
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        countries={countries}
                    />
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <Button text="Back" onClick={() => setSelectedCountry(null)} />
                        </div>
                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
                            {universities.map((university, index) => (
                                <UniversitiesLayout key={index} {...university} />
                            ))}
                        </div>
                        {/* <UniversitiesLayout universities={universities} /> */}
                        {/* <div className="flex justify-center mt-8">
                            <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-2 rounded">
                                Load More
                            </button>
                        </div> */}
                    </>
                )}
            </div>
        </>
    );
}
