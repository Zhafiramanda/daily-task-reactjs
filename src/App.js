import React, { useState } from "react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Modal from "./components/Modal";
import { getNotes, addNote, deleteNote } from "./services/noteService";

function App() {
  const [notes, setNotes] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const handleAddNote = (note) => {
    addNote(note);
    setNotes(getNotes());
    setIsAddModalOpen(false);
  };

  const handleDeleteNote = () => {
    deleteNote(noteToDelete.id);
    setNotes(getNotes());
    setIsDeleteModalOpen(false);
    setNoteToDelete(null);
  };

  const openDeleteModal = (note) => {
    setNoteToDelete(note);
    setIsDeleteModalOpen(true);
  };

  return (
    <div>
      <Header />
      <button onClick={() => setIsAddModalOpen(true)}>Add Note</button>{" "}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <NoteForm onSubmit={handleAddNote} />
      </Modal>
      <NoteList notes={notes} onDeleteNote={openDeleteModal} />
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <div>
          <p>Are you sure you want to delete this note?</p>
          <button onClick={handleDeleteNote}>Delete</button>
          <button onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
