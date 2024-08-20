/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import EventDetailsModal from "../components/EventDetailsModal";

const EventDetailsPage = ({ events, editEvent, deleteEvent }) => {
 const { id } = useParams();
 const navigate = useNavigate();
 const event = events.find((event) => event.id === parseInt(id));

 if (!event) {
  return <p>Event not found</p>;
 }

 const handleDelete = () => {
  deleteEvent(event.id);
  navigate("/");
 };

 return (
  <div>
   <EventDetailsModal event={event} editEvent={editEvent} deleteEvent={handleDelete} closeModal={() => navigate("/")} />
  </div>
 );
};

export default EventDetailsPage;
