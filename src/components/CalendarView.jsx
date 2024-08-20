/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ events, filter }) => {
 const navigate = useNavigate();

 const getFilteredEvents = () => {
  if (filter === "All") return events;
  return events.filter((event) => event.category === filter);
 };

 const tileContent = ({ date, view }) => {
  if (view === "month") {
   const dayEvents = getFilteredEvents().filter((event) => new Date(event.date).toDateString() === date.toDateString());
   return dayEvents.map((event) => (
    <div key={event.id} className="bg-blue-200 text-xs p-1 mt-1 rounded cursor-pointer" onClick={() => navigate(`/event/${event.id}`)}>
     {event.title}
    </div>
   ));
  }
 };

 return <Calendar className="w-full mb-4 shadow-lg" tileContent={tileContent} />;
};

export default CalendarView;
