/* eslint-disable react/prop-types */
import { useState } from "react";

const EventForm = ({ addEvent }) => {
 const [title, setTitle] = useState("");
 const [date, setDate] = useState("");
 const [category, setCategory] = useState("Work");

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!title || !date) {
   alert("Please fill out all fields");
   return;
  }
  addEvent({ title, date, category });
  setTitle("");
  setDate("");
 };

 return (
  <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md mb-4">
   <h2 className="text-lg font-bold mb-2">Add Event</h2>
   <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 border border-gray-300 rounded-lg outline-none" />
   <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 mb-2 border border-gray-300 rounded" />
   <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 mb-4 border border-gray-300 rounded">
    <option value="Work">Work</option>
    <option value="Personal">Personal</option>
   </select>
   <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
    Add Event
   </button>
  </form>
 );
};

export default EventForm;
