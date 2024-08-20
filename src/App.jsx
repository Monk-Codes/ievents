import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import EventDetailsPage from "./pages/EventDetailsPage";

const App = () => {
 const [events, setEvents] = useState([]);
 const [filter, setFilter] = useState("All");

 useEffect(() => {
  const storedEvents = JSON.parse(localStorage.getItem("events"));
  if (storedEvents) {
   setEvents(storedEvents);
  }
 }, []);

 useEffect(() => {
  localStorage.setItem("events", JSON.stringify(events));
 }, [events]);

 const addEvent = (event) => {
  setEvents([...events, { id: Date.now(), ...event }]);
 };

 const editEvent = (updatedEvent) => {
  setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));
 };

 const deleteEvent = (id) => {
  setEvents(events.filter((event) => event.id !== id));
 };

 return (
  <Router>
   <div className="h-screen max-w-screen-lg mx-auto">
    <h1 className="text-xl font-bold text-center mb-2 text-blue-300 hover:invert">iEvents Calendar</h1>
    <Routes>
     <Route path="/" element={<CalendarPage events={events} filter={filter} setFilter={setFilter} addEvent={addEvent} />} />
     <Route path="/event/:id" element={<EventDetailsPage events={events} editEvent={editEvent} deleteEvent={deleteEvent} />} />
    </Routes>
   </div>
  </Router>
 );
};

export default App;
