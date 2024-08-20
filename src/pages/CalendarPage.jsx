/* eslint-disable react/prop-types */
import CalendarView from "../components/CalendarView";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import FilterEvents from "../components/FilterEvents";

const CalendarPage = ({ events, filter, setFilter, addEvent }) => {
 return (
  <div>
   <FilterEvents filter={filter} setFilter={setFilter} />
   <CalendarView events={events} filter={filter} />
   <EventList events={events} />
   <EventForm addEvent={addEvent} />
  </div>
 );
};

export default CalendarPage;
