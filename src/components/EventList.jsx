/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
 return (
  <div className="bg-gray-100 p-2 rounded shadow-md">
   <h2 className="text-lg font-bold mb-2">Event List</h2>
   {events.length > 0 ? (
    <ul>
     {events.map((event) => (
      <li key={event.id} className="mb-2 p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200 rounded">
       <Link to={`/event/${event.id}`}>
        <div className="flex justify-between">
         <span className="font-semibold">{event.title}</span>
         <span className="text-gray-500 text-sm">{new Date(event.date).toDateString()}</span>
        </div>
        <div className="text-sm text-gray-600">{event.category}</div>
       </Link>
      </li>
     ))}
    </ul>
   ) : (
    <p>No events to display</p>
   )}
  </div>
 );
};

export default EventList;
