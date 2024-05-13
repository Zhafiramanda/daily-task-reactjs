import React from "react";

function NoteItem({ note, onDelete }) {
  return (
    <li>
      <div>
        <strong>{note.title}</strong>
        <p>{note.content}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default NoteItem;
