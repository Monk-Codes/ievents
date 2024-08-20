/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EventDetailsModal = ({ event, editEvent, deleteEvent, closeModal }) => {
 const [title, setTitle] = useState(event.title);
 const [date, setDate] = useState(event.date);
 const [category, setCategory] = useState(event.category);

 const handleEdit = () => {
  editEvent({ ...event, title, date, category });
  closeModal();
 };

 return (
  <Modal isOpen={true} onRequestClose={closeModal} className="p-4 bg-white rounded shadow-lg w-11/12 sm:w-1/2 mx-auto mt-20">
   <h2 className="text-lg font-bold mb-2">Edit Event</h2>
   <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 border border-gray-300 rounded" />
   <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 mb-2 border border-gray-300 rounded" />
   <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 mb-4 border border-gray-300 rounded">
    <option value="Work">Work</option>
    <option value="Personal">Personal</option>
   </select>
   <div className="flex justify-between">
    <button onClick={handleEdit} className="bg-green-500 text-white p-2 rounded">
     Save
    </button>
    <button onClick={() => deleteEvent(event.id)} className="bg-red-500 text-white p-2 rounded">
     Delete
    </button>
    <button onClick={closeModal} className="bg-gray-300 p-2 rounded">
     Cancel
    </button>
   </div>
  </Modal>
 );
};

export default EventDetailsModal;
