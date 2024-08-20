/* eslint-disable react/prop-types */

const FilterEvents = ({ filter, setFilter }) => {
 return (
  <div className="flex justify-center mb-4">
   <button onClick={() => setFilter("All")} className={`px-4 py-2 mx-1 rounded ${filter === "All" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
    All
   </button>
   <button onClick={() => setFilter("Work")} className={`px-4 py-2 mx-1 rounded ${filter === "Work" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
    Work
   </button>
   <button onClick={() => setFilter("Personal")} className={`px-4 py-2 mx-1 rounded ${filter === "Personal" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
    Personal
   </button>
  </div>
 );
};

export default FilterEvents;
