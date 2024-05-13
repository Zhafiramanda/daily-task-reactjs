import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDeleteNote }) {
  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} onDelete={() => onDeleteNote(note.id)} />
      ))}
    </ul>
  );
}

export default NoteList;
