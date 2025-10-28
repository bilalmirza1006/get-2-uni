import { BrainCircuit } from "lucide-react";
import Dropdown from "../../ui/Dropdown";
import FilterBar from "../../ui/Filterbar";
import ProgramCard from "./ProgramCard";
import CourseCard from "./ProgramCard";
import ProgramFilterBar from "./ProgramFilterBar";

export default function ProgramsGrid({ data, onCourseClick }) {
  const options = [
    { id: 1, label: "Data Science", count: 307 },
    { id: 2, label: "Artificial Intelligence", count: 43 },
    { id: 3, label: "Cyber Security", count: 29 },
    { id: 4, label: "Software Engineering", count: 58 },
  ];
  const handleFilterChange = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
  };
  return (
    <>
      <div className="w-full bg-white drop-shadow-sm py-3 px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="font-semibold font-inter text-xl text-Primarytext">
          We Found <span className="text-[#C7044C]">{data.length} Courses</span>
        </div>
        <div>
          <Dropdown
            defaultTextColor="!text-white"
            defaultValue={"Master"}
            iconColor={"white"}
            className="!py-2 bg-primarycolor !text-white"
          />
        </div>
      </div>
      <div>
        <FilterBar
          options={options}
          placeholder="Search Program"
          onFilterChange={handleFilterChange}
          icon={BrainCircuit}
        />
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8.5">
        {data.map((item, index) => (
          <ProgramCard
            key={index}
            title={item.title}
            duration={item.duration}
            price={item.price}
            onCourseClick={onCourseClick}
          />
        ))}
      </div>
    </>
  );
}
