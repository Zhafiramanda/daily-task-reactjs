const NOTES_STORAGE_KEY = "personal_notes";

const getNotes = () => {
  const notesString = localStorage.getItem(NOTES_STORAGE_KEY);
  return notesString ? JSON.parse(notesString) : [];
};

const saveNotes = (notes) => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
};

const addNote = (note) => {
  const notes = getNotes();
  const newNote = { ...note, id: Date.now() };
  saveNotes([...notes, newNote]);
};

const deleteNote = (id) => {
  const notes = getNotes();
  const updatedNotes = notes.filter((note) => note.id !== id);
  saveNotes(updatedNotes);
};

export { getNotes, addNote, deleteNote };
